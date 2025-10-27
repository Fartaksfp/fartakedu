"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { useRef, useEffect } from "react";

interface PhoneInputProps {
  phone: string;
  onPhoneChange: (value: string) => void;
  onSubmit: (phone: string) => Promise<void>;
  error: string | null;
  loading: boolean;
}

export function PhoneInput({
  phone,
  onPhoneChange,
  onSubmit,
  error,
  loading,
}: PhoneInputProps) {
  const phoneInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      phoneInputRef.current.focus();
    }
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    onPhoneChange(value);
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <Input
        ref={phoneInputRef}
        value={phone}
        onChange={handlePhoneChange}
        placeholder="09123456789"
        type="tel"
        className="text-center !text-2xl h-15 w-60 mx-auto"
        maxLength={11}
        disabled={loading}
      />
      <Button
        className="w-60"
        onClick={() => onSubmit(phone)}
        disabled={loading || phone.length !== 11}
      >
        {loading ? <Spinner /> : "ارسال کد"}
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
