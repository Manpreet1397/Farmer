import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectsCard(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="relative bg-neutral-800 hover:bg-neutral-700 bg-opacity-75 backdrop-filter backdrop-blur-md text-white text-left p-6 border-2 border-neutral-600 rounded-2xl flex flex-col gap-6 md:gap-10">
      <div className="flex-1">
        <Slider {...settings}>
          <img src={props.image1} alt="projects" className="rounded-xl" />
          <img src={props.image2} alt="projects" className="rounded-xl" />
          <img src={props.image3} alt="projects" className="rounded-xl" />
        </Slider>
      </div>
      <div className="flex flex-col gap-4">
        <div className="marker">
          <p className="text-lg font-bold">{props.title}</p>
          <p className="text-base font-light text-gray-400">{props.details}</p>
        </div>
        <ul className="list-disc list-inside text-yellow-500 text-sm">
          <li>All Projects unlocked</li>
          <li>Unlimited acess</li>
          <li>Lifetime updates</li>
          <li>Regular Support</li>
        </ul>
      </div>
      <div className="flex justify-center">
        <a className="rounded-full px-16 py-2  bg-yellow-500 shadow-sm hover:shadow-white text-white" href="#">
          Go Unlimited
        </a>
      </div>
    </div>
  );
}
