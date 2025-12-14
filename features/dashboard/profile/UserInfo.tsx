import { UserInfoPayload } from "@/types/userInfo";
import React from "react";

function UserInfo({ data }: { data: UserInfoPayload }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <label>نام</label>
        <p className="mt-2 border-2 py-[5px] pr-3 rounded-md border-gray-500">
          {data.first_name}
        </p>
      </div>
      <div>
        <label>نام خانوادگی</label>
        <p className="mt-2 border-2 py-[5px] pr-3 rounded-md border-gray-500">
          {data.last_name ?? "ثبت نشده"}
        </p>
      </div>
      <div>
        <label>نام (لاتین)</label>
        <p className="mt-2 border-2 py-[5px] pr-3 rounded-md border-gray-500">
          {data.first_name_en ?? "ثبت نشده"}
        </p>
      </div>
      <div>
        <label>نام خانوادگی (لاتین)</label>
        <p className="mt-2 border-2 py-[5px] pr-3 rounded-md border-gray-500">
          {data.last_name_en ?? "ثبت نشده"}
        </p>
      </div>
      <div>
        <label>سن</label>
        <p className="mt-2 border-2 py-[5px] pr-3 rounded-md border-gray-500">
          {data.age}
        </p>
      </div>
      <div>
        <label>کد ملی</label>
        <p className="mt-2 border-2 py-[5px] pr-3 rounded-md border-gray-500">
          {data.national_code}
        </p>
      </div>
      <div>
        <label>شماره تلفن</label>
        <p className="mt-2 border-2 py-[5px] pr-3 rounded-md border-gray-500">
          {data.phone}
        </p>
      </div>
      <div>
        <label>نام شرکت</label>
        <p className="mt-2 border-2 py-[5px] pr-3 rounded-md border-gray-500">
          {data.company_name ?? "ثبت نشده"}
        </p>
      </div>
      <div>
        <label>نام شرکت (لاتین)</label>
        <p className="mt-2 border-2 py-[5px] pr-3 rounded-md border-gray-500">
          {data.company_name_en ?? "ثبت نشده"}
        </p>
      </div>
      <div>
        <label>نوع ثبت نام</label>
        <p className="mt-2 border-2 py-[5px] pr-3 rounded-md border-gray-500">
          {data.signup_model}
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
