import Banner from "./Banner";
import BrandNew from "./BrandNew";
import Features from "./Features";
import HowItWork from "./HowItWork";
import MerchantCTA from "./MerchantCTA";
import OurServices from "./OurServices";
import Reviews from "./Reviews";

const reviewsPromised = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWork></HowItWork>
      <OurServices></OurServices>
      <BrandNew></BrandNew>
      <Features></Features>
      <MerchantCTA></MerchantCTA>
      <Reviews reviewsPromised={reviewsPromised}></Reviews>
    </div>
  );
};

export default Home;
