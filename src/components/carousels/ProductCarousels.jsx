"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PiLessThanLight, PiGreaterThanLight } from "react-icons/pi";
import Image from "next/image";

// Responsive settings to show one image in the center, with partial visibility of others
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3, // Show 3 images on desktop
        slidesToSlide: 1,
        centerMode: true,  // Center the active image on desktop
        partialVisible: true, // Enable partial visibility for the left and right images
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1, // Show only one image on tablet
        slidesToSlide: 1,
        centerMode: false, // Disable center mode on tablet
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1, // Show only one image on mobile
        slidesToSlide: 1,
        centerMode: false, // Disable center mode on mobile
    },
};

// Custom Button Group Component
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="carousel-button-group absolute top-1/2 left-0 right-0 sm:left-3 sm:right-3 md:left-1 md:right-1 lg:left-5 lg:right-5 xl:left-28 xl:right-28 2xl:left-138 2xl:right-138 z-10 flex justify-between px-4">
            {/* Previous Button */}
            <button
                className={`text-black text-[40px] cursor-pointer p-2 rounded-full ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''} hidden lg:block`} // Hide on small screens
                onClick={() => previous()}
                disabled={currentSlide === 0}
            >
                <PiLessThanLight />
            </button>
            {/* Next Button */}
            <button
                className="text-black text-[40px] cursor-pointer p-2 rounded-full hidden lg:block" // Hide on small screens
                onClick={() => next()}
            >
                <PiGreaterThanLight />
            </button>
        </div>
    );
};

const ProductCarousels = () => {
    return (


        <Carousel
            className="md:mt-[10px] mt-0 "
            swipeable={false}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}

            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style  absolute bottom-4 left-[200px]  transform bottom-[100px] z-10"

            arrows={false} // Disable default arrows
            customButtonGroup={<ButtonGroup />} // Custom button group
            renderButtonGroupOutside={true} // Place button group outside
            focusOnSelect={true} // Ensure that the centered item gets selected
            partialVisible={true} // Enable partial visibility for the left and right images
        >
            {/* Carousel Item 1 */}

            <div className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[376px] overflow-hidden">
                <Image
                    src="/images/shop-now.jpg"
                    alt="Banner"
                    fill
                    className="object-cover rounded"
                />
            </div>


            {/* Carousel Item 2 */}

            <div className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[376px] overflow-hidden">
                <Image
                    src="/images/shop-now.jpg"
                    alt="Banner"
                    fill
                    className="object-cover rounded"
                />
            </div>


            {/* Carousel Item 3 */}

            <div className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[376px] overflow-hidden">
                <Image
                    src="/images/shop-now.jpg"
                    alt="Banner"
                    fill
                    className="object-cover rounded"
                />
            </div>


            {/* Carousel Item 4 */}

            <div className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[376px] overflow-hidden">
                <Image
                    src="/images/shop-now.jpg"
                    alt="Banner"
                    fill
                    className="object-cover rounded"
                />
            </div>


        </Carousel>

    );
};

export default ProductCarousels;
