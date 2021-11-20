import { motion, useViewportScroll } from "framer-motion";

export const CircleIndicator = () => {
  const { scrollYProgress } = useViewportScroll(-window.pageYOffset);

  return (
    <motion.path
      d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
      style={{ pathLength: scrollYProgress }}
    />
  );
};
