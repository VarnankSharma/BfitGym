import React from 'react';
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css' // Import global Swiper styles
import { Autoplay,Pagination } from 'swiper/modules'; // Import the required modules
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import member1 from '../src/assets/mem1.JPG';
import member2 from '../src/assets/2.jpeg';
import member3 from '../src/assets/1.jpeg';
function Testimonials() {
  return (
    <section id="testimonials">
      <h2 className="trainers-title">What Our Members Say</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000, // Delay in ms (3 seconds)
          disableOnInteraction: false, // Continue autoplay after interaction
        }}
        modules={[Autoplay, Pagination]} // Add Autoplay and Pagination modules
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <div className="testimonial">
            <img src={member1} alt="Member 1" />
            <p>"As someone who was nervous initially, I can honestly say Bfit Gym has been a game-changer in my life. Karan Bhaiya, with his 17 years of experience, brings unparalleled expertise and dedication. The gym's atmosphere is motivating, with top-notch equipment and a welcoming environment. It’s clear that he knows what he’s doing – he tailors every workout to your specific needs and goals. Since it opened in December 2023, it’s been my go-to spot for both training and community. Highly recommended for anyone serious about fitness!"</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <img src={member2} alt="Member 2" />
            <p>"Kirti’s personalized approach and focus on female fitness made all the difference for me!"</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial">
            <img src={member3} alt="Member 3" />
            <p>"Sonu’s energetic Zumba classes are a blast and great for weight loss!"</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;
