import React, { useState } from "react";
import "./Testimonial.css";
import { testimonialsData } from "./../../data/testimonialsData";
import leftArrow from "../../assets/organization/leftArrow.png";
import rightArrow from "../../assets/organization/rightArrow.png";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const transition = { type: "spring", duration: 3 };

const Testimonial = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  const handleLeftArrow = () => {
    selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1);
  };
  const handleRightArrow = () => {
    selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1);
  };
  return (
    <div className="Testimonials" id="testimonial">
      <div className="left-t">
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "orange" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>

      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>

        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="arrows">
          <img onClick={handleLeftArrow} src={leftArrow} alt="" />
          <img onClick={handleRightArrow} src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
