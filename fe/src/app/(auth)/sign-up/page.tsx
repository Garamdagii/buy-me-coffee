import { CreateUser, LogInButton } from "@/components";

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
