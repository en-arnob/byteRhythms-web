import React, { useEffect } from "react";
import erp from "../resources/erp-system.png";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};
const BannerSecond = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      variants={squareVariants}
      className='flex flex-col  items-center justify-center w-full'
    >
      <img className='w-full' src={erp} alt='' />
    </motion.div>
  );
};

export default BannerSecond;
