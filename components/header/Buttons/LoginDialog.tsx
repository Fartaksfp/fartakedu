"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../../ui/dialog";
import { Button } from "../../ui/button";
import { ChevronLeft, User } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
import Login from "@/components/auth/Login";

function LoginDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className="flex flex-row-reverse items-center gap-1 text-sm md:text-base"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          <User className="w-4 h-4 md:w-5 md:h-5" />
          <span>ورود | ثبت نام</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-bold">
            ورود یا ثبت نام با شماره موبایل
          </DialogTitle>
        </DialogHeader>
        <Login setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;
