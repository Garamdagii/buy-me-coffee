import { CreateAccount } from "./createAccount";
import { CreateUsername } from "./createUsername";

export const SignUpPage = () => {
  return (
    <div>
      <CreateUsername />
      <CreateAccount />
    </div>
  );
};
