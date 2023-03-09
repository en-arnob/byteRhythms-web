import React from "react";
import { Tooltip } from "react-tooltip";
import { AiFillHeart } from "react-icons/ai";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { FaLaravel, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiMysql } from "react-icons/si";

const Techs = () => {
  return (
    <div>
      <section className='bg-gray-800  text-gray-100'>
        <div className='container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8'>
          <h2 className=' text-3xl text-center items-center justify-center flex font-bold pb-10 cursor-default '>
            We use and{" "}
            <AiFillHeart className='ml-2 text-4xl   hover:text-red-600' />
          </h2>
          <div className='flex flex-wrap justify-center pb-10 lg:justify-between'>
            <RiReactjsLine
              data-tooltip-id='react'
              data-tooltip-content='React'
              className='w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400 hover:text-sky-500'
            />
            <Tooltip id='react' />

            <IoLogoNodejs
              data-tooltip-id='node'
              data-tooltip-content='Node.js'
              className='w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400 hover:text-[#5d9c59]'
            />
            <Tooltip id='node' />

            <FaLaravel
              data-tooltip-id='lara'
              data-tooltip-content='Laravel'
              className='w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400 hover:text-[#EF3B2D]'
            />
            <Tooltip id='lara' />
            <SiNextdotjs
              data-tooltip-id='next'
              data-tooltip-content='Next.js'
              className='w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400 hover:text-gray-50'
            />
            <Tooltip id='next' />
            <SiMongodb
              data-tooltip-id='mongo'
              data-tooltip-content='MongoDB'
              className='w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400 hover:text-[#07AC4F]'
            />
            <Tooltip id='mongo' />
            <SiMysql
              data-tooltip-id='mysql'
              data-tooltip-content='MySQL'
              className='w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400 hover:text-[#3461AA]'
            />
            <Tooltip id='mysql' />
            <FaAws
              data-tooltip-id='aws'
              data-tooltip-content='Amazon Web Services'
              className='w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400 hover:text-[#F79400]'
            />
            <Tooltip id='aws' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Techs;
