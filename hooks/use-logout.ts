"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { useToast } from "./use-toast";

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut();
    } catch (error: any) {
      toast({
        title: "Logout Failed!",
        description: error.message,
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  return { loading, handleLogout };
};
