import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EarnReward = () => {
    return (
        <div className='container w-full mt-[60px] mb-[20px]'>
            <div className="bg-[url('/images/facelift/bg-reward-section.webp')] bg-cover bg-center grid lg:grid-cols-2 grid-cols-1 gap-5 px-[40px] py-[70px] rounded-[8px] place-items-center">
                <div className='flex flex-col'>
                    <div className='grid grid-cols-3 gap-[14px] mb-[10px]'>
                        <div className='flex flex-col items-center md:gap-[25px] gap-[20px]'>
                            <h2 className='md:text-[24px] text-[18px] leading-1 italic font-bold uppercase '>SHOP</h2>
                            <Image src="/images/facelift/ico-reward-1.webp" alt='error' width={165} height={120} className='md:w-[165] md:h-[120] w-[119] h-[86.08] vxs' />

                        </div>
                        <div className='flex flex-col items-center md:gap-[25px] gap-[20px]'>
                            <h2 className='text-[24px] leading-1 italic font-bold uppercase '>earn</h2>
                            <Image src="/images/facelift/ico-reward-2.webp" alt='error' width={143} height={149} className='vxs2' />

                        </div>
                        <div className='flex flex-col items-center md:gap-[25px] gap-[20px]'>
                            <h2 className='text-[24px] leading-1 italic font-bold uppercase '>redeem</h2>
                            <Image src="/images/facelift/ico-reward-3.webp" alt='error' width={142} height={170} className='2xl:w-[142] h-[170] md:w-[143] md:h-[149]  ' />

                        </div>

                    </div>

                    <div className=''>
                        <h2 className='text-[21px]  uppercase font-semibold leading-[1.9047619048]  '>Earn Reward Points</h2>
                        <p>Create an account and earn points for every purchase and referral order. Use points as cash towards future purchases!</p>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-3 '>
                    <div className="border-[2px] border-transparent hover:border-black box-border transition-all duration-300 ease-in-out flex gap-4 items-center rounded-[16px] 2xl:px-[40px] 2xl:pt-[38px] 2xl:pb-[41px] p-[15px] w-full outline-2">


                        <Link href="#" className=' flex gap-4 rounded-[16px] p-[15px] items-center'>
                            <Image src="/images/facelift/ico-n-reward-1.webp" alt='error' width={59} height={73} />
                            <div className='flex flex-col'>

                                <h3 className='md:text-[25.9414px] text-[18.3116px]   leading-[1.4285714286] font-bold  '>Join Rewards Program</h3>
                                <p className='md:text-[17px] text-[12px]  leading-[1.4117647059]  font-normal '><strong>Earn points</strong> for <u>every purchase you make</u></p>
                            </div>
                        </Link>
                    </div>

                    <hr className="my-4 h-[2px] w-full " />

                    <div className='border-[2px] border-transparent hover:border-black box-border transition-all duration-300 ease-in-out flex gap-4 items-center rounded-[16px] 2xl:px-[40px] 2xl:pt-[38px] 2xl:pb-[41px] p-[15px] w-full outline-2'>
                        <Link href="#" className='flex gap-4 rounded-[16px] p-[15px] items-center'>
                            <Image src="/images/facelift/ico-n-reward-2.webp" alt='error' width={68} height={68} />
                            <div className='flex flex-col'>

                                <h3 className='md:text-[25.9414px] text-[18.3116px]   leading-[1.4285714286] font-bold'>Join Rewards Program</h3>
                                <p className='md:text-[17px] text-[12px]  leading-[1.4117647059]  font-normal '><strong>Earn points</strong> for <u>every purchase you make</u></p>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default EarnReward