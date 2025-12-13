"use client";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useState } from "react";
import { PhoneInput } from "./PhoneInput";
import { OtpInput } from "./OtpInput";

interface ModalProps {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  callbackurl?: string;
}

function Login({ setIsOpen, callbackurl }: ModalProps) {
  const [phone, setPhone] = useState<string>("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
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

      const result = await fetch("/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          phone: phone,
          otp: otp,
        }),
      });

      const data = await result.json();

      if (data.success === false) {
        throw new Error("کد وارد شده صحیح نمی‌باشد");
      } else {
        if (setIsOpen) {
          setIsOpen(false);
        }
        if (typeof callbackurl === "string" && callbackurl.length > 0) {
          router.replace(callbackurl);
        } else {
          router.replace("/dashboard");
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "خطا در تایید کد");
      setLoading(false);
    }
  };

  return (
    <div>
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
    </div>
  );
}

export default Login;
