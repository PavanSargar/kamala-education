import React, { useState, useRef } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "./index.module.css";

const News = () => {
  const [active, setActive] = useState("About Admissions");

  const swiperRef = useRef(null);
  const swiper = useSwiper();

  const isMobileDevice = useMediaQuery("only screen and (max-width: 768px)");

  const handleActive = (e) => setActive(e.target.value);

  //   const handlePrev = useCallback(() => {
  //     if (!sliderRef.current) return;
  //     sliderRef.current.swiper.slidePrev();
  //   }, []);

  const handleNext = () => {
    swiper.slideNext();
  };

  return (
    <div
      className={`${styles.container} section-margin d-flex align-items-center justify-content-center flex-column`}
    >
      <h3 className="h-3 text-center">News and Events</h3>

      <div
        className={`${styles.tabs} ${styles.desktop} mt-4 align-items-center gap-3`}
      >
        <Tab active={active} onClick={handleActive}>
          About Admissions
        </Tab>
        <Tab active={active} onClick={handleActive}>
          Events
        </Tab>
        <Tab active={active} onClick={handleActive}>
          Job Openings
        </Tab>
        <Tab active={active} onClick={handleActive}>
          General News
        </Tab>
      </div>

      <Carousel
        indicators={false}
        nextIcon={false}
        prevIcon={false}
        className={`${styles.tabs} ${styles.mobile}`}
      >
        <CarouselItem>
          {" "}
          <Tab active={active} onClick={handleActive}>
            About Admissions
          </Tab>
        </CarouselItem>
        <CarouselItem>
          <Tab active={active} onClick={handleActive}>
            Events
          </Tab>
        </CarouselItem>
        <CarouselItem>
          <Tab active={active} onClick={handleActive}>
            Job Openings
          </Tab>
        </CarouselItem>
        <CarouselItem>
          {" "}
          <Tab active={active} onClick={handleActive}>
            General News
          </Tab>
        </CarouselItem>
      </Carousel>

      <Swiper
        ref={swiperRef}
        spaceBetween={400}
        slidesPerView={4}
        modules={[Scrollbar]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          639: {
            slidesPerView: 2,
          },
          865: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 250,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 200,
          },
          1700: {
            slidesPerView: 5,
            spaceBetween: 250,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className=" py-4 w-100"
        scrollbar={isMobileDevice}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
      <div className={` ${styles["scroll-btn"]} w-100 justify-content-end  mt-3 d-flex `}>
        <button onClick={handleNext}>Scroll --</button>
      </div>
    </div>
  );
};

export default News;

const Tab = ({ children, active, onClick, hidden }) => {
  return (
    <button
      onClick={onClick}
      value={children}
      className={`${styles.tab} fw-medium text-dark ${
        active === children && styles.active
      }`}
    >
      {children}
    </button>
  );
};

const Card = ({ hidden }) => {
  return (
    <div
      style={hidden && { visibility: "hidden" }}
      className={`${styles.card}`}
    >
      <p className="p-1">
        Lorem ipsum dolor sit amet, ipsum sit consectetur adipiscing elit.
      </p>
      <span className="p-2">04/05/2023</span>

      <div className="d-flex justify-content-end w-100">
        <span className="p-2 navy text-decoration-underline">Full Details</span>
      </div>
    </div>
  );
};
