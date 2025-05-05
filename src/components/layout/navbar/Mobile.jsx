"use client"
import { BsCart3 } from "react-icons/bs";
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileSidebar from "./MobileSidebar";

const Mobile = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);


    useEffect(() => {
        document.body.style.overflow = isNavOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [isNavOpen]);


    return (
        <>

            <div className="py-[5px] bg-[#ebecec] ">
                <div className='flex justify-center   w-full container'>
                    <div className="flex justify-between   w-full  py-[5px]">
                        <div className="flex  items-center gap-[5px]">

                            <BsCart3 className="w-[22px]" />
                            <p className="text-[12px]  leading-[30px] text-[#3f4444] " style={{ fontFamily: "'Montserrat', sans-serif" }}>0 item(s) in cart </p>

                        </div>
                        <div className="flex items-center gap-1">


                            <Image src="/images/facelift/ico-n-search.webp" alt="search-mb" width={19} height={19} />
                            <RxHamburgerMenu className="w-[30px] h-[30px] border-[3px]  border-solid border-transparent cursor-pointer" onClick={() => setIsNavOpen(!isNavOpen)
                            } />
                        </div>
                    </div>
                </div>
            </div>



            <div
                className={`
    fixed top-0 left-0 w-full h-full bg-white z-50
    transition-transform duration-500 ease-in-out
    ${isNavOpen ? "translate-x-0" : "-translate-x-full"}
  `}
            >
                <Image
                    src="/images/facelift/ico-n-main-nav-close.svg"
                    alt="close"
                    width={24}
                    height={24}
                    className="fixed top-[9px] right-[18px] cursor-pointer"
                    onClick={() => setIsNavOpen(false)}
                />
            </div>
            <MobileSidebar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />


        </>
    )
}

export default Mobile