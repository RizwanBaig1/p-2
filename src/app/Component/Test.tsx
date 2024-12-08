import Image from "next/image"
import fa30 from "@/app/asscet/Frame 30.png"
import Far  from "@/app/asscet/Frame 30 (1).png"
import far2 from "@/app/asscet/Frame 30 (2).png"

function Test() {
  return (
    <div className='w-[1239px] h-[300px] mx-auto grid grid-cols-1 sm:grid-cols-1  md:flex justify-between'>
        <div className='w-[400px] h-[240px] px-8 py-7'>
            <div className='[336px] h-[161.5px]'>
                <Image src={fa30} alt="farm30"></Image>
            </div>
        </div>
        
        <div className='w-[400px] h-[239.58px] px-8 py-7'>
            <div className='[336px] h-[161.5px]'>
                <Image src={Far} alt="Far"></Image>
            </div>
        </div>


        <div className='w-[400px] h-[239.58px] px-8 py-7'>
            <div className='[336px] h-[161.5px]'>
                <Image src={far2} alt="far2"></Image>
            </div>
        </div>
    </div>
  )
}

export default Test