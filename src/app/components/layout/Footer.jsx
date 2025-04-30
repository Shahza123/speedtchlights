import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { AccessoriesCategories, ContactTopics, GeneralLinks, LightCategories, OffRoadCategories, SaleCategories } from '../data/DummyData'

const Footer = () => {
  return (


    <footer className=" border-t font-mont pt-[43px]">
      <div className="container">
        <div className='flex lg:flex-row flex-col gap-x-[30px]'>

          <address className='flex flex-col  text-[16px] py-[7px] leading-[1.8125] font-semibold not-italic break-words  2xl:w-fit  xl:w-[265px] lg:w-[215px] w-full' >
            <p>Monday - Friday</p>
            <p>9:00 am - 4:00 pm CST (US)</p>
            <Link href="#" className='text-[#04419b] text-[16px]  leading-[1.8125] font-semibold transition-all duration-300  ease-in-out hover:underline ' > CustomerService@SpeedTechLights.com</Link>
            <Link href="#" className='mt-[20px]'> (800) 757-2581</Link>






          </address>

          <div className=' flex flex-col '>
            <p className='text-[16px] leading-[1.8125] font-semibold text-black  mb-[14.19px] 2xl:mb-[30px]'>SHOP WITH CONFIDENCE®</p>
            <div className='flex  gap-[10px] items-center '>
              <Image src="/images/facelift/img-n-footer-logo-1.webp" alt="error" width={123.14} height={33.2} className='shrink-0 2xl:w-[123.14px] 2xl:h-[33.2px] 
              
              xl:w-[81.09px] xl:h-[21.86px] lg:w-[65.28px] lg:h-[17.59px] md:w-[178px] md:h-[48px]  sm:w-[140px] sm:h-[37.75px] w-[116px] h-[31.27px]'  />
              <Image src="/images/facelift/Shopper-Approved-Logo.webp" alt="error" width={178} height={89} className='shrink-0 2xl:w-[178.89px] 2xl:h-[33.2px] 
              
              xl:w-[136.67px] xl:h-[68.33px] lg:w-[110.03px] lg:h-[55.02px] md:w-[178px] md:h-[89px]  sm:w-[140px] sm:h-[70px] w-[116px] h-[58px]' />
            </div>
          </div>
          <div className='flex  items-center '>
            <Image src="/images/facelift/Trust-Pilot-Logo.webp" alt="error" width={178} height={89} className='shrink-0 2xl:w-[178.89px] 2xl:h-[33.2px]

              xl:w-[136.67px] xl:h-[68.33px] lg:w-[110.03px] lg:h-[55.02px] md:w-[178px] md:h-[89px]  sm:w-[140px] sm:h-[70px] w-[116px] h-[58px]'/>
            <Image src="/images/facelift/Facebook-Reviews-Logo_1.webp" alt="error" width={178} height={89} className='shrink-0 2xl:w-[178px] 2xl:h-[89px]

              xl:w-[136.67px] xl:h-[68.33px] lg:w-[110.03px] lg:h-[55.02px] md:w-[178px] md:h-[89px]  sm:w-[140px] sm:h-[70px] w-[116px] h-[58px]'/>
          </div>
          <div className='flex gap-1 items-center'>
            <Image src="/images/facelift/Google-Reviews-Logo.webp" alt="error" width={178} height={89} className='shrink-0 2xl:w-[178px] 2xl:h-[89px]

              xl:w-[136.67px] xl:h-[68.33px] lg:w-[110.03px] lg:h-[55.02px] md:w-[178px] md:h-[89px]  sm:w-[140px] sm:h-[70px] w-[116px] h-[58px]'/>
            <div className='flex items-center gap-1'>
              <Image src="/images/facelift/SAE-Badge.webp" alt="error" width={63.08} height={24.95} className='shrink-0 2xl:w-[63.08px] 2xl:h-[24.95px]

              xl:w-[37.86px] xl:h-[14.98px] lg:w-[28.38px] lg:h-[11.22px] md:w-[85.22px] md:h-[33.72px]  sm:w-[64.72px] sm:h-[25.61px] w-[51.78px] h-[20.48px]'/>
              <Image src="/images/facelift/img-n-footer-logo-4.webp" alt="error" width={25.63} height={32.84} className='shrink-0 2xl:w-[25.63px] 2xl:h-[32.84px]

              xl:w-[15.38px] xl:h-[19.7px] lg:w-[11.53px] lg:h-[14.78px] md:w-[34.63px] md:h-[44.39px]  sm:w-[26.3px] sm:h-[33.7px] w-[21.03px] h-[26.95px]'/>
              <Image src="/images/facelift/img-n-footer-logo-5.webp" alt="error" width={28.25} height={28.91} className='shrink-0 2xl:w-[28.25px] 2xl:h-[28.91px]

              xl:w-[16.95px] xl:h-[19.7px] lg:w-[12.7px] lg:h-[12.98px] md:w-[38.17px] md:h-[39.05px]  sm:w-[28.98px] sm:h-[29.66px] w-[23.19px] h-[23.72px]' />
            </div>

          </div>
          {/* <div className='flex flex-col border border-red-500 w-full '>
            <div className='w-full'>
              <p className='text-[16px] leading-[1.8125] font-semibold text-black mb-[14.19px]'>SHOP WITH CONFIDENCE®</p>
            </div>
            <div className='grid grid-cols-3 gap-x-2 w-full border'>
              <div className='border  flex items-center gap-[10px] '>
                <Image src="/images/facelift/img-n-footer-logo-1.webp" alt="error" width={123.14} height={33.2} className='shrink-0 2xl:w-[123.14px] 2xl:h-[33.2px] 
              
              xl:w-[81.09px] xl:h-[21.86px] lg:w-[65.28px] lg:h-[17.59px] md:w-[178px] md:h-[48px]  sm:w-[140px] sm:h-[37.75px] w-[116px] h-[31.27px]' />
                <Image src="/images/facelift/Shopper-Approved-Logo.webp" alt="error" width={178} height={89} className='shrink-0 2xl:w-[178.89px] 2xl:h-[33.2px] 
              
              xl:w-[136.67px] xl:h-[68.33px] lg:w-[110.03px] lg:h-[55.02px] md:w-[178px] md:h-[89px]  sm:w-[140px] sm:h-[70px] w-[116px] h-[58px] object-contain ' />


              </div>

              <div className='border flex items-center justify-start '>
                <Image src="/images/facelift/Trust-Pilot-Logo.webp" alt="error" width={178} height={89} className='shrink-0 2xl:w-[178.89px] 2xl:h-[33.2px]

              xl:w-[136.67px] xl:h-[68.33px] lg:w-[110.03px] lg:h-[55.02px] md:w-[178px] md:h-[89px]  sm:w-[140px] sm:h-[70px] w-[116px] h-[58px] object-contain ml-0 ps-0'/>
                <Image src="/images/facelift/Facebook-Reviews-Logo_1.webp" alt="error" width={178} height={89} className='shrink-0 2xl:w-[178px] 2xl:h-[89px]

              xl:w-[136.67px] xl:h-[68.33px] lg:w-[110.03px] lg:h-[55.02px] md:w-[178px] md:h-[89px]  sm:w-[140px] sm:h-[70px] w-[116px] h-[58px] object-contain'/>

              </div>

              <div className='flex items-center border gap-[10px] '>
                <Image src="/images/facelift/Google-Reviews-Logo.webp" alt="error" width={178} height={89} className='shrink-0 2xl:w-[178px] 2xl:h-[89px]

              xl:w-[136.67px] xl:h-[68.33px] lg:w-[110.03px] lg:h-[55.02px] md:w-[178px] md:h-[89px]  sm:w-[140px] sm:h-[70px] w-[116px] h-[58px] object-contain'/>
                <div className='flex items-center'>
                  <Image src="/images/facelift/SAE-Badge.webp" alt="error" width={63.08} height={24.95} className='shrink-0 2xl:w-[63.08px] 2xl:h-[24.95px]

              xl:w-[37.86px] xl:h-[14.98px] lg:w-[28.38px] lg:h-[11.22px] md:w-[85.22px] md:h-[33.72px]  sm:w-[64.72px] sm:h-[25.61px] w-[51.78px] h-[20.48px] object-contain'/>
                  <Image src="/images/facelift/img-n-footer-logo-4.webp" alt="error" width={25.63} height={32.84} className='shrink-0 2xl:w-[25.63px] 2xl:h-[32.84px]

              xl:w-[15.38px] xl:h-[19.7px] lg:w-[11.53px] lg:h-[14.78px] md:w-[34.63px] md:h-[44.39px]  sm:w-[26.3px] sm:h-[33.7px] w-[21.03px] h-[26.95px] object-contain'/>
                  <Image src="/images/facelift/img-n-footer-logo-5.webp" alt="error" width={28.25} height={28.91} className='shrink-0 2xl:w-[28.25px] 2xl:h-[28.91px]

              xl:w-[16.95px] xl:h-[19.7px] lg:w-[12.7px] lg:h-[12.98px] md:w-[38.17px] md:h-[39.05px]  sm:w-[28.98px] sm:h-[29.66px] w-[23.19px] h-[23.72px] object-contain' />
                </div>
              </div>






            </div>

          </div> */}


        </div>
        <div className="grid grid-cols-2 gap-[20px] xl:gap-[40px] py-6 lg:py-8 lg:grid-cols-4  ">
          <div className=' order-3 lg:order-1 md:col-span-1 col-span-4 '>
            <h2 className=" font-semibold font-mont uppercase text-[16px] leading-[1.8125] mb-[20px]
            ">CONTACT US</h2>

            {ContactTopics.map((item, i) => (
              <Link key={i} href="#" className="block hover:underline text-[#666]  leading-[1.8666666667] text-[15px] transition-all duration-300 ease-in-out">
                {item.title}
              </Link>
            ))}

            <div className=' pt-[19px] pb-[39px] pr-[30px] mt-[30px] md:block hidden'>

              <p className='mb-[12px] text-[16px] text-black  leading-[1.8125] font-semibold font-mont'>SUBSCRIBE TO OUR NEWSLETTER</p>
              <div className="flex items-center border-[2px] border-[#d6d6d6] ] rounded-[5px] overflow-hidden w-full">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-[17px] bg-transparent text-[#000] py-2 outline-none text-[15px] leading-[1.3333333333]"
                />
                <button className="bg-[#c42738] text-white px-[15px] py-[10px] text-[15px]  leading-[1.3333]
  transition w-[102px] hover:bg-[rgb(153.4638297872,30.5361702128,43.8468085106)] cursor-pointer ">
                  SUBMIT
                </button>
              </div>
            </div>

            <div>
              <p className='text-[16px] leading-[1.8125] font-semibold mb-[10px]'>FOLLOW US</p>
              <div className=' gap-[20px]     text-[#252828] md:flex hidden ' >
                <Link
                  href='http://www.facebook.com/pages/SpeedTech-Lights/117840108274154?sk=wall'
                  target='_blank'
                  className="w-[40px] h-[40px] bg-black rounded-full  flex items-center justify-center text-white"
                >

                  <RiFacebookCircleFill className='w-[16.5px] h-[16.5px]' />

                </Link>

                <Link
                  href='https://instagram.com/speedtechlights/'
                  target='_blank'
                  className="w-[40px] h-[40px] bg-black rounded-full  flex items-center justify-center text-white"
                >
                  {/* <RiInstagramLine className=' ' /> */}
                  <div className="w-[11.38px] h-[14px] flex items-center justify-center">
                    <i className="fa-brands fa-instagram text-[13px] leading-none"></i>
                  </div>

                </Link>

                <Link
                  href='http://www.youtube.com/user/SpeedTechLightsTX'
                  target='_blank'
                  className="w-[40px] h-[40px] bg-black rounded-full  flex items-center justify-center text-white"
                >
                  {/* <RiYoutubeFill className='w-[14.63px] h-[14px]' /> */}
                  <div className="w-[14.63px] h-[14px] flex items-center justify-center">
                    <i className="fa-brands fa-youtube text-[13px] leading-none"></i>
                  </div>

                </Link>

              </div>
            </div>



          </div>
          <div className='  order-1   lg:order-2 '>
            <h2 className=" mb-[20px] text-[16px] font-semibold text-black leading-[1.8125] uppercase dark:text-white">PRODUCTS</h2>
            <h2 className=' mb-[15px]  text-[15px] font-semibold text-black uppercase dark:text-white  leading-[1.8666666667]'>WARNING LIGHTS</h2>
            {LightCategories.map((item, i) => (
              <Link key={i} href="#" className="block hover:underline text-[#666666]  leading-[1.8666666667] text-[15px] transition-all duration-300 ease-in-out">

                {item.title}
              </Link>


            ))}
          </div>
          <div className=' order-2 lg:order-3'>
            <div>
              <h2 className="pt-[48px] mb-[15px] text-[15px] font-semibold text-black uppercase dark:text-white leading-[1.8666666667] ">SIRENS & SPEAKERS</h2>
              <Link href="#" className='block hover:underline text-[#666666]  leading-[1.8666666667] text-[15px] transition-all duration-300 ease-in-out'>Sirens
              </Link>
              <Link href="#" className='block hover:underline text-[#666666]  leading-[1.8666666667] text-[15px] transition-all duration-300 ease-in-out'>Speakers

              </Link>
            </div>
            <div className='mt-[15px] '>
              <h2 className=' mb-[15px] text-[15px] font-semibold text-black uppercase dark:text-white leading-[1.8666666667] '>SWITCH BOXES & ACCESSORIES</h2>
              {AccessoriesCategories.map((item, i) => (
                <Link key={i} href="#" className='block hover:underline text-[#666666]  leading-[1.8666666667] text-[15px] transition-all duration-300 ease-in-out'>
                  {item.title}
                </Link>


              ))}
            </div>
            <div className='mt-[15px] '>
              <h2 className=' mb-[15px] text-[15px] font-semibold text-black uppercase dark:text-white leading-[1.8666666667] '>OFF ROAD LIGHTS</h2>
              {OffRoadCategories.map((item, i) => (
                <Link key={i} href="#" className='block hover:underline text-[#666666]  leading-[1.8666666667] text-[15px] transition-all duration-300 ease-in-out'>
                  {item.title}
                </Link>


              ))}
            </div>
          </div>
          <div className='order-4'>
            <div >
              <h2 className=" mb-[20px] text-[16px] font-semibold text-black leading-[1.8125] uppercase dark:text-white">sale</h2>
              {SaleCategories.map((item, i) => (
                <Link key={i} href="#" className='block hover:underline text-[#666666]  leading-[1.8666666667] text-[15px] transition-all duration-300 ease-in-out'>
                  {item.title}
                </Link>


              ))}
            </div>
            <div className='mt-[15px] '>
              <h2 className=' mb-[20px] text-[15px] font-semibold text-black uppercase dark:text-white leading-[1.8666666667] '>MISC</h2>
              {GeneralLinks.map((item, i) => (
                <Link key={i} href="#" className='block hover:underline text-[#666666]  leading-[1.8666666667] text-[15px] transition-all duration-300 ease-in-out'>
                  {item.title}
                </Link>


              ))}
            </div>
          </div>
        </div>
        <div className=' pt-[19px] pb-[39px] mt-[30px] md:hidden block w-full '>

          <p className='mb-[12px] text-[16px] text-black  leading-[1.8125] font-semibold font-mont text-nowrap'>SUBSCRIBE TO OUR NEWSLETTER</p>
          <div className="flex items-center border-[2px] border-[#d6d6d6]  rounded-[5px] overflow-hidden w-full">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-[17px] bg-transparent text-[#000] py-2 outline-none text-[15px] leading-[1.3333333333]"
            />
            <button className="bg-[#c42738] text-white px-[15px] py-[10px] text-[15px]  leading-[1.3333]
  transition w-[102px] hover:bg-[rgb(153.4638297872,30.5361702128,43.8468085106)] cursor-pointer ">
              SUBMIT
            </button>
          </div>
          <div className='flex flex-col mt-[20px] w-full'>
            <p className='text-[16px] leading-[1.8125] font-semibold mb-[10px]'>FOLLOW US</p>
            <div className='flex  gap-[20px]     text-[#252828]  mt-[10px]' >
              <Link
                href='http://www.facebook.com/pages/SpeedTech-Lights/117840108274154?sk=wall'
                target='_blank'
                className="w-[40px] h-[40px] bg-black rounded-full  flex items-center justify-center text-white"
              >

                <RiFacebookCircleFill className='w-[16.5px] h-[16.5px]' />

              </Link>

              <Link
                href='https://instagram.com/speedtechlights/'
                target='_blank'
                className="w-[40px] h-[40px] bg-black rounded-full  flex items-center justify-center text-white"
              >
                {/* <RiInstagramLine className=' ' /> */}
                <div className="w-[11.38px] h-[14px] flex items-center justify-center">
                  <i className="fa-brands fa-instagram text-[13px] leading-none"></i>
                </div>

              </Link>

              <Link
                href='http://www.youtube.com/user/SpeedTechLightsTX'
                target='_blank'
                className="w-[40px] h-[40px] bg-black rounded-full  flex items-center justify-center text-white"
              >
                {/* <RiYoutubeFill className='w-[14.63px] h-[14px]' /> */}
                <div className="w-[14.63px] h-[14px] flex items-center justify-center">
                  <i className="fa-brands fa-youtube text-[13px] leading-none"></i>
                </div>

              </Link>

            </div>
          </div>

        </div>
      </div>
      <div className="border-t w-full pt-[21px] pb-[61px]  md:flex md:items-center md:justify-between">
        <div className='flex  flex-col md:flex-row container    transition:all ease .3s md:justify-between justify-center items-center'>
          <p className="text-black text-[14px] leading-[1.2857142857] font-medium text-center md:mb-0 mb-[10px]">© 2025 SpeedTech Lights All Rights Reserved.
          </p>
          <div className="flex  text-[#666666] text-[14px] leading-[1.2857142857] space-x-[26px]">
            <Link href="#" className='hover:underline transition-all duration-300 ease-in-out'>
              Privacy Policy </Link>

            <Link href="#" className='hover:underline'>Terms of Use</Link>
            <Link href="#" className='hover:underline'>Sitemap</Link>


          </div>
        </div>

      </div>

    </footer>


  )
}

export default Footer