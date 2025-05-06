"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

// Custom responsive settings
// Better responsive settings with more clear XL breakpoints
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1921 },
        items: 1,
        partialVisibilityGutter: 200,
    },
    desktopXL: {
        breakpoint: { max: 1920, min: 1401 },
        items: 1,
        partialVisibilityGutter: 150,
    },
    desktop: {
        breakpoint: { max: 1400, min: 1024 },
        items: 1,
        partialVisibilityGutter: 120,
    },
    tablet: {
        breakpoint: { max: 1023, min: 640 },
        items: 1,
        partialVisibilityGutter: 80,
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        items: 1,
        partialVisibilityGutter: 40,
    },
};


// Custom arrows
const ButtonGroup = ({ next, previous }) => {
    return (
        <div className="absolute inset-0 flex items-center justify-between px-[calc((100vw-862px)/2-30px)] z-10 pointer-events-none">
            <button onClick={previous} className="pointer-events-auto">
                <Image
                    src="/images/facelift/ico-arrow-up-white.svg"
                    alt="previous"
                    width={30}
                    height={30}
                    className="rotate-[270deg] filter invert-0 brightness-0"
                />
            </button>

            <button onClick={next} className="pointer-events-auto">
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
        <div className="relative w-full mx-auto mt-[29px] mb-[40px]">
            <Carousel
                swipeable
                draggable
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                transitionDuration={800}
                containerClass="w-full"
                itemClass="px-2 carousel-item"
                arrows={false}
                customButtonGroup={<ButtonGroup />}
                renderButtonGroupOutside={true}
                focusOnSelect={true}
                centerMode={true}
            // partialVisible={true}
            >



                {/* Carousel Items */}
                <div className="w-full aspect-[862/376] relative rounded-sm overflow-hidden">
                    <Image
                        src="/images/82967Interactive-Player-Banner-Desktop.jpg"
                        alt="Banner 1"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="w-full aspect-[862/376] relative rounded-sm overflow-hidden">
                    <Image
                        src="/images/82967Interactive-Player-Banner-Desktop.jpg"
                        alt="Banner 1"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="w-full aspect-[862/376] relative rounded-sm overflow-hidden">
                    <Image
                        src="/images/82967Interactive-Player-Banner-Desktop.jpg"
                        alt="Banner 1"
                        fill
                        className="object-cover"
                    />
                </div>


                <div className="w-full aspect-[862/376] relative rounded-sm overflow-hidden">
                    <Image
                        src="/images/82967Interactive-Player-Banner-Desktop.jpg"
                        alt="Banner 1"
                        fill
                        className="object-cover"
                    />
                </div>

            </Carousel>
        </div>
    );
};

export default ProductMobileCarousels;
