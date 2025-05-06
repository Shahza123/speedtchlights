"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import ShopDropdown from './ShopDropDown';
import { supportLinks, MiscLinks, contactLinks } from '@/components/data/DummyData';
import DropDown from './DropDown';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [triangleLeft, setTriangleLeft] = useState(0);
  const [showSupportDropdown, setShowSupportDropdown] = useState(false);
  const [showMiscDropdown, setShowMiscDropdown] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);  // Add state for Contact dropdown

  const supportRef = useRef(null);
  const shopRef = useRef(null);
  const miscRef = useRef(null);
  const contactRef = useRef(null);  // Ref for Contact section
  const dropdownRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updatePosition = () => {
      if (shopRef.current && showDropdown) {
        const rect = shopRef.current.getBoundingClientRect();
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (containerRect) {
          setTriangleLeft(rect.left - containerRect.left + rect.width / 2);
        } else {
          setTriangleLeft(rect.left + rect.width / 2);
        }
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, [showDropdown]);

  const handleSupportEnter = () => setShowSupportDropdown(true);
  const handleSupportLeave = () => setShowSupportDropdown(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  // Handle MISC. dropdown hover
  const handleMiscEnter = () => setShowMiscDropdown(true);
  const handleMiscLeave = () => setShowMiscDropdown(false);

  // Handle CONTACT dropdown hover
  const handleContactEnter = () => setShowContactDropdown(true);  // Add function for Contact
  const handleContactLeave = () => setShowContactDropdown(false);  // Add function for Contact

  return (
    <>
      <div className='relative'>
        <div className="flex flex-col m-auto font-montserrat relative container w-full">
          {/* Top bar */}
          <div className="text-end lg:block hidden w-full px-[10px] pt-[9px]">
            <p className="text-[13px] text-black font-medium leading-[1.3846153846]">
              CALL TOLL FREE: <Link href="tel:+18007572581" className="hover:underline">(800) 757-2581</Link>
            </p>
          </div>

          {/* Main navbar */}
          <div className="flex justify-between w-full 2xl:gap-2 md:gap-[18px] sm:gap-[15px] gap-[3px] lg:pt-[0] md:pt-[30px] md:pb-[20px] p-[10px]">
            {/* Logo and badges */}
            <div className="flex items-center xl:gap-3 md:gap-5 gap-[15px] nav_logo">
              <div className="relative overflow-hidden w-[80px] h-[36.16px] md:w-[112px] md:h-[50.45px] lg:w-[140px] xl:w-[120px] 2xl:w-full 2xl:h-auto">
                <img
                  src="/images/facelift/logo.webp"
                  alt="Logo"
                  className="w-[300px] h-auto min-h-full object-cover object-left"
                />
              </div>

              <div className="flex items-center gap-[10px] lg:gap-[15px]">
                <Link href="https://www.bbb.org/us/tx/buda/profile/emergency-vehicle-equipment/speedtech-lights-inc-0825-90116661/" target="_blank">
                  <div className="relative w-[73.95px] md:w-[92.44px] xl:w-[163px] aspect-[163/44.06] shrink-0">
                    <Image
                      src="/images/facelift/img-header-rate-1.webp"
                      alt="BBB"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>

                <div className="border-l-[2px] border-black h-[20px] md:h-[25px] xl:h-[44.06px] shrink-0" />

                <Link href="#">
                  <div className="relative w-[30.94px] md:w-[38.69px] xl:w-[65px] aspect-[65/42] shrink-0">
                    <Image
                      src="/images/facelift/ico-20-years.webp"
                      alt="20 Years"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* Nav links */}
            <div className="items-center gap-[53px] text-black show-desktop-nav hidden mr-[35px]">
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={() => setShowDropdown(false)}
                ref={shopRef}
              >
                <div className="flex items-center gap-[10px] cursor-pointer hover:text-[#005bab]">
                  <Image
                    src="/images/facelift/ico-flasher-01.svg"
                    alt="SHOP"
                    width={27}
                    height={32.08}
                    className="shrink-0"
                  />
                  <span className="text-[15px] leading-[22px]">SHOP</span>
                </div>
              </div>

              <div
                className="relative"
                onMouseEnter={handleSupportEnter}
                onMouseLeave={handleSupportLeave}
                ref={supportRef}
              >
                <button className="hover:text-[#005bab] text-[15px] leading-[22px] transition-all duration-[300] ease-in-out">
                  SUPPORT
                </button>

                {showSupportDropdown && (
                  <div className="absolute top-full left-0 mt-2">
                    <DropDown links={supportLinks} />
                  </div>
                )}
              </div>

              <Link href="/about" className="text-[15px] leading-[22px] transition-all duration-[300] ease-in-out">ABOUT</Link>

              {/* MISC. button with dropdown */}
              <div
                className="relative"
                onMouseEnter={handleMiscEnter}
                onMouseLeave={handleMiscLeave}
                ref={miscRef}
              >
                <button className="hover:text-[#005bab] text-[15px] leading-[22px] transition-all duration-[300] ease-in-out">
                  MISC.
                </button>

                {showMiscDropdown && (
                  <div className="absolute top-full left-0 mt-2">
                    <DropDown links={MiscLinks} />
                  </div>
                )}
              </div>

              {/* CONTACT button with dropdown */}
              <div
                className="relative"
                onMouseEnter={handleContactEnter}  // Add hover event
                onMouseLeave={handleContactLeave}  // Add hover event
                ref={contactRef}
              >
                <button className="hover:text-[#005bab] text-[15px] leading-[22px] transition-all duration-[300] ease-in-out">
                  CONTACT
                </button>

                {showContactDropdown && (
                  <div className="absolute top-full left-0 mt-2">
                    <DropDown links={contactLinks} />
                  </div>
                )}
              </div>
            </div>

            {/* Right icons */}
            <div className="flex gap-[17px] items-center">
              <Link href="/users/login" className="phone-header hidden">
                <div className="w-[18px] h-[19px] cursor-pointer shrink-0 relative">
                  <Image src="/images/facelift/ico-n-phone-mobile.svg" alt="user" fill className="object-contain" />
                </div>
              </Link>

              <Link href="/cart/index" className="relative hidden md:block w-[22px] h-[21px]">
                <div className="w-full h-full relative">
                  <Image src="/images/facelift/ico-n-mini-cart.webp" alt="Cart" fill className="object-contain cursor-pointer" />
                </div>
                <span className="absolute -top-[5px] left-1/2 transform -translate-x-1/3 text-[#005BAB] text-xs min-w-[16px] h-[16px] flex items-center justify-center rounded-full font-semibold shadow-sm">
                  0
                </span>
              </Link>

              <Link href="/users/login">
                <div className="w-[18px] h-[19px] cursor-pointer shrink-0 relative">
                  <Image src="/images/facelift/ico-n-user.webp" alt="user" fill className="object-contain" />
                </div>
              </Link>

              <Link href="/users/login" className="search-header hidden">
                <div className="w-[18px] h-[19px] cursor-pointer shrink-0 relative">
                  <Image src="/images/facelift/ico-n-search.webp" alt="user" fill className="object-contain" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Dropdown content for SHOP */}
        {showDropdown && (
          <div
            className="absolute z-50 w-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={dropdownRef}
            style={{ top: '74%', left: 0 }}
          >
            <div
              className="absolute w-0 h-0 border-l-[60px] border-r-[60px] border-b-[90px] border-transparent border-b-[#ebecec]"
              style={{
                left: `${triangleLeft}px`,
                transform: 'translateX(-50%)',
              }}
            />
            <div className="relative">
              <ShopDropdown onClose={handleMouseLeave} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
