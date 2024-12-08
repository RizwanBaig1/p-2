import Image from "next/image"
import happy from "@/app/asscet/OUR HAPPY CUSTOMERS (1).png"


function Happ() {
  return (
    <div className="w-[654px] h-[58px] mt-44 mx-auto">
        <Image src={happy} alt="happy"></Image>
    </div>
  )
}

export default Happ