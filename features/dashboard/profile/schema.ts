import {
  object,
  string,
  number,
  minLength,
  optional,
  pipe,
  minValue,
  InferOutput,
  picklist,
} from "valibot";

export const userInfoSchema = object({
  first_name: pipe(
    string("نام باید حرف باشد"),
    minLength(2, "نام باید حداقل دو حرف باشد")
  ),
  last_name: pipe(
    string("نام خانوادگی باید رشته باشد"),
    minLength(2, "نام خانوادگی باید حداقل دو حرف باشد")
  ),
  first_name_en: pipe(
    string("نام باید حرف باشد"),
    minLength(2, "نام باید حداقل دو حرف باشد")
  ),
  last_name_en: pipe(
    string("نام خانوادگی باید رشته باشد"),
    minLength(2, "نام خانوادگی باید حداقل دو حرف باشد")
  ),
  
  age: pipe(number("سن باید عدد باشد"), minValue(18, "سن حداقل باید 18 باشد")),
  national_code: pipe(number("کد ملی باید عدد باشد")),
  company_name: optional(string("باید حروف باشد")),
  company_name_en: optional(string("باید حروف باشد")),

  signup_model: picklist([
    "آزاد",
    "مرکز رشد، پیش رشد، کوآپ",
    "شرکت های اراضی و استیجاری",
  ],
  "لطفا نوع ثبت نام را انتخاب کنید"
  ),
});

export type UserInfoForm = InferOutput<typeof userInfoSchema>;
