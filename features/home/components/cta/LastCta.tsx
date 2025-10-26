import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import React from "react";

function LastCta() {
  return (
    <div className="text-white h-60 gap-5 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold">آماده شروع یادگیری هستید؟</h2>
      <p>توانایی های خود را با فرتاک آکادمی گسترش دهید.</p>
      <Button variant={"secondary"}>
        شروع کنید
        <ChevronLeft className="!w-5 !h-5" />
      </Button>
    </div>
  );
}

export default LastCta;
