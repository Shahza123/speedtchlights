import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ WarningLights }) => {
    return (
        <>
            {WarningLights.map((item, i) => (
                <Link href="#" aria-label="View product details" key={i} className="item">
                    <div className='bg-[#f2f2f2] md:py-5 md:px-6 p-[15px] flex  flex-col rounded-[8px] border-[2px] border-transparent hover:border-black hover:border-solid cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg  min-h-[180px] justify-center items-center'>
                        <figure className="flex flex-col items-center ">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={194.39}
                                height={80}
                                className="bg-transparent mb-[18px] mix-blend-multiply shrink-0"
                                loading="lazy"
                            />
                            <figcaption className="text-center md:text-[15px] leading-[1.4666666667] text-[11px] font-normal uppercase text-wrap">
                                {item.title}
                            </figcaption>
                        </figure>
                    </div>
                </Link>
            ))}
        </>
    );
};

export default ProductCard;
