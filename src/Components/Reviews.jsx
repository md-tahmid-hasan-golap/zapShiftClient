"use client";
import { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import ReviewsCards from "./ReviewsCards";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Reviews = ({ reviewsPromised }) => {
  const reviews = use(reviewsPromised);

  return (
    <div className="py-16 bg-gray-50 rounded-[40px]">
      <div className="text-center px-4 md:px-10 lg:px-20 mb-12">
        <h2 className="text-[#03464D] text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          What our customers are sayings
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={25}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id || review.id}>
              <ReviewsCards review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
