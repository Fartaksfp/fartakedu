import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function notfound() {
  return (
    <div className='w-full h-dvh flex flex-col gap-5 justify-center items-center'>
      <h1>404 - صفحه پیدا نشد</h1>
      <p>متأسفیم، صفحه‌ای که دنبال آن بودید وجود ندارد.</p>
      <Link href="/">
      <Button>
        بازگشت به صفحه اصلی
      </Button>
        </Link>
    </div>
  )
}

export default notfound
