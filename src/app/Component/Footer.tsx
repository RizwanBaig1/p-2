import Image from "next/image"
import far45 from "@/app/asscet/Frame 45 (1).png"
import far52 from "@/app/asscet/Frame 52 (1).png"
import pay from "@/app/asscet/Frame 53 (1).png"

function Footer() {
  return (
    <div className=' gri grid-cols-1 sm:grid-cols-1 md:w-[1441px] h-[589px]  mx-auto'>
        <div className='w-[1240px] h-[180px] rounded-[20px] px-16  mx-auto'>
            <Image src={far45} alt="45"></Image>
        </div>
        <div className="w-[1441px] h-[499px] bg-[#F0F0F0] -mt-24" >
            <div className="w-[1240px] h-[177px] mx-auto py-40">
                <Image src={far52} alt="far52"></Image>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 w-[1240px] h-[80px] mx-auto md:flex justify-between" >
                <div className="w-[269px] h-[19px] text-xs font-normal py-20">Shop.co © 2000-2023, All Rights Reserved</div>
                <div className="w-[281.07px] h-[30.03px] py-20">
                    <Image src={pay} alt="pay"></Image>
                </div>
            </div>
        </div>
    </div>
  )
} 

export default Footer