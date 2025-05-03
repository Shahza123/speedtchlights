import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EarnReward = () => {
    return (
        <div className='container-earn  md:mt-[60px] mt-[40px] md:mb-[60px] mb-[40px]'>
            <div className="bg-[url('/images/facelift/bg-reward-section.webp')] bg-cover bg-center flex  gap-[6%] reward-section   py-[70px] md:rounded-[8px]">
                <div className='flex flex-col  shop-earn-redeem '>
                    <div className='flex gap-[14px] mb-[35px] shop-earn'>
                        <div className='flex flex-col items-center  '>
                            <h2 className='md:text-[24px] text-[18px] md:ps-[40px] leading-1 italic font-bold uppercase mb-[25px]'>SHOP</h2>
                            <Image src="/images/facelift/ico-reward-1.webp" alt='error' width={165} height={120} className='md:w-[165] md:h-[120] w-[119] h-[86.08] shop-basket mt-[50px] ' />

                        </div>
                        <div className='flex flex-col items-center'>
                            <h2 className='md:text-[24px]  text-[18px] leading-1 italic font-bold uppercase mb-[25px]'>earn</h2>
                            <Image src="/images/facelift/ico-reward-2.webp" alt='error' width={143} height={149} className='vxs2 mt-[21px] earn-coin' />

                        </div>
                        <div className='flex flex-col items-center'>
                            <h2 className='md:text-[24px] text-[18px] leading-1 italic font-bold uppercase mb-[25px]'>redeem</h2>
                            <Image src="/images/facelift/ico-reward-3.webp" alt='error' width={142} height={170} className='w-[142] h-[170]  redeem-dollar' />

                        </div>

                    </div>

                    <div>
                        <h2 className='text-[21px]  uppercase font-semibold leading-[1.9047619048] my-[-2px]  '>Earn Reward Points</h2>
                        <p className='text-[18px] mb-[10px]   leading-[1.3888888889] text-wrap' style={{ fontFamily: 'Open Sans, sans-serif' }} > Create an account and earn points for every purchase and referral order. Use points as cash towards future purchases!</p>
                    </div>
                </div>
                <div className='flex md:flex-col flex-row items-center gap-3  join-reward-program'>
                    <div className="border-[2px] border-transparent hover:border-black box-border transition-all duration-300 ease-in-out  gap-4  rounded-[16px]    join-wrapper  py-[15px] w-full outline-2 ">


                        <Link href="#" className=' flex md:flex-row flex-col gap-4 rounded-[16px]  items-center '>
                            <Image src="/images/facelift/ico-n-reward-1.webp" alt='error' width={59} height={73} />
                            <div className='flex flex-col text-center'>

                                <h3 className='md:text-[21.0001px] text-[14.8236px]   leading-[1.4285714286] font-bold  mb-[3px]'>Join Rewards Program</h3>
                                <p className='md:text-[17px] text-[12px]  leading-[1.4117647059] text-wrap font-normal '><strong>Earn points</strong> for <u>every purchase you make</u></p>
                            </div>
                        </Link>
                    </div>

                    <hr className="md:block hidden  my-4 h-[2px] w-full " />

                    <div className='border-[2px] border-transparent hover:border-black box-border transition-all duration-300 ease-in-out  gap-4 items-center rounded-[16px] join-wrapper py-[15px] w-full outline-2'>
                        <Link href="#" className='flex md:flex-row flex-col gap-4 rounded-[16px] items-center'>
                            <Image src="/images/facelift/ico-n-reward-2.webp" alt='error' width={68} height={68} />
                            <div className='flex flex-col text-center'>

                                <h3 className='md:text-[21.0001px] text-[14.8236px]   leading-[1.4285714286] font-bold  mb-[3px] text-wrap'>Join Rewards Program</h3>
                                <p className='md:text-[17px] text-[12px]  leading-[1.4117647059] text-wrap font-normal '><strong>Earn points</strong> for <u>every person your refer  to STL</u></p>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default EarnReward