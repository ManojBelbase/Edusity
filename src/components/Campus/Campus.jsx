import React from "react";
import "./Campus.css";
import { CgArrowLongRight } from "react-icons/cg";
import gallery_1 from "../../assests/gallery-1.png";
import gallery_2 from "../../assests/gallery-2.png";
import gallery_3 from "../../assests/gallery-3.png";
import gallery_4 from "../../assests/gallery-4.png";
const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className="btn dark-btn">
        <div className="explore">
          See more here
          <CgArrowLongRight className="arrow" />
        </div>
      </button>
    </div>
  );
};

export default Campus;
