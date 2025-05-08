import { CreateUser, LogInButton, Logo } from "@/components";
import { LogIn } from "lucide-react";

const SignUpPage = () => {
  return (
    <div>
      <div className="flex absolute top-[32px] right-[80px]">
        <LogInButton isLogin={false} />
      </div>

      <CreateUser />
    </div>
  );
};

export default SignUpPage;
