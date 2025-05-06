import Link from 'next/link';
import React from 'react';

const DropDown = ({ links = [] }) => {
    return (
        <div className="relative z-50">
            {/* Triangle Indicator */}
            <div className="absolute top-[-8px] left-6 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#ebecec]" />

            {/* Dropdown Box */}
            <div className="bg-[#ebecec] p-6 shadow-lg w-64">
                <ul className="space-y-3">
                    {links.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="text-sm hover:underline block text-black">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DropDown;
