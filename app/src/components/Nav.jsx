import React, { useState } from "react";
import { SiByte } from "react-icons/si";

import { CgMenuLeft, CgMenuMotion } from "react-icons/cg";

import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, scale: 1 },
  };
  return (
    <nav className='w-full  z-50 fixed inset-x-0 px-5 top-5  flex justify-center items-center'>
      <div className='w-full md:w-880 bg-[#5D9C59] p-4 rounded-xl flex items-center'>
        <SiByte className='text-white mr-2' />
        <p className='text-lg cursor-pointer text-white font-medium'>
          {" "}
          <Link to='home' smooth={true}>
            byteRhythms Tech.
          </Link>
        </p>
        <div className='hidden md:flex items-center justify-end mr-6 gap-6 flex-1'>
          <li className='text-base list-none text-white  font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
            <Link to='services' smooth={true}>
              Services
            </Link>
          </li>
          <li className='text-base list-none text-white font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
            <Link to='about' smooth={true}>
              About
            </Link>
          </li>
          <li className='text-base list-none text-white font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
            <Link to='contact' smooth={true}>
              Contact
            </Link>
          </li>
        </div>
        {!isActive && (
          <motion.div
            whileTap={{ rotate: 45 }}
            className='block md:hidden ml-auto cursor-pointer'
            onClick={() => setIsActive(!isActive)}
          >
            <CgMenuLeft className='text-sky-500 font-medium text-2xl cursor-pointer' />
          </motion.div>
        )}
        {isActive && (
          <motion.div
            whileTap={{ rotate: -45 }}
            className='block md:hidden ml-auto cursor-pointer'
            onClick={() => setIsActive(!isActive)}
          >
            <CgMenuMotion className='text-rose-400 font-medium text-2xl cursor-pointer' />
          </motion.div>
        )}

        {isActive && (
          <motion.div
            variants={fadeRight}
            initial='hidden'
            animate={"visible"}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className='p-6 w-screen bg-navBar rounded-xl fixed top-24 flex flex-col text-center items-center border-l-4 border-red-400 justify-evenly gap-6'
          >
            <li className='text-xl list-none text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
              <Link to='home' smooth={true} onClick={() => setIsActive(false)}>
                Home
              </Link>
            </li>
            <li className='text-xl list-none text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
              <Link to='about' smooth={true} onClick={() => setIsActive(false)}>
                About
              </Link>
            </li>
            <li className='text-xl list-none text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
              <Link to='works' smooth={true} onClick={() => setIsActive(false)}>
                Works
              </Link>
            </li>
            <li className='text-xl list-none text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
              <Link
                to='contact'
                smooth={true}
                onClick={() => setIsActive(false)}
              >
                Contact
              </Link>
            </li>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
