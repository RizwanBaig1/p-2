import React from 'react'
import Image from 'next/image'
import  image  from "@/app/asscet/Frame.png"
import  Frame5 from "@/app/asscet/Frame 5.png"
function Header() {
  return (
    <div className='w-[1440px] h-[96px] bg-white mx-auto'> 
    <div className='w-[1240px] h-[48px]  flex justify-between items-center mx-24 mt-10'>
        <div className='w-[160px] h-[22px] ]'>
            <h1 className='text-3xl font-bold py'>SHOP.CO</h1>
        </div>
        <div className='w-[321px] h-[22px] text-base font-normal '>
            <ul className=' hidden sm:flex  justify-between w-[321px] h-[22px]'>
                <li>Shop</li>
                <li>On Sale</li>
                <li>New Arrivals</li>
                <li>Brands</li>
            </ul>
        </div>
        <div className=' hidden lg:w-[577px] sm:flex h-[48px] bg-[#F0F0F0] pt-3 px-4 rounded-full'>
            <div className='  w-6 h-6'>
                <Image src={image} alt='image'></Image>
            </div>
            <div className='w-[251px] bg-[#F0F0F0]  h-[22px] mx-5 font-normal text-base'>
                    <h1>Search for products... </h1> 
               </div>
             </div> 
             <div className='w-[62px] h-[24px]'>
                <Image src={Frame5} alt='Frame5'></Image>
             </div>

    </div>
    </div>
  )
}

export default Header