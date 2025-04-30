import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa6"; // changed here

const MobileSidebar = ({ isNavOpen, setIsNavOpen }) => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubDropdown, setOpenSubDropdown] = useState({});

    const toggleDropdown = (key) => {
        setOpenDropdown(openDropdown === key ? null : key);
    };

    const toggleSubDropdown = (key) => {
        setOpenSubDropdown((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const menuItems = [
        {
            key: "shop",
            label: "Shop Categories",
            children: [
                {
                    key: "products",
                    label: "Products",
                    image: "/images/facelift/ico-flasher-01.svg",
                    children: ["Product A", "Product B"],
                },

                {
                    key: "sale",
                    label: "Sale",
                    children: ["Discounted A", "Discounted B"],
                },
                {
                    key: "customization",
                    label: "Customization",
                    children: ["Print", "Color", "Size"],
                },
                {
                    key: "industry",
                    label: "Shop by Industry",
                    children: ["Retail", "Corporate"],
                },
                {
                    key: "misc-shop",
                    label: "MISC",
                    children: ["Random A", "Random B"],
                },
            ],
        },
        {
            key: "support",
            label: "Support",
            children: ["Help Center", "Returns", "Shipping", "Warranty", "Live Chat", "Guides"],
        },
        { key: "about", label: "About" },
        {
            key: "misc",
            label: "MISC",
            children: ["Blog", "News", "Jobs", "Events", "Deals", "Press"],
        },
        {
            key: "contact",
            label: "Contact",
            children: [
                {
                    key: "customer",
                    label: "Customer Support",
                    children: ["Email", "Phone"],
                },
                {
                    key: "sales",
                    label: "Sales",
                    children: ["Get Quote", "Talk to Sales"],
                },
                {
                    key: "media",
                    label: "Media",
                    children: ["Press Kit", "Press Contact"],
                },
                {
                    key: "locations",
                    label: "Locations",
                    children: ["Map", "Branches"],
                },
                {
                    key: "feedback",
                    label: "Feedback",
                    children: ["Rate Us", "Suggestions"],
                },
                {
                    key: "careers",
                    label: "Careers",
                    children: ["Open Roles", "Internships"],
                },
            ],
        },

    ];

    const renderSubItems = (subItems, parentKey = "") => (
        <div className="w-full" style={{fontFamily: "'Montserrat', sans-serif" }}>
            {subItems.map((sub, idx) =>
                typeof sub === "string" ? (
                    <div
                        key={idx}
                        className="transition-all duration-500 py-3 text-black ps-12 text-[15px] leading-[22px] cursor-pointer hover:text-[#04419b] w-full border-t-0 border-l-0 border-r-0 border-b border-[2px] border-[#f2f2f2]"

                    >
                        {sub}
                    </div>
                ) : (
                    <div key={sub.key} className="w-full">
                        <div
                            className="flex justify-between items-center py-3 px-6  border-t-0 border-l-0 border-r-0 border-b-[2px] border-[#f2f2f2] cursor-pointer text-black ps-[50px] "
                            onClick={() => toggleSubDropdown(`${parentKey}-${sub.key}`)}
                        >
                            <div className="flex items-center gap-2">
                                {sub.image && (
                                    <Image
                                        src={sub.image}
                                        alt={sub.label}
                                        width={18.5}
                                        height={22}
                                        className="object-contain"
                                    />
                                )}
                                <span className={`transition-all duration-500 text-sm font-medium text-[17.0667px] hover:text-[#04419b] uppercase ${openSubDropdown[`${parentKey}-${sub.key}`] ? "text-[#04419b]" : "text-[#000]"
                                    }`}>
                                    {sub.label}</span>
                            </div>

                            {openSubDropdown[`${parentKey}-${sub.key}`] ? (
                                <FaChevronDown className="w-[19px] h-[11px]" />
                            ) : (
                                <FaChevronLeft className="w-[11px] h-[19px] opacity-10" />
                            )}
                        </div>

                        {
                            openSubDropdown[`${parentKey}-${sub.key}`] && (
                                <div className="w-full">
                                    {sub.children.map((deep, idy) => (
                                        <div
                                            key={idy}
                                            className=" hover:text-[#04419b]  transition-all duration-500 py-2 px-8  border-b-[2px] border-[#f2f2f2] text-sm text-[#000] cursor-pointer ps-[65px]"
                                        >
                                            {deep}
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    </div>
                )
            )}
        </div >
    );

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full overflow-auto bg-white z-50 transition-transform duration-500 ease-in-out ${isNavOpen ? "translate-x-0" : "-translate-x-full"} pt-9`} style={{fontFamily: "'Montserrat', sans-serif" }}
        >
            <div
                className="absolute top-[9px] right-4 cursor-pointer"
                onClick={() => setIsNavOpen(false)}
            >
                <img src="/images/facelift/ico-n-main-nav-close.svg" alt="Close" width={22} height={22.02} />
            </div>

            <div className="flex flex-col divide-y-[2px] divide-[#f2f2f2] w-full">
                {menuItems.map((item) => (
                    <div key={item.key} className="w-full">
                        {/* Main Category with fixed border */}
                        <div className="border-b border-t-0 border-l-0 border-r-0 border-[2px] border-[#f2f2f2]">
                            <div
                                className="flex justify-between items-center py-[9px] ps-[34px] pe-[17px] cursor-pointer w-full"
                                onClick={() => item.children && toggleDropdown(item.key)}
                            >
                                <span className={`transition-all duration-300 text-[18px] font-bold uppercase hover:text-[#04419b] ${openDropdown === item.key ? "text-[#04419b]" : "text-[#000]"
                                    }`}>

                                    {item.label}
                                </span>
                                {item.children && (
                                    openDropdown === item.key ? (
                                        <FaChevronDown className="w-[11px] h-[19px]" />
                                    ) : (
                                        <FaChevronLeft className="w-[11px] h-[19px] opacity-10" />
                                    )
                                )}
                            </div>
                        </div>

                        {/* Subcategories shown AFTER the border */}
                        {item.children && openDropdown === item.key && (
                            <div className="w-full text-[17.667px] uppercase  ">
                                {renderSubItems(item.children, item.key)}
                            </div>
                        )}
                    </div>

                ))}
            </div>

            <div
                className="flex items-center justify-between px-[34px] pt-[14px] cursor-pointer"

            >
                <div className="flex items-center gap-3 ">

                    <Image src="/images/facelift/ico-n-user.webp" alt="error" width={18} height={19} />
                    <span className="hover:underline  leading-[1.375] font-semibold text-black text-[16px]  uppercase">
                        ACCOUNT LOGIN
                    </span>
                </div>
            </div>

        </div>
    );
};

export default MobileSidebar;
