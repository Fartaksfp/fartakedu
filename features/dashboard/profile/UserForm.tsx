"use client";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import {
  object,
  string,
  number,
  minLength,
  optional,
  pipe,
  minValue,
  InferOutput,
} from "valibot";
import { Button } from "@/components/ui/button";
import { useAddUser } from "@/hooks/user/userMutations";

function UserForm() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const userInfoSchema = object({
    first_name: pipe(
      string("نام باید حرف باشد"),
      minLength(2, "نام باید حداقل دو حرف باشد")
    ),
    last_name: pipe(
      string("نام خانوادگی باید رشته باشد"),
      minLength(2, "نام خانوادگی باید حداقل دو حرف باشد")
    ),
    age: pipe(
      number("سن باید عدد باشد"),
      minValue(18, "سن حداقل باید 18 باشد")
    ),
    company_name: optional(string("باید حروف باشد")),
  });

  type UserInfoForm = InferOutput<typeof userInfoSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfoForm>({
    resolver: valibotResolver(userInfoSchema),
  });

  const { mutate: addUser } = useAddUser();

  const onSubmit = (values: UserInfoForm) => {
    setLoading(true)
    addUser(
      {
        ...values,
        user_id: session!.user.id,
        phone: session!.user.phone,
      },
      {
        onSuccess: () => {
          setLoading(false)
        },
        onError: (err) => {
          console.error("❌ خطا:", err.message);
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
    >
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
        {errors.age && (
          <p className="text-red-500 mt-4 text-sm">
            {errors.last_name?.message}
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
        <label>شماره تلفن</label>
        <p
          className="mt-2 border-2 py-[5px] pr-3 rounded-md border-gray-500"
        >{session?.user?.phone}</p>
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
    </form>
  );
}

export default UserForm;
