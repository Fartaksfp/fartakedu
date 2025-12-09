"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { UserInfoForm } from "./schema";
import { UserInfoPayload } from "@/types/userInfo";

export default function UserFormFields({
  form,
  user,
  loading,
}: {
  form: UseFormReturn<UserInfoForm>;
  user: UserInfoPayload | null;
  loading: boolean;
}) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <>
      <div>
        <label>نام</label>
        <Input
          className="mt-2 border-2 border-gray-500"
          {...register("first_name")}
        />
        {errors.first_name && (
          <p className="text-red-500 mt-4 text-sm">
            {errors.first_name.message}
          </p>
        )}
      </div>

      <div>
        <label>نام خانوادگی</label>
        <Input
          className="mt-2 border-2 border-gray-500"
          {...register("last_name")}
        />
        {errors.last_name && (
          <p className="text-red-500 mt-4 text-sm">
            {errors.last_name.message}
          </p>
        )}
      </div>

      <div>
        <label>سن</label>
        <Input
          className="mt-2 border-2 border-gray-500"
          type="number"
          {...register("age", { valueAsNumber: true })}
        />
        {errors.age && (
          <p className="text-red-500 mt-4 text-sm">{errors.age.message}</p>
        )}
      </div>

      <div>
        <label>کد ملی</label>
        <Input
          className="mt-2 border-2 border-gray-500"
          {...register("national_code", { valueAsNumber: true })}
        />
        {errors.national_code && (
          <p className="text-red-500 mt-4 text-sm">{errors.national_code.message}</p>
        )}
      </div>

      <div>
        <label>شماره تلفن</label>
        <p className="mt-2 border-2 h-9 py-[6px] pr-3 rounded-md border-gray-500">
          {user?.phone}
        </p>
      </div>

      <div>
        <label>نام شرکت</label>
        <Input
          className="mt-2 border-2 border-gray-500"
          {...register("company_name")}
        />
      </div>

      <Button disabled={loading} type="submit" className="w-full col-span-2">
        {loading ? "در حال ذخیره..." : "ذخیره اطلاعات"}
      </Button>
    </>
  );
}
