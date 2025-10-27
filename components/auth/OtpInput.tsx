"use client";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";

interface OtpInputProps {
  otp: string;
  onOtpChange: (value: string) => void;
  onSubmit: () => Promise<void>;
  error: string | null;
  loading: boolean;
}

export function OtpInput({
  otp,
  onOtpChange,
  onSubmit,
  error,
  loading,
}: OtpInputProps) {

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <InputOTP
        maxLength={6}
        onChange={onOtpChange}
        value={otp}
        pattern={REGEXP_ONLY_DIGITS}
        onComplete={onSubmit}
        disabled={loading}
        autoFocus
      >
        <InputOTPGroup autoFocus>
          <InputOTPSlot index={5} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={1} />
          <InputOTPSlot autoFocus index={0} />
        </InputOTPGroup>
      </InputOTP>
      <Button
        className="w-60"
        onClick={onSubmit}
        disabled={loading || otp.length !== 6}
      >
        {loading ? <Spinner /> : "تایید"}
      </Button>
      {error && (
        <div className="flex items-center gap-2 text-red-500">
          <AlertCircle className="w-4 h-4" />
          <span className="text-sm">{error}</span>
        </div>
      )}
    </div>
  );
}
