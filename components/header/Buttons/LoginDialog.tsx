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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PhoneInput } from "../../auth/PhoneInput";
import { OtpInput } from "../../auth/OtpInput";

function LoginDialog() {
  const [phone, setPhone] = useState<string>("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handlePhoneChange = (value: string) => {
    setError(null);
    setPhone(value);
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone) {
      setError("لطفا شماره موبایل را وارد کنید");
      return false;
    }
    if (phone.length !== 11) {
      setError("شماره موبایل باید ۱۱ رقم باشد");
      return false;
    }
    if (!phone.startsWith("09")) {
      setError("شماره موبایل باید با ۰۹ شروع شود");
      return false;
    }
    return true;
  };

  const handleSendOtp = async (phone: string) => {
    if (!validatePhone(phone)) return;

    try {
      setLoading(true);
      setError(null);

      const result = await fetch("/api/otp/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone_e164: phone }),
      });

      const data = await result.json();

      if (!result.ok) {
        throw new Error(data.message || "خطا در ارسال کد تایید");
      }

      if (data.success) {
        setStep(2);
      } else {
        throw new Error(data.message || "خطا در ارسال کد تایید");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "خطا در ارسال کد تایید");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await signIn("credentials", {
        phone,
        otp,
        redirect: false,
      });

      if (result?.error) {
        throw new Error("کد وارد شده صحیح نمی‌باشد");
      }

      setIsOpen(false);
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "خطا در تایید کد");
      setLoading(false);
    }
  };

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
        {step === 1 ? (
          <PhoneInput
            phone={phone}
            onPhoneChange={handlePhoneChange}
            onSubmit={handleSendOtp}
            error={error}
            loading={loading}
          />
        ) : (
          <OtpInput
            otp={otp}
            onOtpChange={setOtp}
            onSubmit={handleVerifyOtp}
            error={error}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;
