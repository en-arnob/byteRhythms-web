// import React, { useEffect } from "react";
import React from "react";
// import { useAnimation, motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const fadeRight = {
//   hidden: { opacity: 1, x: 100 },
//   visible: { opacity: 1, x: 0 },
// };

const BannerThird = () => {
  //   const controls = useAnimation();
  //   const [ref, inView] = useInView();
  //   useEffect(() => {
  //     if (inView) {
  //       controls.start("visible");
  //     }
  //   }, [controls, inView]);
  return (
    <div>
      <h1 className='text-4xl font-bold text-black sm:text-2xl xl:text-4xl'>
        Get the most advanced
        <br />
        ERP, POS, BLA, BLA, BLA
      </h1>
      <p className='mt-6 text-base text-black sm:text-xl'>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat.
      </p>
      <a
        // ref={ref}
        // animate={controls}
        // initial='hidden'
        // variants={fadeRight}
        href='/'
        title=''
        className='inline-flex items-n rounded px-6 py-5 text-base font-semibold text-black transition-all duration-200 bg-green-300 mt-9 hover:bg-green-400 focus:bg-green-400'
        role='button'
      >
        {" "}
        Contact Us{" "}
      </a>
    </div>
  );
};

export default BannerThird;
