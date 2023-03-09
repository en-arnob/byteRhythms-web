import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsFacebook, BsLinkedin } from "react-icons/bs";

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

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div name='about'>
      <section>
        <div class='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center'>
          <div className='mt-6 mx-auto max-w-4xl text-center'>
            <h1 className='pt-10 text-2xl text-bg font-extrabold sm:text-4xl'>
              About Us
            </h1>
            <h1 className='mt-6 text-3xl font-extrabold sm:text-5xl'>
              <strong className='font-extrabold text-[#5D9C59] sm:block'>
                We, byteRhythms Technologies,
              </strong>
            </h1>

            <motion.p
              ref={ref}
              animate={controls}
              initial='hidden'
              variants={appearUp}
              className='mt-10 sm:text-xl sm:leading-relaxed'
            >
              Started our journey in 2019. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
              numquam ea! Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur.
            </motion.p>
            <h1 className='text-xl text-bg mt-6'>Find us on:</h1>
            <div className='mt-4 flex flex-wrap justify-center gap-4'>
              <a
                className='w-full flex bg-gray-700 hover:bg-[#1773EA] rounded px-12 py-3 text-sm font-medium text-white shadow  focus:outline-none focus:ring  sm:w-auto'
                href='/get-started'
              >
                <BsFacebook className='text-xl mr-2' />
                Facbook
              </a>

              <a
                className='w-full flex bg-gray-700 hover:bg-[#0073B1] rounded px-12 py-3 text-sm font-medium text-white shadow  focus:outline-none focus:ring  sm:w-auto'
                href='/get-started'
              >
                <BsLinkedin className='text-xl mr-2' />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
