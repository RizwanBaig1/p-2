import Image from "next/image"
import ima7 from "@/app/asscet/image 7.png"
import D0llr from "@/app/asscet/$120.png"
import Sk from "@/app/asscet/Frame 33.png"
import star from "@/app/asscet/Frame 35 (1).png"
import star39 from "@/app/asscet/Frame 39.png"
import st59 from "@/app/asscet/Frame 59.png"
import sh from "@/app/asscet/image 9.png"
import ts10 from "@/app/asscet/image 10.png"
import shirt from "@/app/asscet/Frame 32.png"
import oran from "@/app/asscet/Frame 33 (1).png"
import tro from "@/app/asscet/Frame 34.png"
import jea from "@/app/asscet/Frame 38.png"






function Card() {
  return (
    <div>
      <div className='w-[1222px]  h-[600px] grid grid-cols-1 mx-20 pt-[200px] sm:grid-cols-1  md:flex justify-between gap-2 '>
        <div className="w-[296] h-[444px] ">
          <div className=" w-[295px] h-[298px] bg-[#F0EEED]  ">
            <Image src={ima7} alt="img7"></Image>
          </div>
          <div className="w-[225px] h-[27px] text-sm font-bold">
            T-SHIRT WITH TAPE DETAILS
          </div>
          <div className="w-[150px]h-[19px]">
            <Image src={star} alt="star"></Image>
          </div>
          <div className="w-[55px] h-[32px]">
            <Image src={D0llr} alt="Dollar"></Image>
          </div>
        </div>



        <div className="w-[296] h-[444px] ">
          <div className=" w-[295px] h-[298px] bg-[#F0EEED] ">
            <Image src={Sk} alt="Skin fit"></Image>
          </div>
          <div className="w-[225px] h-[27px] text-sm font-bold">
            SKINNY FIT JEANS
          </div>
          <div className="w-[150px]h-[19px]">
            <Image src={star39} alt="star"></Image>
          </div>
          <div className="w-55px h-32px">
            <Image src={st59} alt="Dollar"></Image>
          </div>
        </div>



        <div className="w-[296] h-[444px] "><div className=" w-[295px] h-[298px] bg-[#F0EEED] rounded-full mx-2">
          <Image src={sh} alt="img9"></Image>
        </div>
          <div className="w-[225px] h-[27px] text-sm font-bold">
            CHECKERED SHIRT
          </div>
          <div className="w-[150px]h-[19px]">
            <Image src={star} alt="star"></Image>
          </div>
          <div className="w-55px h-32px">
            <Image src={D0llr} alt="Dollar"></Image>
          </div>
        </div>





        <div className="w-[296] h-[444px] "><div className=" w-[295px] h-[298px] bg-[#F0EEED] rounded mx-2">
          <Image src={ts10} alt="T-shrit"></Image>
        </div>
          <div className="w-[225px] h-[27px] text-sm font-bold">
            SLEEVE STRIPED T-SHIRT
          </div>
          <div className="w-[150px]h-[19px]">
            <Image src={star39} alt="star"></Image>
          </div>
          <div className="w-55px h-32px">
            <Image src={st59} alt="Dollar"></Image>
          </div>
        </div>
      </div>
      <div className="w-[218px] h-[52px] text-base font-medium text-[#000000] mx-auto -mt-44 border-black"><button className="border-black">View All</button></div>
       
      <div className='w-[403px] h-[58px] mt-[91px] mx-auto text-5xl font-bold'>Top selling</div>

      <div>
      <div className='w-[1222px] mx-auto h-[600px] grid grid-cols-1 sm:grid-cols-1 md:flex justify-between gap-2 '>
        <div className="w-[296] h-[444px] ">
          <div className=" w-[295px] h-[298px] bg-[#F0EEED]  ">
            <Image src={shirt} alt="shirt"></Image>
          </div>
          <div className="w-[225px] h-[27px] text-sm font-bold">
          VERTICAL STRIPED SHIRT
          </div>
          <div className="w-[150px]h-[19px]">
            <Image src={star} alt="star"></Image>
          </div>
          <div className="w-[55px] h-[32px]">
            <Image src={D0llr} alt="Dollar"></Image>
          </div>
        </div>

        

        <div className="w-[296] h-[444px] ">
          <div className=" w-[295px] h-[298px] bg-[#F0EEED] ">
            <Image src={oran} alt="orange t shirt"></Image>
          </div>
          <div className="w-[225px] h-[27px] text-sm font-bold">
          COURAGE GRAPHIC T-SHIRT
          </div>
          <div className="w-[150px]h-[19px]">
            <Image src={star39} alt="star"></Image>
          </div>
          <div className="w-55px h-32px">
            <Image src={st59} alt="Dollar"></Image>
          </div>
        </div>



        <div className="w-[296] h-[444px] "><div className=" w-[295px] h-[298px] bg-[#F0EEED] rounded-full mx-2">
          <Image src={tro} alt="trouser"></Image>
        </div>
          <div className="w-[225px] h-[27px] text-sm font-bold">
          LOOSE FIT BERMUDA SHORTS
          </div>
          <div className="w-[150px]h-[19px]">
            <Image src={star} alt="star"></Image>
          </div>
          <div className="w-55px h-32px">
            <Image src={D0llr} alt="Dollar"></Image>
          </div>
        </div>





        <div className="w-[296] h-[444px] "><div className=" w-[295px] h-[298px] bg-[#F0EEED] rounded mx-2">
          <Image src={jea} alt="jeans"></Image>
        </div>
          <div className="w-[225px] h-[27px] text-sm font-bold">
          FADED SKINNY JEANS
          </div>
          <div className="w-[150px]h-[19px]">
            <Image src={star39} alt="star"></Image>
          </div>
          <div className="w-55px h-32px">
            <Image src={st59} alt="Dollar"></Image>
          </div>
        </div>
      </div>
      <div className="w-[218px] h-[52px] text-base font-medium text-[#000000] mx-auto -mt-44 border-black">View All</div>

    </div>
    </div>

  )
}

export default Card