import React from "react";

import RCT from "../resources/aspx-svgrepo-com.svg";
import ERP from "../resources/analysis-svgrepo-com.svg";
import LMS from "../resources/app-svgrepo-com.svg";
import ECM from "../resources/shop-store-online-internet-svgrepo-com.svg";
import POS from "../resources/point-of.svg";
import INV from "../resources/device-manager-svgrepo-com.svg";

const Services = () => {
  return (
    <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
      <div name='services'>
        {/* <h1 className='text-4xl text-center mt-10'>Our Services</h1> */}

        <div class='relative bg-gradient-to-b from-green-50 to-green-100'>
          <section>
            <div class='max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8'>
              <div class='grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16'>
                <div class='mx-auto max-w-lg text-center lg:mx-0 lg:text-left'>
                  <h2 class='text-3xl font-bold sm:text-4xl'>
                    Services We Offer
                  </h2>

                  <p class='mt-4 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    vero aliquid sint distinctio iure ipsum cupiditate? Quis,
                    odit assumenda? Deleniti quasi inventore, libero reiciendis
                    minima aliquid tempora. Obcaecati, autem.
                  </p>

                  <a
                    href='/'
                    class='mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400'
                  >
                    Send an email
                  </a>
                </div>

                <div class=' mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3'>
                  <a
                    class='block rounded-xl border border-gray-200  p-4 shadow-sm hover:border-sky-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring'
                    href='/web'
                  >
                    <span class='inline-block rounded-lg  p-3'>
                      <img src={RCT} alt='' />
                    </span>

                    <h2 class='mt-2 font-bold'>Web Application</h2>

                    <p class='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </a>

                  <a
                    class='block rounded-xl border border-gray-200  p-4 shadow-sm hover:border-green-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring'
                    href='/erp'
                  >
                    <span class='inline-block rounded-lg p-3'>
                      <img src={ERP} alt='' />
                    </span>

                    <h2 class='mt-2 font-bold'>ERP Software</h2>

                    <p class='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      Enterprise Resource Planning
                    </p>
                  </a>

                  <a
                    class='block rounded-xl border  p-4 shadow-sm border-gray-200 hover:border-red-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring'
                    href='/lms'
                  >
                    <span class='inline-block rounded-lg  p-3'>
                      <img src={LMS} alt='' />
                    </span>

                    <h2 class='mt-2 font-bold'>LMS</h2>

                    <p class='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      Learning Management System
                    </p>
                  </a>

                  <a
                    class='block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-orange-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring'
                    href='/pos'
                  >
                    <span class='inline-block rounded-lg  p-3'>
                      <img src={POS} alt='' />
                    </span>

                    <h2 class='mt-2 font-bold'>POS</h2>

                    <p class='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      Point of Sale Software
                    </p>
                  </a>

                  <a
                    class='block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-blue-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring'
                    href='/ecom'
                  >
                    <span class='inline-block rounded-lg p-3'>
                      <img src={ECM} alt='' />
                    </span>

                    <h2 class='mt-2 font-bold'>Ecommerce</h2>

                    <p class='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      Ecommerce Site Implementation
                    </p>
                  </a>

                  <a
                    class='block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-yellow-400 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring'
                    href='/inventory'
                  >
                    <span class='inline-block rounded-lg  p-3'>
                      <img src={INV} alt='' />
                    </span>

                    <h2 class='mt-2 font-bold'>Inventory</h2>

                    <p class='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      Inventory and Billing Management{" "}
                    </p>
                  </a>
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
