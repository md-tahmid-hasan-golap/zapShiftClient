import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../src/assets/banner/banner1.png";
import banner2 from "../../src/assets/banner/banner2.png";
import banner3 from "../../src/assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        emulateTouch={true}
        className="rounded-xl overflow-hidden shadow-md"
      >
        {/* Height ektu bariye update kora hoyeche */}
        <div className="h-[250px] md:h-[400px] lg:h-[500px]">
          <img
            src={banner1}
            className="h-full w-full object-cover"
            alt="Banner 1"
          />
        </div>
        <div className="h-[250px] md:h-[400px] lg:h-[500px]">
          <img
            src={banner2}
            className="h-full w-full object-cover"
            alt="Banner 2"
          />
        </div>
        <div className="h-[250px] md:h-[400px] lg:h-[500px]">
          <img
            src={banner3}
            className="h-full w-full object-cover"
            alt="Banner 3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
