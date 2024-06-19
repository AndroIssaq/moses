import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LuContact2 } from "react-icons/lu";
import { FaFacebookF,FaWhatsapp ,FaPhoneAlt  } from "react-icons/fa";
const PopoverComponent = () => {
  return (
    <Popover >
      <PopoverTrigger asChild >
        <Button className='  bg-[#e9ad64] text-[#000] hover:bg-[#000] transition duration-700 rounded-full w-[65px] h-[65px]'><span className='text-[40px] text-[#000] hover:text-[#fff] transition duration-700'><LuContact2/></span></Button>
      </PopoverTrigger>
      <PopoverContent className="w-[65px] bg-transparent border-none">
        <div className="flex items-center justify-center flex-col gap-[20px]">
          <button className="flex items-center justify-center w-[65px] h-[65px] rounded-full bg-[#706f6f]">
            <a href="tel:+201273552288" className='text-[25px] text-Gold'><FaPhoneAlt /></a>
          </button>
          <button className="flex items-center justify-center w-[65px] h-[65px] rounded-full bg-[#706f6f]">
          <a href='https://www.facebook.com/profile.php?id=61555543965346' className='text-[25px] text-Gold'><FaFacebookF /></a>
          </button>
          <button className="flex items-center justify-center w-[65px] h-[65px] rounded-full bg-[#706f6f]">
          <a href="https://wa.me/+201273552288" className='text-[25px] text-Gold'><FaWhatsapp /></a>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverComponent