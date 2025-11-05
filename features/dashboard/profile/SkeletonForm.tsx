import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

function SkeletonForm() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      <div>
        <Skeleton className='w-20 h-5 mb-3'/>
        <Skeleton className='w-full h-10'/>
      </div>
      <div>
        <Skeleton className='w-20 h-5 mb-3'/>
        <Skeleton className='w-full h-10'/>
      </div>
      <div>
        <Skeleton className='w-20 h-5 mb-3'/>
        <Skeleton className='w-full h-10'/>
      </div>
      <div>
        <Skeleton className='w-20 h-5 mb-3'/>
        <Skeleton className='w-full h-10'/>
      </div>
      <div>
        <Skeleton className='w-20 h-5 mb-3'/>
        <Skeleton className='w-full h-10'/>
      </div>
      <div>
        <Skeleton className='w-20 h-5 mb-3'/>
        <Skeleton className='w-full h-10'/>
      </div>
      <Skeleton className='w-full h-10 col-span-2'/>
    </div>
  )
}

export default SkeletonForm
