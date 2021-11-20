import Logo from "../Logo/Logo";
import Social from "../Social/Social";
import SoundBar from "../Soundbar/SoundBar";
import "./projectPage.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dark } from "../../Theme";
import { useEffect, useRef } from "react";
import { ArrowForwardIos } from "@material-ui/icons";
import { Work } from "../../data/Work";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};
function ProjectPage() {
  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
    };

    window.addEventListener("scroll", rotate);

    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="projectPage"
    >
      <Logo theme={Dark.text} color={Dark.text} />
      <SoundBar theme={Dark.text} color={Dark.backGround} />
      <Social fill={Dark.fillColor} />

      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="slide"
        ref={ref}
      >
        {Work.map((item) => (
          <motion.li key={item.id} variants={Item} className="slide_item">
            <h1 className="slide_item-title">{item.name}</h1>

            <h3 className="slide_item-title2">{item.des}</h3>

            <div className="tag">
              {item.tag.map((item2) => (
                <p className="tag_item">#{item2}</p>
              ))}
            </div>
            <a
              href={item.demo}
              className="project__link"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn">Visit</button>
            </a>
          </motion.li>
        ))}
      </motion.ul>

      <h1 className="projectPage_title">PROJECT</h1>

      <Link to="/">
        <motion.span
          className="projectPage_title2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          Back
          <ArrowForwardIos
            style={{
              backgroundColor: "transparent",
              margin: "0 12px",
              position: "relative",
              top: 2,
            }}
          />
        </motion.span>
      </Link>
    </motion.div>
  );
}

export default ProjectPage;
