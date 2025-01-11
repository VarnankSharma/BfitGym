import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import 'swiper/css'; // Import global Swiper styles
import 'swiper/css/autoplay'; // Import Autoplay styles
import { Autoplay } from 'swiper/modules'; // Correct import for Autoplay module

// Import your facility images
import facility1 from '../src/assets/facility1.jpg'; // Replace with your image paths
import facility2 from '../src/assets/facility2.jpg';
import facility3 from '../src/assets/facility3.jpg';
import facility4 from '../src/assets/facility6.png';

function Facilities() {
  return (
    <section id="facilities">
      <h2 className="facilities-title">Our Facilities</h2>
      <Swiper
        spaceBetween={20} // Space between slides
        slidesPerView={1} // Number of slides visible at once (1 for mobile)
        loop={true} // Infinite loop
        autoplay={{ delay: 3000 }} // Autoplay every 3 seconds
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 slides visible for screen widths above 640px
          },
          1024: {
            slidesPerView: 3, // 3 slides visible for screen widths above 1024px
          },
        }}
        modules={[Autoplay]} // Apply the Autoplay module
      >
        <SwiperSlide>
          <div className="facility-box">
            <img src={facility1} alt="Gym Equipment" className="facility-img" />
            <div className="facility-name">Gym Equipment</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="facility-box">
            <img src={facility2} alt="Cardio Area" className="facility-img" />
            <div className="facility-name">Zumba Classes</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="facility-box">
            <img src={facility3} alt="Free Weights" className="facility-img" />
            <div className="facility-name">Cardio</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="facility-box">
            <img src={facility4} alt="Group Classes" className="facility-img" />
            <div className="facility-name">Personal Training</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Facilities;
