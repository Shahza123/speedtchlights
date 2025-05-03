"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";

// Responsive settings to show images with partial visibility of left and right images
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1,
        centerMode: true,
        partialVisibilityGutter: 50,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1, // Show only one image on tablet
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1, // Show only one image on mobile
        slidesToSlide: 1,
    },
};

// Custom Button Group Component
const ButtonGroup = ({ next, previous }) => {
    return (
        <div className="absolute inset-0 flex items-center justify-between px-[calc((100vw-862px)/2-30px)] z-10 pointer-events-none">
            {/* Left Arrow */}
            <button
                onClick={previous}
                className="pointer-events-auto"
            >
                <Image
                    src="/images/facelift/ico-arrow-up-white.svg"
                    alt="previous"
                    width={30}
                    height={30}
                    className="rotate-270 filter invert-0 brightness-0"
                />
            </button>

            {/* Right Arrow */}
            <button
                onClick={next}
                className="pointer-events-auto"
            >
                <Image
                    src="/images/facelift/ico-arrow-up-white.svg"
                    alt="next"
                    width={30}
                    height={30}
                    className="rotate-90 filter invert-0 brightness-0"
                />
            </button>
        </div>
    );
};






const ProductMobileCarousels = () => {
    return (

        <div className=" relative    mt-[29px] mb-[40px]">

            <Carousel

                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}

                transitionDuration={800}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item px-2"  // Apply custom class here
                arrows={false} // Disable default arrows
                customButtonGroup={<ButtonGroup />} // Custom button group
                renderButtonGroupOutside={true} // Place button group outside
                focusOnSelect={true}
                centerMode={true} // Center the active item
            >
                {/* Carousel Item 1 */}
                <div className=" w-full h-full">
                    <Image src="/images/82967Interactive-Player-Banner-Desktop.jpg" alt="error" width={862} height={376} className="rounded-sm" />
                </div>
                {/* Carousel Item 2 */}
                <div className="  w-full">

                    <Image src="/images/70681free-shipping-desktop.jpg" alt="error" width={862} height={376} className="rounded-sm" />

                </div>
                {/* Carousel Item 3 */}
                <div className=" w-full">
                    <Image src="/images/shop-now.jpg" alt="error" width={862} height={376} className="rounded-sm" />
                </div>
                {/* Carousel Item 4 */}
                <div className=" w-full">

                    <Image src="/images/70681free-shipping-desktop.jpg" alt="error" width={862} height={376} className="rounded-sm" />
                </div>
            </Carousel>
        </div>



    );
};

export default ProductMobileCarousels;
