"use client";

import { useState } from "react";
import { CreateAccount } from "./createAccount";
import { CreateUsername } from "./createUser";

export const SignUp = () => {
  const [step, setStep] = useState<number>(0);

  const handleOnClick = () => {
    setStep(step + 1);
  };

  if (step === 0) return <CreateUsername onClick={handleOnClick}  />;
  return <CreateAccount onClick={handleOnClick} />;
};
