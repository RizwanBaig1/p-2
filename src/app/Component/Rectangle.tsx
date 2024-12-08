import React from 'react'
import Image from 'next/image'
import Rectangle2 from "@/app/asscet/Rectangle 2.png"
import Vector from "@/app/asscet/Vector.png"
 
function Rectangle() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 text-end  md: w-[1440px] h-[664px] md:flex bg-[#F2F0F1] mx-auto'>
        <div className='w-[700] h-[664px]'>
         
    <div className=' w-[577px] h-[173px] ml-[100px] pt-[103px] font-bold text-6xl'>FIND CLOTHES THAT MATCHES YOUR STYLE</div>
    <div className='w-[545px]  h-[33px] mt-[124px] ml-[100px] text-base font-normal'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
    <div className='w-[210px] h-[52px] mt-[50px] ml-[100px] bg-[#000000] rounded-full text-white py-4 px-[58px]'>Shop Now</div>
    <div className=' sm:mr-20 md:w-[596px] h-[74px] ml-[100px] gap-8  mt-12 flex *:justify-between items-center'>
        <div className='w-[141px] h-[74px] '>
            <h1 className=' w-[107px] h-[54px] font-bold text-4xl'>200+</h1>
            <p className='w-[141px] h-[22px] text-sm font-normal'>International Brands</p>
        </div>
        <div className='w-[4px] h-[74px] bg-gray-200 '></div>
        <div className='w-[141px] h-[74px]'>
            <h1 className='w-[146px] h-[54px] font-bold text-4xl'>2,000+</h1>
            <p className='w-[156px] h-[22px] text-sm font-normal'>High-Quality Products</p>
        </div>
        <div className='w-[4px] h-[74px] bg-gray-200 '></div>
        <div className='w-[141px] h-[74px]'>
            <h1 className='w-[171px] h-[54px] font-bold text-4xl'>30,000+</h1>
            <p className='w-[126px] h-[22px] text-sm font-normal'>Happy Customers</p>
         </div>
        </div>
        </div>
     <div className= ' w-[700px] h-[664px] '>
            <Image src={Rectangle2} alt='Rectangle2'></Image>
            <div className='w-14 h-14 -mt-[360px] ml-[5px]'>
              <Image src={Vector} alt='Vector'></Image>
            </div>
        
    </div>
    
    
    
    </div>
  )
}

export default Rectangle