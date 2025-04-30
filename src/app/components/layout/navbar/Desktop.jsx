"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import ShopDropdown from './ShopDropDown'

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [triangleLeft, setTriangleLeft] = useState(0);
  const shopRef = useRef(null);

  useEffect(() => {
    if (showDropdown && shopRef.current) {
      const rect = shopRef.current.getBoundingClientRect();
      setTriangleLeft(rect.left + rect.width / 2);
    }
  }, [showDropdown]);

  return (
    <>
      <div className='flex flex-col  container  text-center m-auto'>
        <div className='text-end lg:block hidden w-full px-[10px] pt-[9px]'>
          <p className='text-[13px] text-black font-medium leading-[1.3846153846] ' >
            CALL TOLL FREE: <Link href='tel:+18007572581' className='hover:underline'>(800) 757-2581</Link>
          </p>
        </div>

        <div className='flex  justify-between w-full 2xl:gap-2 md:gap-[18px] sm:gap-[15px] gap-[3px] px-[10px]'>
          <div className='flex items-center xl:gap-3 md:gap-5 gap-[15px] nav_logo'>
            <div className="relative overflow-hidden w-[80px] h-[36.16px] lg:w-[140px] xl:w-[120px] md:w-[112px] md:h-[50.45px] 2xl:w-full 2xl:h-auto">
              <img
                src="/images/facelift/logo.webp"
                alt="Cropped Image"
                className="w-[300px] 2xl:w-full h-full 2xl:h-auto object-cover object-left"
              />
            </div>

            <div className='flex items-center lg:gap-[15px] gap-[10px] h-[20] md:h-[25] xl:h-[44.06]'>
              <Link href='https://www.bbb.org/us/tx/buda/profile/emergency-vehicle-equipment/speedtech-lights-inc-0825-90116661/" target="_blank'>
                <Image
                  src='/images/facelift/img-header-rate-1.webp'
                  alt='logo.webp'
                  width={163}
                  height={44.06}
                  className='w-[73.95] h-[20] md:w-[92.44] md:h-[25] xl:w-[163] xl:h-[44.06] shrink-0'
                />
              </Link>
              <div className='border-l-[2px] border-black h-full shrink-0'></div>
              <Link href='#'>
                <Image
                  src='/images/facelift/ico-20-years.webp'
                  alt='20 years badge'
                  width={65}
                  height={42}
                  className='w-[30.94px] h-[20px] md:w-[38.69px] md:h-[25px] xl:w-[65px] xl:h-[42px] shrink-0'
                />
              </Link>
            </div>
          </div>

          <div className='items-center gap-[53px] text-black lg:flex hidden ml-auto mr-[35px]' >
            <div
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              ref={shopRef}
            >
              <div className="flex items-center gap-[10px] cursor-pointer hover:text-[#005bab]">
                <Image
                  src='/images/facelift/ico-flasher-01.svg'
                  alt='SHOP icon'
                  width={27}
                  height={32.08}
                />
                <span className="text-[15px] leading-[22px] ">
                  SHOP
                </span>
              </div>
            </div>

            <button className='hover:text-[#005bab]  cursor-pointer text-[15px] leading-[22px] transition-all duration-[300] ease-in-out'>
              SUPPORT
            </button>
            <Link href='/about' className='text-[15px] leading-[22px] transition-all duration-[300] ease-in-out'>ABOUT</Link>
            <button className='hover:text-[#005bab]  cursor-pointer text-[15px] leading-[22px] transition-all duration-[300] ease-in-out'>
              MISC.
            </button>
            <button className='hover:text-[#005bab]  font-normal cursor-pointer text-[15px] leading-[22px] transition-all duration-300 ease-in-out'>
              CONTACT
            </button>
          </div>

          <div className='flex gap-[30px] items-center'>
            <div className='w-[22px] h-[21px]' >
              <Link href='/cart/index' className='lg:block hidden relative'>
                <Image
                  src='/images/facelift/ico-n-mini-cart.webp'
                  alt='cart'
                  width={22}
                  height={21}
                  className='cursor-pointer'
                />
                <span className='hidden lg:flex absolute -top-[5px] left-1/2 transform -translate-x-1/3 text-[#005BAB] text-[15px] min-w-[14px] h-[14px] items-center justify-center rounded-full leading-0 bg-white'>
                  0
                </span>
              </Link>
              <Link href='/cart/index' className='lg:hidden block'>
                <Image
                  src='/images/facelift/ico-n-phone-mobile.svg'
                  alt='phone'
                  width={25}
                  height={25.03}
                  className='cursor-pointer w-[25px] h-[25.03px]'
                />
                <span className='absolute -top-2 left-1/2 transform -translate-x-1/2 text-[#005BAB] text-[11px] min-w-[14px] h-[14px] items-center justify-center rounded-full lg:flex hidden shrink-0'>
                  0
                </span>
              </Link>
            </div>

            <Link href='/users/login'>
              <Image
                src='/images/facelift/ico-n-user.webp'
                alt='user'
                width={18}
                height={19}
                className='cursor-pointer'
              />
            </Link>
            <Image
              src='/images/facelift/ico-n-search.webp'
              alt='cart'
              width={19}
              height={19}
              className='cursor-pointer lg:block hidden'
            />
          </div>
        </div>
      </div>

      {/* Triangle Indicator */}
      {showDropdown && (
        <div className="relative">
          {/* Triangle pointing down */}
          <div
            className="absolute z-50 w-0 h-0 border-l-10 border-r-10 border-b-[14px] border-l-transparent border-r-transparent border-b-[#ebecec] transition-all duration-200"
            style={{
              top: 0,
              left: `${triangleLeft}px`,
              transform: 'translateY(-100%) translateX(-50%)',
            }}
          />

          {/* Dropdown itself */}
          <ShopDropdown onClose={() => setShowDropdown(false)} />
        </div>
      )}

    </>
  )
}

export default Navbar;
