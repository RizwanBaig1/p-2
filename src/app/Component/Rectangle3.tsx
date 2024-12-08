import Image from "next/image"
import zara from "@/app/asscet/zara-logo-1 1.png"
import cal from "@/app/asscet/Vector (2).png"
import ver from "@/app/asscet/Vector (1).png"
import gucci from "@/app/asscet/gucci-logo-1 1.png"
import para from "@/app/asscet/Vector (3).png"
function  Rectangle3() {
  return (
    <div className='sm:hidden md:w-[1440px] h-[122px] bg-[#000000] mx-auto md:flex justify-between items-center px-24'>
        <div className="w-[166.48px] h-[33.16px] ">
          <Image src={ver} alt="ver"></Image>
        </div>
        <div className="w-[91px] h-[38px]">
          <Image src={zara} alt="zara"></Image>
        </div>
        <div className="w-[156px] h-[36px]"> 
          <Image src={gucci} alt="gucci"></Image>
          </div> 
        <div className="w-[194px] h-[32px]">
          <Image src={para} alt="para"></Image>
          </div> 
        <div className="w-[206.79px] h-[33.35]">
          <Image src={cal} alt="cal"></Image>
        </div>
        
        
    </div>
  )
}

export default  Rectangle3