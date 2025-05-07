import { Button } from "@/components";

export const LogInButton = ({ isLogin }: { isLogin: boolean }) => {
  return (
    <Button
      variant="secondary"
      className="inline-flex h-[40px] px-4 py-2 justify-center items-center rounded-md"
    >
      {isLogin ? (
        <p className="text-sm font-medium leading-[20px] text-[#18181B]">
          Sign up
        </p>
      ) : (
        <p className="text-sm font-medium leading-[20px] text-[#18181B]">
          Log in
        </p>
      )}
    </Button>
  );
};
