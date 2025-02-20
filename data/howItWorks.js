import { UserPlus, FileEdit, Users, LineChart } from "lucide-react";

export const howItWorks = [
  {
    title: "Personalized Onboarding",
    description:
      "Start by sharing your career goals, industry, and experience level. Our AI tailors recommendations based on your unique profile.",
    icon: <UserPlus className="w-8 h-8 text-primary" />,
  },
  {
    title: "Generate Tailored Documents",
    description:
      "Create professional, ATS-optimized resumes and cover letters with AI-driven suggestions that highlight your strengths.",
    icon: <FileEdit className="w-8 h-8 text-primary" />,
  },
  {
    title: "AI-Powered Interview Training",
    description:
      "Prepare for real-world interviews with AI-generated role-specific questions, instant feedback, and confidence-boosting insights.",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: "Track & Enhance Your Performance",
    description:
      "Use analytics to measure progress, identify improvement areas, and refine your job search strategy with AI-backed insights.",
    icon: <LineChart className="w-8 h-8 text-primary" />,
  },
];
