import React from 'react'
import Image from 'next/image'
import image from "@/app/asscet/Frame 1.png"



function Frame1() {
  return (
    <div>
        <div className='grid sm:grid-rows-2 md:grid-rows-2 lg:grid-rows-2 w-[1440px] h-[38] mx-auto'>
            <Image  src={image} alt='image'></Image>
        </div> 
    </div>
  )
}

export default Frame1






