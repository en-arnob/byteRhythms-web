import React from "react";
import { SiByte } from "react-icons/si";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div>
      <footer aria-label='Site Footer' class='bg-gray-900 pt-6'>
        <div className='relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24'>
          <div className='lg:flex lg:items-end lg:justify-between'>
            <div>
              <div className='flex justify-center text-white text-lg font-bold lg:justify-start'>
                <SiByte className='text-white mr-2' />
                <h1>byteRhythms Tech.</h1>
              </div>

              <p className='mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque.
              </p>
            </div>

            <nav aria-label='Footer Nav' class='mt-12 lg:mt-0'>
              <ul className='flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12 cursor-pointer'>
                <li>
                  <Link
                    className='text-gray-700 transition hover:text-gray-700/75'
                    to='home'
                    smooth={true}
                  >
                    Top
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-gray-700 transition hover:text-gray-700/75'
                    to='services'
                    smooth={true}
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-gray-700 transition hover:text-gray-700/75'
                    to='about'
                    smooth={true}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <p className='mt-12 text-center text-sm text-gray-500 lg:text-right'>
            Copyright &copy; 2023. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
