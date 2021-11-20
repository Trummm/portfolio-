import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Social from "../Social/Social";
import SoundBar from "../Soundbar/SoundBar";
import { motion } from "framer-motion";
import { Dark } from "../../Theme";
import { Link } from "react-router-dom";
import panda from "../../assets/image/zyro-image3.png";

import * as loading from "../../9329-loading.json";
import Lottie from "react-lottie";
import "./contact.css";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Contact() {
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
          className="contact"
        >
          <Logo theme={Dark.text} color={Dark.text} />
          <SoundBar theme={Dark.text} color={Dark.backGround} />
          <Social fill={Dark.fillColor} />

          <motion.div
            initial={{ height: "0px" }}
            animate={{ height: "600px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="contact__rectangle"
          >
            <div className="contact__rectangle-title">
              <h2>CONTACT</h2>
            </div>

            <div className="contact__rectangle-input">
              <input type="text" placeholder=" " />
              <label htmlFor="">Name</label>
            </div>

            <div className="contact__rectangle-input">
              <input type="text" placeholder=" " />
              <label htmlFor="">Email</label>
            </div>

            <div className="contact__rectangle-input">
              <input type="text" placeholder=" " />
              <label htmlFor="">Message</label>
            </div>

            <button className="contact__rectangle-btn">Submit</button>
          </motion.div>

          <div className="contact__image">
            <img src={panda} alt="" />
          </div>

          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="contact__back"
            >
              Back
            </motion.div>
          </Link>
        </motion.div>
      )}
    </>
  );
}

export default Contact;
