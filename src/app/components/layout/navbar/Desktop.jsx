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

        <div className='flex  justify-between w-full 2xl:gap-2 md:gap-[18px] sm:gap-[15px] gap-[3px] lg:pt-[0]  md:pt-[30px] md:pb-[20px] p-[10px]'>
          <div className='flex items-center xl:gap-3 md:gap-5 gap-[15px] nav_logo'>
            <div className="relative overflow-hidden w-[80px] h-[36.16px] md:w-[112px] md:h-[50.45px] lg:w-[140px] xl:w-[120px] 2xl:w-full 2xl:h-auto">
              <img
                src="/images/facelift/logo.webp"
                alt="Cropped Image"
                className="w-[300px] h-auto min-h-full object-cover object-left"
              />
            </div>


            <div className='flex items-center gap-[10px] lg:gap-[15px]'>
              {/* BBB Badge - using aspect ratio container for consistent scaling */}
              <Link
                href='https://www.bbb.org/us/tx/buda/profile/emergency-vehicle-equipment/speedtech-lights-inc-0825-90116661/'
                target='_blank'
              >
                <div className='relative w-[73.95px] md:w-[92.44px] xl:w-[163px] aspect-[163/44.06] shrink-0'>
                  <Image
                    src='/images/facelift/img-header-rate-1.webp'
                    alt='BBB logo'
                    fill
                    className='object-contain'
                  />
                </div>
              </Link>

              {/* Divider */}
              <div className='border-l-[2px] border-black h-[20px] md:h-[25px] xl:h-[44.06px] shrink-0'></div>

              {/* 20 Years Badge */}
              <Link href='#'>
                <div className='relative w-[30.94px] md:w-[38.69px] xl:w-[65px] aspect-[65/42] shrink-0'>
                  <Image
                    src='/images/facelift/ico-20-years.webp'
                    alt='20 years badge'
                    fill
                    className='object-contain'
                  />
                </div>
              </Link>
            </div>


          </div>

          <div className='items-center gap-[53px] text-black show-desktop-nav  hidden mr-[35px]' >
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
                  className='shrink-0'
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



          <div className='flex gap-[17px] items-center'>
            <Link href="/users/login" className='phone-header hidden'>
              <div className="w-[18px] h-[19px] cursor-pointer shrink-0 relative">
                <Image
                  src='/images/facelift/ico-n-phone-mobile.svg'
                  alt="user"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <Link href="/cart/index" className="relative hidden md:block w-[22px] h-[21px]">
              <div className="w-full h-full relative">
                <Image
                  src="/images/facelift/ico-n-mini-cart.webp"
                  alt="Shopping cart"
                  fill
                  className="object-contain cursor-pointer"
                />
              </div>
              <span
                className="absolute -top-[5px] left-1/2 transform -translate-x-1/3   text-[#005BAB] text-xs min-w-[16px] h-[16px] flex items-center justify-center rounded-full font-semibold shadow-sm"
                aria-label="Cart item count"
              >
                0
              </span>
            </Link>


            <Link href="/users/login" >
              <div className="w-[18px] h-[19px] cursor-pointer shrink-0 relative">
                <Image
                  src="/images/facelift/ico-n-user.webp"
                  alt="user"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <Link href="/users/login" className='search-header hidden'>
              <div className="w-[18px] h-[19px] cursor-pointer shrink-0 relative">
                <Image
                  src='/images/facelift/ico-n-search.webp'
                  alt="user"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

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
