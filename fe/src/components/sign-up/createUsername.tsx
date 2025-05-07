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

export const CreateUsername = ({ onClick }: { onClick: () => void }) => {
  const [username, setChange] = useState<string>("");
  const [error, setError] = useState("");
  console.log(username);

  //   if (username.length < 5) {
  //     setError("Username must be at least 5 characters.");
  //   }

  return (
    <div>
      <Card className="flex border-none outline-none shadow-none w-[407px] p-6 rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold leading-[32px] text-[#09090B]">
            Create Your Account
          </CardTitle>
          <CardDescription className="text-sm leading-[20px] text-[#71717A]">
            Choose a username for your page
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserInput
            labelText="Username"
            inputType="text"
            inputName="username"
            placeholder="Enter username here"
            id="username"
            error={error}
            setChange={setChange}
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

// display: flex;
// height: 40px;
// padding: 8px 16px;
// justify-content: center;
// align-items: center;
// gap: 8px;
// flex: 1 0 0;
// border-radius: var(--radius-rounded-md, 6px);
// opacity: 0.2;
// background: var(--background-bg-primary, #18181B);
