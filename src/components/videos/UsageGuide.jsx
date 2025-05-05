import React from 'react'

const UsageGuide = () => {
    return (
        <>
            <div className="w-full h-full bg-[url('/images/facelift/bg-n-videos-section-2.webp')] bg-cover bg-center bg-no-repeat md:py-[43px] py-[26px] font-montserrat">
                <div className='container text-black  h-full'>
                    <h3 className='text-center md:mb-[21.5px] mb-[13px] font-medium text-[24px]  leading-[1.4166666667] '>VIDEOS: HOW IT WORKS</h3>

                    <div className='grid   xs:grid-cols-1  grid-cols-2 video-guide-gap md:gap-[40px] gap-[20px]  min-h-[1px]  place-items-center  md:px-[20px]'>
                        <div className='flex flex-col h-full '>
                            <h3 className='md:text-[18px] text-[14px]  md:leading-[1.8888888889] leading-[1.3] font-light mb-[8px] text-center uppercase '>DEMO ONLINE BEFORE YOU BUY</h3>
                            <div>
                                <iframe
                                    src="https://www.youtube.com/embed/abcd1234"
                                    className="w-full md:h-64  h-[105.22px]"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                            <div className='  usage-demo'>
                                <p className='text-center  font-mont md:text-[15px]  text-[12px]   leading-[1.3333333333] font-normal mt-[24px] '>Demo the full functionality of your lights/sirens online using our Interactive Players.</p>
                            </div>

                        </div>
                        <div className='flex flex-col  h-full text-wrap text-center   demo-second-video'>
                            <h3 className='md:text-[18px] text-[14px]  md:leading-[1.8888888889] font-light mb-[8px] text-center uppercase leading-[1.3]'>CUSTOMIZE A LIGHTBAR</h3>
                            <div>
                                <iframe
                                    src="https://www.youtube.com/embed/abcd1234"
                                    className="w-full md:h-64 h-[105.22px]"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                            <div className='usage-demo'>
                                <p className='text-black  md:text-[15px] text-[12px] leading-[1.3333333333] font-normal text-center mt-[24px]'>Customize your light bar to your needs using our online Customization Tool.</p>
                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default UsageGuide



