"use client";

import * as z from "zod";
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
  useForm,
} from "react-hook-form";
import { CardWrapper } from "./card-wrapper";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { ReactElement, JSXElementConstructor } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
  };

  return (
    <>
      <CardWrapper
        headerLabel="Welcome Back!"
        backButtonLabel="Don't have an account"
        backButtonHref="/auth/register"
        showSocial
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="john.doe@example.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="johndoe'ssecret"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError message="" />
            <FormSuccess message="" />
            <Button type="submit" className="w-full" variant="secondary">
              Login
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </>
  );
};
