"use client";

import * as React from "react";
import { ChevronsUpDown, Hotel, Plus } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export function NavMenu() {
  const { setTheme } = useTheme();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <ChevronsUpDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => router.push("/hotel/new")}>
          <Plus size={15} />
          <span>Add Hotel</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/my-hotels")}>
          <Hotel size={15} />
          <span>My Hotels</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/my-bookings")}>
          <Hotel size={15} />
          <span>My Bookings</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
