"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormInput } from "./formInput";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const CreateUsername = () => {
  const [username, setChange] = useState<string>("");

  return (
    <div>
      <Card className="flex border-none outline-none shadow-none">
        <CardHeader>
          <CardTitle>Create Your Account</CardTitle>
          <CardDescription>Choose a username for your page</CardDescription>
        </CardHeader>
        <CardContent>
          <FormInput
            labelText="Username"
            inputType="text"
            inputName="username"
            placeholder="Enter username here"
            id="username"
            setChange={setChange}
          />
        </CardContent>
        <CardFooter>
          <Button>Continue</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
