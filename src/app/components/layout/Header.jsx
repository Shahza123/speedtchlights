import Link from 'next/link'
import React from 'react'

import { RiFacebookCircleFill } from 'react-icons/ri'


const Header = () => {

  return (
    <>
      <div className='bg-[#ebecec] w-full  py-[6px] flex justify-center' style={{ fontFamily: "Montseerat" }}>
        <div className='container  flex items-center gap-[2rem] lg:justify-between justify-center text-center     px-[10px]'>

          <p className='md:text-[13px]   text-[11px]  leading-[1.2307692308]'>
            <strong>
              FREE SHIPPING ON ORDERS $50+!* <span>USE CODE: FREESHIP</span>
            </strong>
          </p>

          <div className='hidden lg:flex xl:gap-[23px] lg:gap-[20px]     text-[#252828]'>
            <Link
              href='http://www.facebook.com/pages/SpeedTech-Lights/117840108274154?sk=wall'
              target='_blank'
              className="w-[27px] h-[27px] bg-black rounded-full  flex items-center justify-center text-white"
            >

              <RiFacebookCircleFill className='w-[16.5px] h-[16.5px]' />

            </Link>

            <Link
              href='https://instagram.com/speedtechlights/'
              target='_blank'
              className="w-[27px] h-[27px] bg-black rounded-full  flex items-center justify-center text-white"
            >

              <div className="w-[11.38px] h-[14px] flex items-center justify-center">
                <i className="fa-brands fa-instagram text-[13px] leading-none"></i>
              </div>

            </Link>

            <Link
              href='http://www.youtube.com/user/SpeedTechLightsTX'
              target='_blank'
              className="w-[27px] h-[27px] bg-black rounded-full  flex items-center justify-center text-white"
            >

              <div className="w-[14.63px] h-[14px] flex items-center justify-center">
                <i className="fa-brands fa-youtube text-[13px] leading-none"></i>
              </div>

            </Link>
          </div>

        </div>
      </div>

    </>
  )
}

export default Header
