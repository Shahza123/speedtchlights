"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PiLessThanLight, PiGreaterThanLight } from "react-icons/pi";
import Image from "next/image";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};


const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="carousel-button-group absolute top-1/2  left-0 right-0 z-10 flex justify-between f">
            {/* Previous Button */}
            <button
                className={`text-black text-[40px] cursor-pointer p-0 rounded-full ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => previous()}
                disabled={currentSlide === 0}
            >
                <PiLessThanLight />
            </button>
            {/* Next Button */}
            <button
                className="text-black text-[40px] cursor-pointer  rounded-full"
                onClick={() => next()}
            >
                <PiGreaterThanLight />
            </button>
        </div>
    );
};


const CustomerReviews = () => {
    return (
        <div className="bg-[#ebecec]  md:mb-[43px]  mb-[26px] font-montserrat">
            <div className="container   py-[43px] relative mt-10">
                <p className="md:mb-[43px] mb-[26px] text-black leading-[1.4166666667] font-medium text-center md:text-[24px] text-[21px]">
                    WHAT OUR CUSTOMERS THINK
                </p>
                <div className="carousel-wrapper 2xl:px-[55px] px-[20px]">
                    <Carousel
                        className="bg-[#ebecec]"
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={500}
                        keyBoardControl={true}

                        transitionDuration={1300}
                        containerClass="carousel-container"
                        dotListClass="custom-dot-list-style"
                        itemClass="px-4 w-full"
                        arrows={false} // Disable default arrows
                        customButtonGroup={<ButtonGroup />} // Custom button group
                        renderButtonGroupOutside={true} // Place button group outside
                    >
                        {/* Carousel items */}
                        <div className="w-full aspect-[16/9] relative overflow-hidden rounded-lg">
                            <Image
                                src="/images/ezra-d.jpg"
                                alt="Customer Review"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={false}
                            />
                        </div>
                        <div className="w-full aspect-[16/9] relative overflow-hidden rounded-lg">
                            <Image
                                src="/images/relly.jpg"
                                alt="Customer Review"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={false}
                            />

                        </div>
                        <div className="w-full aspect-[16/9] relative overflow-hidden rounded-lg">
                            <Image
                                src="/images/ezra-d.jpg"
                                alt="Customer Review"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={false}
                            />
                        </div>
                        <div className="w-full aspect-[16/9] relative overflow-hidden rounded-lg">
                            <Image
                                src="/images/galeb.jpg"
                                alt="Customer Review"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={false}
                            />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;
