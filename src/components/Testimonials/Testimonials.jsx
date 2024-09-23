import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assests/next-icon.png"; // Ensure the correct path
import back_icon from "../../assests/back-icon.png";
import { TestimonialsData } from "./TestimonialsData";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt="Next"
        className="next_icon"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="Back"
        className="back_icon"
        onClick={slideBackward}
      />

      <div className="slider">
        <ul ref={slider}>
          {TestimonialsData.map((data, i) => (
            <li key={i}>
              <div className="slide">
                <div className="user-info">
                  <img src={data.image} alt="User" />
                  <div>
                    <h3>{data.name}</h3>
                    <span>{data.address}</span>
                  </div>
                </div>
                <p>{data.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
