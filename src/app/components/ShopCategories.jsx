
import React from 'react'
import ProductCard from './ProductCard'
import { WarningLights, SirenSpeakers, Sale, Boxses, OffRoadLights } from "@/app/components/data/DummyData"

const ShopCategories = () => {
    return (
        <div className='container'>
            <h2 className='lg:text-[41.25px] md:text-[33px] text-[26.4px] text-black uppercase leading-[1.3636363636] font-medium text-center mb-[17px] mt-[10px]  '>Shop By Category</h2>


            <strong className='block md:my-[21.5px] my-[13px] text-black  text-[18px]  text-center  font-bold '>WARNING LIGHTS</strong>
            <hr className="border-t-3 md:mb-[27px] mb-[20px]" />

            <div className="flex flex-wrap justify-center gap-4">







                {/* Product cards */}
                <ProductCard WarningLights={WarningLights} />

            </div>



            {/* sirans and speakers */}
            <div className='my-[21.5px]' >
                <h3 className='my-[21.5px] text-black  text-[18px]  font-bold  text-center'>SIRENS & SPEAKERS</h3>
                <hr className="border-t-3 mb-[27px]" />
                <div className='flex flex-wrap justify-center gap-4'>

                    <ProductCard WarningLights={SirenSpeakers} />
                </div>
            </div>

            {/* {SALE & DISCOUNTS} */}
            <div className='my-[21.5px]' >
                <h3 className='my-[21.5px] text-black  text-[18px]  font-bold  text-center'>SALE & DISCOUNTS</h3>
                <hr className="border-t-3 mb-[27px]" />
                <div className='flex flex-wrap justify-center gap-4'>


                    <ProductCard WarningLights={Sale} />

                </div>
            </div>
            {/* {SWITCH BOXES & ACCESSORIES} */}
            <div className='my-[21.5px]' >

                <h3 className='my-[21.5px] text-black  text-[18px]  font-bold  text-center'>SWITCH BOXES & ACCESSORIES</h3>

                <hr className="border-t-3 mb-[27px]" />
                <div className='flex flex-wrap justify-center gap-4  '>




                    <ProductCard WarningLights={Boxses} />
                </div>
            </div>
            {/* {OFF ROAD LIGHTS} */}
            <div className='my-[21.5px]' >

                <h3 className='my-[21.5px] text-black  text-[18px]  font-bold  text-center'>OFF ROAD LIGHTS</h3>

                <hr className="border-t-3 mb-[27px]" />
                <div className='flex flex-wrap justify-center gap-5  md:gap-[27px] mb-[27px]'>



                    <ProductCard WarningLights={OffRoadLights} />

                </div>

            </div>
        </div>
    )
}

export default ShopCategories