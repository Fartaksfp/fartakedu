import React from "react";

interface UserInfoData {
  first_name: string;
  last_name: string;
  age: number;
  phone: string;
  company_name: string;
  courses_count?: number;
  certificates_count?: number;
  registered_at?: string;
}

interface UserInfoProps {
  data: UserInfoData;
}

function UserInfo({ data }: UserInfoProps) {
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
          {data.last_name}
        </p>
      </div>
      <div>
        <label>سن</label>
        <p className="mt-2 border-2 py-[5px] pr-3 rounded-md border-gray-500">
          {data.age}
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
        <p className="mt-2 border-2 py-[17px] pr-3 rounded-md border-gray-500">
          {data.company_name}
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
