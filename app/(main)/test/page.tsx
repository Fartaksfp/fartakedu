'use client'
import { Button } from '@/components/ui/button'
import React from 'react'

function page() {

    const getPaymentToken = () => {
        const res = fetch('/api/payment',{
            method:'POST',
            body: JSON.stringify({
                "amount": 15000,
                "phoneNumber":"09226839455" 
            })

        })

    }

  return (
    <div className='py-30'>
      <Button onClick={getPaymentToken}>
        Go To Payment
      </Button>
    </div>
  )
}

export default page
