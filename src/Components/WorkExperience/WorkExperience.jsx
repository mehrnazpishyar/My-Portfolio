import { useRef } from "react";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import "./WorkExperience.css";
import Slider from "react-slick/lib/slider";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const WorkExperience = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRight = () => {
    sliderRef.current.slickNext();
  };

  const sliderLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section id="experience" className="experience-container">
      <h2>Work Experience :</h2>
      <div className="experience-content">
        <div className="arrow-right" onClick={sliderRight}>
          <span className="material-symbols-outlined">
            <FaChevronRight className="chevron" />
          </span>
        </div>
        <div className="arrow-left" onClick={sliderLeft}>
          <span className="material-symbols-outlined">
            <FaChevronLeft className="chevron" />
          </span>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
