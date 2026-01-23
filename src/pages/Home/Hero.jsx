import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "https://swiperjs.com/demos/images/nature-1.jpg",
      title: "Nature",
      description: "The natural world",
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
      image: "https://swiperjs.com/demos/images/nature-1.jpg",
      title: "Nature",
      description: "The natural world",
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
    <section>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {slides?.map((slide) => (
          <SwiperSlide>
            <img
              src={slide.image}
              alt={slide.title}
              key={slide.id}
              className="h-[90vh] w-full"
            />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default Hero;
