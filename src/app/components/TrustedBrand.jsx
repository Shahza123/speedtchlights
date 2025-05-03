import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TrustedIndustryName from './carousels/TrustedIndustryName'

const TrustedBrand = () => {
    return (
        <div className='container font-mont'>

            <div>
                <h2 className='text-center mb-[43px] text-[18px]  leading-[1.6666666667] font-medium '>THE MOST TRUSTED NAME IN THE INDUSTRY FOR OVER 20 YEARS.</h2>
                <div className='flex flex-col space-y-[43px] text-black '>

                    <TrustedIndustryName />


                    <section className="n-our-features">
                        <div className="n-container">
                            <div className="grid-holder">
                                <div className="images-grid">
                                    <div className="images-frame   rounded-[5px]  border   border-[rgba(0,0,0,.2)]">
                                        <div>
                                            <Link href="https://www.shopperapproved.com/reviews/SpeedTechLights.com" passHref>
                                                <figure className="Image">
                                                    <Image src="/images/facelift/Shopper-Approved-Logo.webp" alt="Shopper Approved" width={279.39} height={139.69} className='shrink-0' />
                                                </figure>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="https://www.trustpilot.com/review/speedtechlights.com" passHref>
                                                <figure className="Image">
                                                    <Image src="/images/facelift/Trust-Pilot-Logo.webp" alt="Trust Pilot" width={279.39} height={139.69} className='shrink-0' />
                                                </figure>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="https://www.bbb.org/us/tx/buda/profile/emergency-vehicle-equipment/speedtech-lights-inc-0825-90116661/" passHref>
                                                <figure className="Image">
                                                    <Image src="/images/facelift/BBB Logo.webp" alt="BBB" width={279.39} height={139.69} className='shrink-0' />
                                                </figure>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="https://www.facebook.com/SpeedTechLights/reviews" passHref>
                                                <figure className="Image">
                                                    <Image src="/images/facelift/Facebook-Reviews-Logo_1.webp" alt="Facebook Reviews" width={279.39} height={139.69} className='shrink-0' />
                                                </figure>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="https://www.google.com/search?q=speedtech+lights&rlz=1C1ONGR_enUS1133US1133&oq=speedtech+lights&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYPDIGCAMQRRg9MgYIBBBFGD3SAQgzOTAyajBqMagCALACAA&sourceid=chrome&ie=UTF-8&sei=gmztZ830BojawN4PjrL-2Aw#lrd=0x864c1f1ad3bd9d83:0xad4b3b21d9032624,1" passHref>
                                                <figure className="Image">
                                                    <Image src="/images/facelift/Google-Reviews-Logo.webp" alt="Google Reviews" className='shrink-0' width={279.39} height={139.69} />
                                                </figure>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    )
}

export default TrustedBrand


