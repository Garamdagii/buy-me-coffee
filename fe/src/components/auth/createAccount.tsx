"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Button, UserInput } from "@/components";

export const CreateAccount = ({ onClick }: { onClick: () => void }) => {
  const [email, setChangeEmail] = useState<string>("");
  const [password, setChangePassword] = useState<string>("");

  return (
    <div>
      <Card className="flex border-none outline-none shadow-none w-[407px] p-6">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold leading-[32px] text-[#09090B]">
            Welcome,
          </CardTitle>
          <CardDescription className="text-sm leading-[20px] text-[#71717A]">
            Connect email and set a password
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <UserInput
            labelText="Email"
            inputType="email"
            inputName="email"
            placeholder="Enter email here"
            id="email"
            setChange={setChangeEmail}
          />
          <UserInput
            labelText="Password"
            inputType="password"
            inputName="password"
            placeholder="Enter password here"
            id="password"
            setChange={setChangePassword}
          />
        </CardContent>
        <CardFooter>
          <Button
            onClick={onClick}
            className="flex px-4 py-2 w-full h-[40px] items-center rounded-md opacity-[0.2] bg-[#18181B]"
          >
            Continue
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
