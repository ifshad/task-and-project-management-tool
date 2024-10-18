"use client"

import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/use-logout";
import React from "react";

export default function BoardsPage() {
  const { handleLogout } = useLogout();
  return (
    <div className="flex justify-between">
      <h1>BoardsPage</h1>
      <Button onClick={handleLogout}>Log Out</Button>
    </div>
  );
}
