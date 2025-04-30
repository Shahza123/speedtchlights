import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MissionVideos = () => {
    return (
        <>
            <div className='container md:mb-[60px] mb-[40px]'>
                <div className='bg-[rgb(242,242,242)]  rounded-[8px]  flex items-stretch mission-wrapper flex-col md:gap-5'>
                    <div className=" iframe-mission-video  w-full aspect-[16/9] flex-shrink-0">
                        <iframe
                            src="https://www.youtube.com/embed/abcd1234"
                            className="w-full h-full rounded-tl-[8px] rounded-bl-[8px]"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                    <div className='w-full  mission-content-wrapper p-[20px] py-5 flex-1' style={{ fontFamily: 'Open Sans' }} >
                        <h2 className=' mb-[13px] md:leading-[1.9047619048] leading-[1.3333333333] xl:text-[16px]  md:text-[21px] text-[18px] font-normal ' >OUR MISSION</h2>
                        <p className='text-[14px]   leading-[1.4285714286] text-black              mb-[25.6px] text-mission'>
                            <strong>To ensure the safety of first responders, public safety professionals, and the general public by providing reliable and affordable warning lights and equipment, delivered fast with the highest level of service.</strong>
                            <br />
                            <br />
                            Founded over 20 years ago and based in Buda, Texas, our objective is to protect and eliminate first responder's and public safety professional's risks while on the job with bright, effective lighting. We carry a wide variety of warning lights and sirens for police cars, fire trucks, ambulances, tow trucks, construction vehicles, and more. We also carry a large selection of off-road lights and scene lighting. As you browse our website, you'll find advanced LED lighting technology and innovative designs for all of your personal and emergency vehicle lighting needs.</p>

                        <div className='flex md:flex-row flex-col items-center md:gap-[19px] pt-[15px]  gap-[15px]'>

                            <button className='text-white leading-[1.3333333333] bg-[#c42738]  p-[10px] text-[15px] rounded-[4px] min-w-[152px] cursor-pointer'>WATCH VIDEO</button>
                            <div className='flex  md:flex-row flex-col md:gap-[19px] gap-[15px]  leading-[1.2941176471] text-black items-center text-[17px] '><span className='opacity-70 font-light' >or</span>

                                <Link href="#">
                                    <button className="flex items-center gap-[9px] group cursor-pointer">
                                        <span className=' transition-all duration-300 ease-in-out font-light text-[17px] leading-[1.2941176471] opacity-70'>Learn more</span>
                                        <Image
                                            src="/images/facelift/ico-n-arrow-right-black.svg"
                                            alt="arrow"
                                            width={26}
                                            height={13}
                                            className=" shrink-0 transition-transform duration-300 group-hover:translate-x-2"
                                        />
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default MissionVideos