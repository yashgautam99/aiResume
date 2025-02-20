import { industries } from "@/data/industries";
import React from "react";

const Onboarding = () => {
  return (
    <main>
      <OnBoardingForm industries={industries} />
    </main>
  );
};

export default Onboarding;
