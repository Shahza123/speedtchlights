import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { columnData, navbarData } from "@/components/data/DummyData"

export default function ShopDropdown({ onClose }) {


    return (
        <div className="bg-[#ebecec]  w-full shadow-md py-10 transition-all duration-300 relative ease-in-out mt-2 h-full  ">

            <button
                onClick={onClose}
                className="absolute right-5 top-4 w-6 h-6 rounded-full border-[2px] border-[#000] flex items-center justify-center z-10 font-bold"
            >
                <AiOutlineClose
                    className="w-4 h-4"
                    style={{ stroke: "black", strokeWidth: "2" }}
                />

            </button>

            {/* Grid layout */}
            <div className="container mx-auto px-6 relative grid gap-[48px] grid-cols-5 font-montserrat">
                {/* First Column: Shared Heading with Two Subcolumns */}
                <div className="col-span-2 border-r border-black pr-4 space-y-3">
                    <h4 className="mb-[20px] text-[16px] leading-[1.375] font-medium uppercase">{navbarData.sharedHeading}</h4>
                    <div className="grid grid-cols-2 gap-4">

                        {/* First Column: WARNING LIGHTS only */}
                        <div className="space-y-2">
                            {navbarData.sharedItems
                                .filter(item => item.categoryName === "WARNING LIGHTS")
                                .map((category, colIndex) => (
                                    <div key={colIndex}>
                                        <h5 className="font-semibold text-[15px] leading-[22px] mb-[15px] ">{category.categoryName}</h5>
                                        <ul className="space-y-1 text-sm">
                                            {category.products.map((product, productIndex) => (
                                                <li key={productIndex}>
                                                    <Link
                                                        href="#"
                                                        className="mb-[7px] font-normal text-[15px] leading-[22px] text-black hover:text-red-500 transition-all duration-300 ease"
                                                    >
                                                        {product}
                                                    </Link>



                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                        </div>

                        {/* Second Column: All Other Categories */}
                        <div className="space-y-2">
                            {navbarData.sharedItems
                                .filter(item => item.categoryName !== "WARNING LIGHTS")
                                .map((category, colIndex) => (
                                    <div key={colIndex}>
                                        <h5 className="font-semibold text-[15px] leading-[22px] mb-[15px] ">{category.categoryName}</h5>
                                        <ul className="space-y-1 text-sm">
                                            {category.products.map((product, productIndex) => (
                                                <li key={productIndex}>
                                                    <Link href="#" className='mb-[7px] font-normal text-[15px] leading-[22px] text-black hover:text-red-500 '>{product}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                        </div>

                    </div>
                </div>


                {/* Remaining Columns (Sale, Customization, and Shop by Industry) */}
                {columnData.otherColumns.map((column, index) => (
                    <div
                        key={index}
                        className={`space-y-6 ${index < columnData.otherColumns.length - 1 ? 'border-r border-black' : ''} pr-4`}
                    >
                        {column.sections.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                                <h4 className="mb-[16px] text-[16px] leading-[1.375] font-medium uppercase">
                                    {section.heading}
                                </h4>
                                <ul className="space-y-1 text-sm">
                                    {section.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <Link href="#" className='text-black mb-[7px]  font-normal leading-[22px]text-[15px] hover:text-red-500'>{item}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}

            </div>


        </div>
    );
}
