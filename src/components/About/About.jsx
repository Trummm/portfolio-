import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Social from "../Social/Social";
import SoundBar from "../Soundbar/SoundBar";
import "./about.css";
import { Dark } from "../../Theme";
import { motion } from "framer-motion";
import image from "../../assets/image/zyro-image.png";
import image2 from "../../assets/image/zyro-image2.png";
import { Link } from "react-router-dom";
import * as loading from "../../9329-loading.json";
import Lottie from "react-lottie";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });
  return (
    <>
      {loading ? (
        <div className="loading__icon">
          <Lottie options={defaultOptions1} height={300} width={300} />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="About"
        >
          <Logo theme={Dark.text} color={Dark.text} />
          <SoundBar theme={Dark.text} color={Dark.backGround} />
          <Social fill={Dark.fillColor} />

          <h1 className="about-text">ABOUT</h1>
          <div className="rectangle-about">
            <h3 className="rectangle_title">
              Hi, My name is Tran Quoc Trung i'm a Front-end developer located
              in Viet Nam. I love to create simple yet beautiful websites with
              great user experience.
            </h3>

            <h3 className="rectangle_title">
              I'm interested in the whole frontend stack Like trying new things
              and building great projects.
            </h3>

            <h3 className="rectangle_title">
              I believe everything is an Art when you put your consciousness in
              it. You can connect with me via social links.
            </h3>
          </div>
          <div className="small-image">
            <img src={image2} alt="" className="image-item2" />
          </div>
          <div className="natilus">
            <img src={image} alt="" className="image_item" />
          </div>
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="back"
            >
              Back
            </motion.div>
          </Link>
        </motion.div>
      )}
    </>
  );
}

export default About;
