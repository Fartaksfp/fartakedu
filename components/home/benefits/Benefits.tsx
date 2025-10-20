import React from 'react'
import BenefitCard from './BenefitCard'

const items = [
    {name: 'دوره ی برگزار شده' , number :'+50', icon: "book-open"},
    {name: 'دانشچویان ثبت نام شده' , number :'+2500', icon: "users"},
    {name: 'گواهینامه ها' , number :'+18500', icon: "award"},
    {name: 'محبوبیت کارگاه ها' , number :'92%', icon: "trending"},
] as const

function Benefits() {
  return (
    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-5'>
      {items.map((item, index)=> (
        <BenefitCard key={index} name={item.name} number={item.number} icon={item.icon}/>
      ))}
    </div>
  )
}

export default Benefits
