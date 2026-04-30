import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles import korte hobe
import "swiper/css";

import brand1 from "../../src/assets/brands/amazon.png";
import brand2 from "../../src/assets/brands/amazon_vector.png";
import brand3 from "../../src/assets/brands/casio.png";
import brand4 from "../../src/assets/brands/moonstar.png";
import brand5 from "../../src/assets/brands/randstad.png";
import brand6 from "../../src/assets/brands/star.png";
import brand7 from "../../src/assets/brands/start_people.png";

const BrandNew = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

  return (
    <div className="py-12 bg-white">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold leading-tight px-4 mb-10 text-gray-800">
        We've helped thousands of sales teams
      </h2>

      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2} // Mobile-e 2ti image
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // Tablet-e 4ti image
            640: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            // Desktop-e 5/6ti image
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          className="flex items-center"
        >
          {brands.map((brand, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div className="h-16 flex items-center justify-center">
                <img
                  src={brand}
                  alt={`brand-${index}`}
                  className="max-h-full w-auto grayscale hover:grayscale-0 transition-all duration-300 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandNew;
