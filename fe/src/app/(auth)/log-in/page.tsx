"use client";
import { CreateAccount, LogInButton } from "@/components";

const LogInPage = () => {
  const logInAccount = () => {
    console.log("login");
  };
  return (
    <div>
      <div className="flex absolute top-[32px] right-[80px]">
        <LogInButton isLogin={true} />
      </div>
      <CreateAccount onClick={logInAccount} />
    </div>
  );
};

export default LogInPage;
