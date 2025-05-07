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
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const CreateAccount = () => {
  // const [email, setChange] = useState<Dispatch<SetStateAction<string>>>("");
  // const [password, setChange] = useState<Dispatch<SetStateAction<string>>>("");

  return (
    <div>
      <div>
        <Card className="flex border-none outline-none shadow-none">
          <CardHeader>
            <CardTitle>Create Your Account</CardTitle>
            <CardDescription>Choose a username for your page</CardDescription>
          </CardHeader>
          <CardContent>
            <FormInput
              labelText="Email"
              inputType="email"
              inputName="email"
              placeholder="Enter email here"
              id="email"
              // setChange={setChange}
            />
            <FormInput
              labelText="Password"
              inputType="password"
              inputName="password"
              placeholder="Enter password here"
              id="password"
              // setChange={setChange}
            />
          </CardContent>
          <CardFooter>
            <Button>Continue</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
