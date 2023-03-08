import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import RCT from "../resources/aspx-svgrepo-com.svg";
import ERP from "../resources/analysis-svgrepo-com.svg";
import LMS from "../resources/app-svgrepo-com.svg";
import ECM from "../resources/shop-store-online-internet-svgrepo-com.svg";
import POS from "../resources/point-of.svg";
import INV from "../resources/device-manager-svgrepo-com.svg";

const appearLeft = {
  hidden: { opacity: 0, x: "-100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      delay: Math.random(),
      duration: 2,
    },
  },
};
const appearRight = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      delay: Math.random(),
      duration: 2,
    },
  },
};

const appearUp = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      delay: Math.random(),
      duration: 2,
    },
  },
};
const appearDown = {
  hidden: { opacity: 0, y: "-100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      delay: Math.random(),
      duration: 2,
    },
  },
};

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
      <div name='services'>
        {/* <h1 className='text-4xl text-center mt-10'>Our Services</h1> */}

        <div className='relative '>
          <section>
            <div className='max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8'>
              <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16'>
                <div className='mx-auto max-w-lg text-center lg:mx-0 lg:text-left'>
                  <h2 className='text-3xl font-bold sm:text-4xl'>
                    Services We Offer
                  </h2>

                  <p className='mt-4 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    vero aliquid sint distinctio iure ipsum cupiditate? Quis,
                    odit assumenda? Deleniti quasi inventore, libero reiciendis
                    minima aliquid tempora. Obcaecati, autem.
                  </p>

                  <a
                    href='/'
                    className='mt-8 inline-block rounded bg-yellow-400 px-12 py-3 text-sm font-medium text-black transition hover:bg-[#4ADE80] focus:outline-none focus:ring focus:ring-yellow-400'
                  >
                    Send an email
                  </a>
                </div>

                <div className=' mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3'>
                  <motion.a
                    ref={ref}
                    animate={controls}
                    initial='hidden'
                    variants={appearLeft}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className='block rounded-xl border border-gray-200  p-4 shadow-sm hover:border-sky-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring'
                    href='/web'
                  >
                    <span className='inline-block rounded-lg  p-3'>
                      <motion.img
                        ref={ref}
                        animate={controls}
                        initial='hidden'
                        variants={appearLeft}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 1 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        src={RCT}
                        alt=''
                      />
                    </span>

                    <h2 className='mt-2 font-bold'>Web Application</h2>

                    <p className='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </motion.a>

                  <motion.a
                    ref={ref}
                    animate={controls}
                    initial='hidden'
                    variants={appearDown}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className='block rounded-xl border border-gray-200  p-4 shadow-sm hover:border-green-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring'
                    href='/erp'
                  >
                    <span className='inline-block rounded-lg p-3'>
                      <img src={ERP} alt='' />
                    </span>

                    <h2 className='mt-2 font-bold'>ERP Software</h2>

                    <p className='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      Enterprise Resource Planning
                    </p>
                  </motion.a>

                  <motion.a
                    ref={ref}
                    animate={controls}
                    initial='hidden'
                    variants={appearRight}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className='block rounded-xl border  p-4 shadow-sm border-gray-200 hover:border-red-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring'
                    href='/lms'
                  >
                    <span className='inline-block rounded-lg  p-3'>
                      <img src={LMS} alt='' />
                    </span>

                    <h2 className='mt-2 font-bold'>LMS</h2>

                    <p className='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      Learning Management System
                    </p>
                  </motion.a>

                  <motion.a
                    ref={ref}
                    animate={controls}
                    initial='hidden'
                    variants={appearLeft}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className='block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-orange-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring'
                    href='/pos'
                  >
                    <span className='inline-block rounded-lg  p-3'>
                      <img src={POS} alt='' />
                    </span>

                    <h2 className='mt-2 font-bold'>POS</h2>

                    <p className='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      Point of Sale Software
                    </p>
                  </motion.a>

                  <motion.a
                    ref={ref}
                    animate={controls}
                    initial='hidden'
                    variants={appearUp}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className='block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-blue-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring'
                    href='/ecom'
                  >
                    <span className='inline-block rounded-lg p-3'>
                      <img src={ECM} alt='' />
                    </span>

                    <h2 className='mt-2 font-bold'>Ecommerce</h2>

                    <p className='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      Ecommerce Site Implementation
                    </p>
                  </motion.a>

                  <motion.a
                    ref={ref}
                    animate={controls}
                    initial='hidden'
                    variants={appearRight}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className='block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-yellow-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring'
                    href='/inventory'
                  >
                    <span className='inline-block rounded-lg  p-3'>
                      <img src={INV} alt='' />
                    </span>

                    <h2 className='mt-2 font-bold'>Inventory</h2>

                    <p className='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      Inventory and Billing Management{" "}
                    </p>
                  </motion.a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Services;
