import React from "react";
import st from "../resources/Startup_Two.svg";

import { CgMouse } from "react-icons/cg";
import { motion } from "framer-motion";
import BannerSecond from "./BannerParts/BannerSecond";
import BannerThird from "./BannerParts/BannerThird";

const Banner = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, scale: 0.9 },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div
      name='home'
      className=' mt-20 pt-10 md:pt-5  md:mt-36 h-auto  md:ml-20 md:mr-20'
    >
      <section className=''>
        <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='grid items-center grid-cols-1 gap-12 lg:grid-cols-2'>
            <div>
              <motion.div
                variants={fadeLeft}
                initial='hidden'
                animate='visible'
                transition={{ duration: 0.5 }}
              >
                <h1 className='text-4xl font-bold text-bg sm:text-6xl lg:text-7xl'>
                  Expand your business, with
                  <div className='relative inline-flex'>
                    <span className='absolute inset-x-0 bottom-0 border-b-[30px] border-[#5D9C59]'></span>
                    <h1 className='relative text-4xl font-bold text-bg sm:text-6xl lg:text-7xl'>
                      byteRhythms
                    </h1>
                  </div>
                </h1>

                <p className='mt-8 text-base text-black sm:text-xl'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat.
                </p>
              </motion.div>

              <motion.div
                variants={fadeRight}
                initial='hidden'
                animate='visible'
                transition={{ duration: 0.5 }}
                className='mt-10 sm:flex sm:items-center sm:space-x-8'
              >
                <span
                  href='/'
                  title=''
                  class='inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80'
                >
                  <CgMouse className='mr-2 text-[#EA580C]' />
                  Scroll to learn more.
                </span>
              </motion.div>
            </div>

            <motion.div
              variants={fadeBottom}
              initial='hidden'
              animate='visible'
              transition={{ duration: 0.5 }}
            >
              <img class='w-full' src={st} alt='' />
            </motion.div>
          </div>
        </div>
      </section>
      <div>
        <section className='py-10 sm:py-16 lg:py-24'>
          <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='grid items-center grid-cols-1 gap-12 lg:grid-cols-2'>
              <BannerSecond />

              <div className='flex flex-col justify-between flex-1 h-full'>
                <BannerThird />

                <div className='mt-8 border-t-2 border-black lg:mt-auto sm:mt-14'></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
