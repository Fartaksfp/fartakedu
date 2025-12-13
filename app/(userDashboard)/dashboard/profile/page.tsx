"use client";

import ProfileContent from "@/features/dashboard/profile/ProfileContent";
import SkeletonForm from "@/features/dashboard/profile/SkeletonForm";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<SkeletonForm />}>
      <ProfileContent />
    </Suspense>
  );
}
