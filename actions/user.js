"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
  const { userId } = await auth();

  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) throw new Error("User not found");

  try {
    let industryInsight = await db.industryInsight.findUnique({
      where: {
        industry: data.industry,
      },
    });

    if (!industryInsight) {
      const insights = await generateAIInsights(data.industry);

      try {
        industryInsight = await db.industryInsight.create({
          data: {
            industry: data.industry,
            ...insights,
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          },
        });
      } catch (error) {
        // Handle concurrent creation of the same industry
        if (error.code === "P2002") {
          industryInsight = await db.industryInsight.findUnique({
            where: {
              industry: data.industry,
            },
          });
        } else {
          throw error;
        }
      }
    }

    const updatedUser = await db.user.update({
      where: {
        id: user.id,
      },
      data: {
        industry: data.industry,
        experience: data.experience,
        bio: data.bio,
        skills: data.skills,
      },
    });

    revalidatePath("/");

    return updatedUser;
  } catch (error) {
    console.error("Error updating user and industry:", error);
    throw new Error("Failed to update profile");
  }
}

export async function getUserOnboardingStatus() {
  const { userId } = await auth();

  if (!userId) throw new Error("Unauthorized");

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });

    if (!user) throw new Error("User not found");

    return {
      isOnboarded: !!user.industry,
    };
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    throw new Error("Failed to check onboarding status");
  }
}
