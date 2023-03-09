import React from "react";
import MZ from "../resources/mz.jpeg";
import SP from "../resources/Sundar-1056109484.webp";
import SN from "../resources/microsoft-satya-nadella-article-image.jpg";

const Reviews = () => {
  return (
    <div className='mb-10'>
      <section class=''>
        <div class='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
          <h2 class='text-center text-4xl font-bold tracking-tight sm:text-5xl'>
            Read trusted reviews from our clients
          </h2>

          <div class='mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8'>
            <blockquote class='rounded-lg bg-green-200 p-8'>
              <div class='flex items-center gap-4'>
                <img
                  alt='Man'
                  src={MZ}
                  class='h-16 w-16 rounded-full object-cover'
                />

                <div>
                  <p class='mt-1 text-lg font-medium text-gray-700'>
                    Mark Zuckerberg
                  </p>
                  <p class='mt-1 text-sm font-medium text-gray-700'>
                    CEO, Meta
                  </p>
                </div>
              </div>

              <p class='line-clamp-2 sm:line-clamp-none mt-4 text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt voluptatem alias ut provident sapiente repellendus.
              </p>
            </blockquote>

            <blockquote class='rounded-lg bg-green-200 p-8'>
              <div class='flex items-center gap-4'>
                <img
                  alt='Man'
                  src={SP}
                  class='h-16 w-16 rounded-full object-cover'
                />

                <div>
                  <p class='mt-1 text-lg font-medium text-gray-700'>
                    Sundar Pichai
                  </p>
                  <p class='mt-1 text-sm font-medium text-gray-700'>
                    CEO, Google
                  </p>
                </div>
              </div>

              <p class='line-clamp-2 sm:line-clamp-none mt-4 text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt voluptatem alias ut provident sapiente repellendus.
              </p>
            </blockquote>

            <blockquote class='rounded-lg bg-green-200 p-8'>
              <div class='flex items-center gap-4'>
                <img
                  alt='Man'
                  src={SN}
                  class='h-16 w-16 rounded-full object-cover'
                />

                <div>
                  <p class='mt-1 text-lg font-medium text-gray-700'>
                    Satya Nadella
                  </p>
                  <p class='mt-1 text-sm font-medium text-gray-700'>
                    CEO, Microsoft
                  </p>
                </div>
              </div>

              <p class='line-clamp-2 sm:line-clamp-none mt-4 text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt voluptatem alias ut provident sapiente repellendus.
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
