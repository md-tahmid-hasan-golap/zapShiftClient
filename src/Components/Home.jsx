import Banner from "./Banner";
import BrandNew from "./BrandNew";
import Features from "./Features";
import HowItWork from "./HowItWork";
import MerchantCTA from "./MerchantCTA";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWork></HowItWork>
      <OurServices></OurServices>
      <BrandNew></BrandNew>
      <Features></Features>
      <MerchantCTA></MerchantCTA>
    </div>
  );
};

export default Home;
