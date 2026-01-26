import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styles from "./Hero.module.css";

// import requiblue modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "https://japanparts.com.bd/images/about/showroom-inside.png",
      title: "Authentic Japanese Excellence",
      description:
        "Welcome to Japan Parts, your trusted destination for high-quality original Japanese automotive parts and accessories in Bangladesh.",
      buttons: [
        {
          id: 1,
          icon: "https://swiperjs.com/demos/images/nature-1.jpg",
          title: "Button 1",
          link: "#",
        },
        {
          id: 2,
          icon: "https://swiperjs.com/demos/images/nature-1.jpg",
          title: "Button 2",
          link: "#",
        },
      ],
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/26083206/pexels-photo-26083206.jpeg",
      title: "Authentic Japanese Excellence",
      description:
        "Welcome to Japan Parts, your trusted destination for high-quality original Japanese automotive parts and accessories in Bangladesh.",
      buttons: [
        {
          id: 1,
          icon: "https://swiperjs.com/demos/images/nature-1.jpg",
          title: "Button 1",
          link: "#",
        },
        {
          id: 2,
          icon: "https://swiperjs.com/demos/images/nature-1.jpg",
          title: "Button 2",
          link: "#",
        },
      ],
    },
  ];

  return (
    <section className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        keyboard={true}
        className="mySwiper"
      >
        {slides?.map((slide) => (
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
              key={slide.id}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md animate__animated animate__fadeIn">
                  <h1 className="mb-5 text-5xl font-bold">{slide.title}</h1>
                  <p className="mb-5">{slide.description}</p>
                  <div className="flex gap-3 justify-center">
                    {slide.buttons?.map((button) => (
                      <button
                        className="btn btn-primary bg-blue-600 border-blue-600 flex gap-2"
                        key={button.id}
                      >
                        <img
                          src={button.icon}
                          alt={button.title}
                          className="h-5 w-5"
                        />{" "}
                        {button.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
