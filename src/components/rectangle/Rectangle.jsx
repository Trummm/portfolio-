import { motion } from "framer-motion";
import React from "react";
import "./rectangle.css";
import img from "../../assets/image/img.gif";

function Rectangle() {
  return (
    <motion.div
      className="rectangle-home"
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <div className="rectangle1">
        <h1 className="rectangle1_left_title">Hi,</h1>

        <h2 className="rectangle1_left_title2">I'm Trung.</h2>

        <h4 className="rectangle1_left_title3">
          I Code simple yet beautiful Website
        </h4>
      </div>

      <div className="rectangle2">
        <motion.img
          src={img}
          alt=""
          className="rectangle2_img"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        />
      </div>
    </motion.div>
  );
}

export default Rectangle;
