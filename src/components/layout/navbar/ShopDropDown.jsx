import { AiOutlineClose } from 'react-icons/ai';

export default function ShopDropdown({ onClose }) {
    const columnHeadings = [
        "PRODUCTS",
        "SALE",
        "SHOP BY INDUSTRY",
        "MISC"
    ];

    return (
        <div className="bg-[#ebecec] w-full shadow-md py-10 transition-all duration-300 relative ease-in-out mt-2 h-full">

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
            <div className="max-w-7xl mx-auto px-6 relative grid gap-8 grid-cols-5">
                {/* First two columns share the same heading */}
                <div className="col-span-2 border-r pr-4 space-y-3">
                    <h4 className="font-semibold text-base">{columnHeadings[0]}</h4>
                    <div className="grid grid-cols-2 gap-4">
                        {[0, 1].map((col) => (
                            <ul key={col} className="space-y-1 text-sm">
                                {[...Array(10)].map((_, i) => (
                                    <li key={i}><a href="#">Item {i + 1}</a></li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>

                {/* Remaining 3 columns */}
                {[1, 2, 3].map((col, index) => (
                    <div
                        key={col}
                        className={`space-y-3 ${index < 2 ? 'border-r' : ''} pr-4`}
                    >
                        <h4 className="font-semibold text-base">{columnHeadings[col]}</h4>
                        <ul className="space-y-1 text-sm">
                            {[...Array(15)].map((_, i) => (
                                <li key={i}><a href="#">Item {i + 1}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
