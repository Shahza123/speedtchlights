import Image from 'next/image'
import React from 'react'

const TrustedBrand = () => {
    return (
        <div className='container font-mont'>

            <div>
                <h2 className='text-center mb-[43px] text-[18px]  leading-[1.6666666667] font-medium '>THE MOST TRUSTED NAME IN THE INDUSTRY FOR OVER 20 YEARS.</h2>
                <div className='flex flex-col space-y-[43px] text-black '>
                    <div className='border  border-[rgba(0,0,0,.2)] lg:pt-[26px] lg:pb-[43px] pt-[10px] pb-[56px] rounded-[5px]  grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-[20px] px-3'>

                        <div className='flex flex-col items-center'>
                            <figure className='opacity-30 mb-[5px]  md:h-[56px] h-[46.6px] flex justify-center items-center'>
                                <Image src="/images/ico-5-stars.svg" alt='error' width={52} height={24} />
                            </figure>

                            <h3 className='text-center mb-[7px] font-semibold text-[15.625px] leading-[1.3333333333] '>Thousands of 5-Star Reviews</h3>
                            <p className='text-center md:text-[12px] text-[10px]  leading-[1.3333333333] font-light '>Shop with confidence with thousands of verified happy cusotmers.</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <figure className='opacity-30 mb-[5px]  md:h-[56px] h-[46.6px] flex justify-center items-center'>
                                <Image src="/images/ico-shield.svg" alt='error' width={32} height={32} />
                            </figure>
                            <h2 className='text-center mb-[7px] font-semibold  text-[15.625px] leading-[1.3333333333] '>5 Year Warranties*</h2>
                            <p className='text-center md:text-[12px] text-[10px]  leading-[1.3333333333] font-light '>High-performance and reliable SAE certified products. *See terms & conditions.</p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <figure className='opacity-30 mb-[5px]  md:h-[56px] h-[46.6px] flex justify-center items-center'>
                                <Image src="/images/facelift/SAE-Badge copy.webp" alt='error' width={96} height={38} />
                            </figure>
                            <h2 className='text-center mb-[7px] font-semibold  text-[15.625px] leading-[1.3333333333] text-black text-nowrap'>SAE Certified Products</h2>
                            <p className='text-center md:text-[12px] text-[10px]  leading-[1.3333333333] font-light '> Tested and certified high-performance, top-quality warning lights.</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <figure className='opacity-30 mb-[5px]  md:h-[56px] h-[46.6px] flex justify-center items-center'>
                                <Image src="/images/ico-package.svg" alt='error' width={56} height={56} />
                            </figure>

                            <h2 className='text-center mb-[7px] font-semibold  text-[15.625px] leading-[1.3333333333] text-black'>Free Shipping on Orders $50+*</h2>
                            <p className='text-center md:text-[12px] text-[10px]  leading-[1.3333333333] font-light '>Free Domestic Ground Shipping.

                                *Use Code: FREESHIP</p></div>
                        <div className='flex flex-col items-center'>
                            <figure className='opacity-30 mb-[5px]  md:h-[56px] h-[46.6px] flex justify-center items-center '>
                                <Image src="/images/ico-time.svg" alt='error' width={56} height={56} />
                            </figure>
                            <h2 className='text-center mb-[7px] font-semibold  text-[15.625px] leading-[1.3333333333] text-black'>In Stock • Fast Delivery</h2>
                            <p className='text-center md:text-[12px] text-[10px]  leading-[1.3333333333] font-light '>In stock items. Ready to ship.
                                Fast order processing.</p>
                        </div>
                    </div>
                    <div className='py-[15px] border   border-[rgba(0,0,0,.2)] grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2  gap-x-[20px] justify-center rounded-[5px] mb-[43px] px-3'>
                        <div>
                            <Image src="/images/facelift/Shopper-Approved-Logo.webp" alt="error" width={279.39} height={139.69} className='shrink-0' />
                        </div>
                        <div>
                            <Image src="/images/facelift/Trust-Pilot-Logo.webp" alt="error" width={279.39} height={139.69} />
                        </div>
                        <div>
                            <Image src="/images/facelift/BBB Logo.webp" alt="error" width={279.39} height={139.69} />
                        </div>
                        <div>
                            <Image src="/images/facelift/Facebook-Reviews-Logo_1.webp" alt="error" width={279.39} height={139.69} />
                        </div>
                        <div>
                            <Image src="/images/facelift/Google-Reviews-Logo.webp" alt="error" width={279.39} height={139.69} />
                        </div>


                    </div>
                </div>
            </div>

        </div >
    )
}

export default TrustedBrand