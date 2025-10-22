import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MapPin, Phone, Share2 } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <div className='container mx-auto pt-19 flex justify-center'>
        <div className='flex-1/4 bg-slate-100 dark:bg-slate-900 m-5 flex border-2 rounded-4xl flex-col px-10 justify-center'>
            <span className='font-bold mb-5'>به ما پیام بدهید</span>
            <form className='flex flex-col gap-5'>
                <Input placeholder='موضوع' />
                <Input placeholder='نام خانوادگی' />
                <Input placeholder='شماره تلفن' />
                <textarea className='border-2 text-black placeholder:text-gray-500 dark:bg-black p-3 rounded-xl h-20' placeholder='توضیحات' />
                <Button type='submit'>ارسال</Button>
            </form>
        </div>
        <div className='flex-3/4 flex flex-col gap-5 bg-slate-100 dark:bg-slate-900 rounded-4xl border-2 m-5 p-10'>
            <div className='flex gap-2'>
                <Phone size={20}/>
                <span className='font-bold'>تلفن : 09123456789</span>
            </div>
            <div className='flex gap-2'>
                <MapPin size={20}/>
                <span className='font-bold'>آدرس : پارک فناوری پردیس، کوچه دانش 4، ساختمان فناوران، طبقه 2</span>
            </div>
            <div className='flex gap-2'>
                <Share2 size={20}/>
                <span className='font-bold'>راه های ارتباطی : [ ایتا ] [ تلگرام ] [ اینستاگرام ] [ لینکدین ]</span>
            </div>
            <div className='h-50 w-full flex justify-center items-center bg-gray-200'>
                This Is Map PlaceHolder
            </div>
        </div>
    </div>
  )
}

export default page
