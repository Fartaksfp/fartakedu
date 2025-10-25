import EitaaIcon from "@/components/shared/icons/EitaaIcon";
import InstagramIcon from "@/components/shared/icons/InstagramIcon";
import LinkedinIcon from "@/components/shared/icons/LinkedinIcon";
import TelegramIcon from "@/components/shared/icons/TelegramIcon";
import WhatsappIcon from "@/components/shared/icons/WhatsappIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Share2 } from "lucide-react";
import React from "react";

function Page() {
  return (
    <div className="container mx-auto py-30 px-4 flex flex-col lg:flex-row justify-center gap-8">
      <div className="animate-in slide-in-from-bottom-20 fade-in duration-300 w-full lg:w-1/3 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-3xl shadow-md p-8 flex flex-col justify-center">
        <h2 className="font-bold mb-6 text-3xl text-slate-800 dark:text-slate-100 text-center">
          به ما پیام بدهید
        </h2>

        <form className="flex flex-col gap-5">
          <Input placeholder="موضوع" />
          <Input placeholder="نام خانوادگی" />
          <Input placeholder="شماره تلفن" />
          <textarea
            className="border border-slate-300 dark:border-slate-950 dark:bg-slate-950 text-slate-900 dark:text-slate-200 placeholder:text-slate-400 p-3 rounded-xl h-24 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="توضیحات"
          />
          <Button type="submit" className="mt-2">
            ارسال
          </Button>
        </form>
      </div>

      <div className="w-full animate-in slide-in-from-bottom-20 fade-in duration-300 lg:w-2/3 flex flex-col gap-6 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-3xl shadow-md p-8">
        <div className="flex items-center gap-3 text-slate-800 dark:text-slate-100">
          <Phone size={22} className="text-blue-600" />
          <span className="font-semibold text-lg">تلفن : 09050948319</span>
        </div>

        <div className="flex items-center gap-3 text-slate-800 dark:text-slate-100">
          <MapPin size={22} className="text-blue-600" />
          <span className="font-semibold text-lg leading-relaxed">
            آدرس : پارک فناوری پردیس، کوچه دانش ۴، ساختمان فناوران، طبقه ۲
          </span>
        </div>

        <div className="flex items-center gap-3 text-slate-800 dark:text-slate-100">
          <Share2 size={22} className="text-blue-600" />
          <div className="flex flex-wrap gap-3 items-center font-semibold text-lg">
            <span>راه‌های ارتباطی :</span>
            <div className="flex gap-3 items-center">
              <EitaaIcon
                width="25px"
                height="25px"
                href="https://eitaa.com/9050948319"
              />
              <TelegramIcon
                width="25px"
                height="25px"
                href="https://t.me/9050948319"
              />
              <WhatsappIcon
                width="25px"
                height="25px"
                href="https://wa.me/9050948319"
              />
              <InstagramIcon
                width="25px"
                height="25px"
                href="https://instagram.com/fartaksfp"
              />
              <LinkedinIcon
                width="25px"
                height="25px"
                href="https://www.linkedin.com/company/fartaksanjesh"
              />
            </div>
          </div>
        </div>

        <div className="h-[370px]  w-full overflow-hidden rounded-2xl border border-slate-300 dark:border-slate-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.8076509072557!2d51.81979989474968!3d35.73094880351971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f91da3b9eab7f37%3A0x760e3208661867e1!2z2YHYsdiq2KfaqSDYs9mG2KzYtCDZgdmG2KfZiNix24wg2b7bjNi02LHZiA!5e0!3m2!1sen!2s!4v1761385438025!5m2!1sen!2s"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Page;
