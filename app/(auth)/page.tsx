"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "./action";
import { useToast } from "@/hooks/use-toast";
import { makeFormData } from "@/utils/helper";
import { logger } from "@/lib/winston";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const formSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const data = makeFormData(values);
    // console.log(data, "from auth page");
    setLoading(true);
    try {
      const loggedIn = await loginUser(data);
      if (loggedIn) router.push("/boards");
    } catch (error: any) {
      toast({
        title: "Authentication Failed!",
        description: error.message,
        variant: "destructive",
      });
      // logger.info(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-h-screen min-h-screen grid grid-cols-2">
      <div className="flex items-center justify-center">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-sm text-gray-400 text-muted-foreground">
              Enter your registered email and password to login.
            </p>
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <Form {...form}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="user@email.com" {...field} />
                      </FormControl>
                      <FormDescription className="text-red-400 text-xs">
                        {form.formState.errors.email?.message}
                      </FormDescription>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="******"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-red-400 text-xs">
                        {form.formState.errors.password?.message}
                      </FormDescription>
                    </FormItem>
                  )}
                />
                <Button loading={loading} type="submit" className="w-full">
                  Login
                </Button>
              </Form>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-muted bg-gradient-to-bl from-violet-500 to-purple-500 max-h-screen min-h-screen w-full"></div>
    </div>
  );
}
