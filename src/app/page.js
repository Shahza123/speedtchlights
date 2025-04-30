

import ProductCarousels from "@/app/components/carousels/ProductCarousels"
import UsageGuide from "./components/videos/UsageGuide";
import MissionVideos from "./components/videos/MissionVideos";
import ProductDescription from "./components/ProductDescription";
import TrustedBrand from "./components/TrustedBrand";
import EarnReward from "./components/EarnReward";
import CustomerReviews from "./components/carousels/CustomerReviews";
import ShopCategories from "./components/ShopCategories";
import ProductmobileCarousels from "./components/carousels/ProductMobileCarouels";


export default function Home() {
  return (
    <div>
      <div className="lg:block hidden">
        <ProductmobileCarousels />
      </div>
      <div className="lg:hidden block">

        <ProductCarousels />



      </div>
      <TrustedBrand />
      <ShopCategories />
      <UsageGuide />
      <EarnReward />
      <MissionVideos />



      <CustomerReviews />
      <ProductDescription />
    </div>
  );
}
