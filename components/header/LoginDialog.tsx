"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { ChevronLeft, User } from "lucide-react";
import { Input } from "../ui/input";
import { DialogTitle } from "@radix-ui/react-dialog";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { signIn } from "next-auth/react";
import { Spinner } from "../ui/spinner";

function LoginDialog() {
  const [phone, setPhone] = useState<string>("");
  const [otp, setotp] = useState("");
  const [step, setstep] = useState(1);
  const [loading, setloading] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhone(value);
  };

  const sendOtp = async (phone: string) => {
    setloading(true);
    const result = await fetch("http://localhost:3000/api/otp/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone_e164: phone }),
    });

    const data = await result.json();
    console.log(data);

    if (data.success) {
      setloading(false);
      setstep(2);
    }
  };

  return (
    <Dialog>
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
        {step === 1 && (
          <div className="flex flex-col gap-5 justify-center items-center">
            <Input
              value={phone}
              onChange={handlePhoneChange}
              placeholder="09123456789"
              type="tel"
              className="text-center !text-2xl h-15 w-60 mx-auto"
              maxLength={11}
            />
            <Button className="w-60" onClick={() => sendOtp(phone)}>
              {loading ? <Spinner /> : "ارسال کد"}
            </Button>
          </div>
        )}{" "}
        {step === 2 && (
          <div className="flex flex-col gap-5 justify-center items-center">
            <InputOTP
              maxLength={6}
              onChange={(value: string) => setotp(value)}
              value={otp}
              pattern={REGEXP_ONLY_DIGITS}
            >
              <InputOTPGroup>
                <InputOTPSlot index={5} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={0} />
              </InputOTPGroup>
            </InputOTP>
            <Button
              className="w-60"
              onClick={() => {
                signIn("credentials", { phone, otp });
              }}
            >
              {loading ? <Spinner /> : "تایید"}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;
