import Image from "next/image"
import ima60 from "@/app/asscet/Frame 60 (1).png"

function Style() {
  return (
    <div className='w-[1239px] h-[866px] bg-[#F0F0F0] rounded-lg mx-auto mt-8'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:w-[687px] h-[58px] sm:pt-[70px] mx-auto text-5xl font-bold'>BROWSE BY dress STYLE</div>
    <Image src={ima60} alt="aima60"></Image>
    </div>
  )
}

export default Style