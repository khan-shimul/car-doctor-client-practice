import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import your images
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Button from "../../shared/Button/Button";

const Banner = () => {
  const slides = [
    {
      img: img1,
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of available, but the majority have suffered alteration in some form.",
    },
    {
      img: img2,
      title: "Quality Repairs at Your Service",
      description:
        "We offer fast and reliable services that are second to none in the industry.",
    },
    {
      img: img3,
      title: "Your Car, Our Priority",
      description:
        "Ensuring your vehicle gets the best care and service available.",
    },
    {
      img: img4,
      title: "Advanced Auto Repair Services",
      description:
        "Our highly skilled team is here to help with all your auto repair needs.",
    },
    {
      img: img5,
      title: "Preventative Maintenance Plans",
      description:
        "We focus on long-term reliability with our preventative maintenance services.",
    },
    {
      img: img6,
      title: "Expert Mechanics at Work",
      description:
        "Get professional attention for your vehicle from our team of expert mechanics.",
    },
  ];
  return (
    <div className="relative rounded-md">
      <Swiper
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg"
      >
        {/* Swiper Slides */}
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ backgroundImage: `url(${slide.img})` }}
              className="h-[600px] bg-cover bg-center bg-no-repeat relative flex flex-col justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#000]/80 to-black/10"></div>
              <div className="relative z-10 left-[70px] space-y-7">
                <h1 className="text-white text-4xl font-bold">{slide.title}</h1>
                <p className="text-white">{slide.description}</p>
                <Button
                  className={
                    "btn bg-orange-600 mr-5 border-0 text-white hover:bg-transparent hover:text-[#FF3811] hover:border hover:border-[#FF3811] hover:scale-105 transition-transform duration-300"
                  }
                >
                  Discover More
                </Button>
                <Button
                  className={
                    "btn hover:bg-orange-600 btn-outline text-[#FF3811] hover:bg-none hover:scale-105 transition-transform duration-300 hover:border-none mr-2"
                  }
                >
                  Latest Project
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="absolute bottom-16 right-16 flex gap-3 z-20">
        <button className="custom-prev text-white bg-black/50 p-3 rounded-full hover:bg-black">
          <FaArrowLeftLong className="text-2xl " />
        </button>
        <button className="custom-next text-white bg-orange-600/80 p-3 rounded-full hover:bg-black">
          <FaArrowRightLong className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
