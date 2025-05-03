"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 992 },
        items: 2,
        swipeable: false,
        draggable: false,
        showDots: false,
        centerMode: false,
    },
    tablet: {
        breakpoint: { max: 991, min: 768 },
        items: 2,
        swipeable: true,
        draggable: true,
        showDots: true,
        centerMode: true,
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1,
        swipeable: true,
        draggable: true,
        showDots: true,
        centerMode: true,
    },
};

const TrustedIndustryName = () => {
    return (

        <>
            <div className='border  border-[rgba(0,0,0,.2)] lg:pt-[26px] lg:pb-[43px] pt-[10px] pb-[56px] rounded-[5px]   grid-cols-5 gap-[20px] px-3   show-industry-name hidden'>

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
            <div className="mt-[29px] mb-[40px] border border-[rgba(0,0,0,.2)] lg:pt-[26px] lg:pb-[43px] pt-[10px]  rounded-[5px] px-3 show-industry-slider relative">
                <Carousel
                    swipeable
                    draggable
                    showDots
                    responsive={responsive}
                    ssr
                    infinite
                    autoPlay
                    autoPlaySpeed={2000}
                    keyBoardControl
                    transitionDuration={800}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item px-2"
                    arrows={false}
                    renderButtonGroupOutside
                    focusOnSelect
                >
                    {[
                        {
                            img: "/images/ico-5-stars.svg",
                            title: "Thousands of 5-Star Reviews",
                            text: "Shop with confidence with thousands of verified happy customers.",
                        },
                        {
                            img: "/images/ico-shield.svg",
                            title: "5 Year Warranties*",
                            text: "High-performance and reliable SAE certified products. *See terms & conditions.",
                        },
                        {
                            img: "/images/facelift/SAE-Badge copy.webp",
                            title: "SAE Certified Products",
                            text: "Tested and certified high-performance, top-quality warning lights.",
                        },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center  px-4 py-4 mx-2">
                            <figure className="opacity-30 mb-[5px] md:h-[56px] h-[46.6px] flex justify-center items-center">
                                <Image src={item.img} alt="icon" width={52} height={52} />
                            </figure>
                            <h3 className="text-center mb-[7px] font-semibold text-[15.625px] leading-[1.3333333333]">{item.title}</h3>
                            <p className="text-center md:text-[12px] text-[10px] leading-[1.3333333333] font-light">{item.text}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    );
};

export default TrustedIndustryName;
