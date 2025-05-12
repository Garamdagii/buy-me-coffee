"use client";

import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { useState } from "react";

const formSchema = z.object({
  username: z
    .string({ required_error: "Enter username" })
    .min(4, { message: "Please enter at least 4 letters" }),
});

export const CreateUsername = ({ onClick }: { onClick: () => void }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values.username);
  };

  return (
    <div>
      <Card className="flex border-none outline-none shadow-none w-[407px] p-6 rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold leading-[32px] text-[#09090B]">
                Create Your Account
              </CardTitle>
              <CardDescription className="text-sm leading-[20px] text-[#71717A]">
                Choose a username for your page
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter username here" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
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
          </form>
        </Form>
      </Card>
    </div>
  );
};
