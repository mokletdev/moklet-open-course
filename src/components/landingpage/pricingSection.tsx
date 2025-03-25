'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { FaRegCircleCheck } from "react-icons/fa6";


const plans = [
  {
    name: 'Basic Plan',
    price: 'Gratis',
    features: ['Akses konten gratis', 'Learning path terbatas'],
    icon: '/basicPlan.svg',
  },
  {
    name: 'Pro Plan',
    price: 'Rp 20.000/Bulan',
    features: [
      'Akses penuh semua konten',
      'Learning path lengkap',
      'Forum eksklusif dengan mentor',
    ],
    icon: '/proPlan.svg',
  },
  {
    name: 'Elite Plan',
    price: 'Rp 50.000/Bulan',
    features: [
      'Akses penuh semua konten',
      'Learning path lengkap',
      'Forum eksklusif dengan mentor',
      'Sertifikat',
      'Diskon eksklusif untuk event/workshop SMK Telkom Malang',
      'Konsultasi 1-on-1 dengan mentor pilihan',
      'Merchandise eksklusif',
      'Bonus E-book dan materi tambahan',
    ],
    icon: '/elitePlan.svg',
  },
];

const PricingSection = () => {
  const [openPlan, setOpenPlan] = useState<number | null>(null);

  const togglePlan = (index: number) => {
    setOpenPlan((prevState: number | null) => (prevState === index ? null : index));
  };

  return (
    <section className="py-16 px-6 bg-white text-black font-raleway">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center mx-auto md:mx-0 md:text-left w-[400px]">
          Pilih Paket Belajar yang Cocok Untukmu!
        </h2>

        {/* Layar Mobile */}
        <div className="md:hidden space-y-4">
          {plans.map((plan, index) => (
            <div key={index} className="border rounded-lg">
              <button className="flex justify-between items-center w-full p-4" onClick={() => togglePlan(index)}>
                <div className="flex items-center space-x-4">
                  <Image src={plan.icon} alt={plan.name} width={50} height={50} className="hidden sm:block" />
                  <h3 className="text-2xl font-semibold">{plan.name}</h3>
                </div>
                {openPlan === index ? (
                  <IoIosArrowDown className="text-xl text-gray-500" />
                ) : (
                  <IoIosArrowUp className="text-xl text-gray-500" />
                )}
              </button>
              {openPlan === index && (
                <div className="p-4 border-t flex flex-col h-full">
                  <ul className="mb-4 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="text-sm mb-2 flex items-center font-medium">
                        <FaRegCircleCheck className='mr-4 text-[#0067D0] text-[18px]'/>
                        {feature}
                        </li>
                    ))}
                  </ul>
                  <div className='mt-24'>
                  <p className="text-lg font-bold mb-4">{plan.price}</p>
                  <button className="bg-[#0067D0] text-white py-2 px-4 rounded w-full mt-auto">
                    Coba Sekarang
                  </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Layar Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="border-2 border-[#E8EEF7] rounded-lg p-6 w-full flex flex-col h-[600px]">
              <div className='border-b border-[#D1D5DB] mb-5'>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                <Image src={plan.icon} alt={plan.name} width={50} height={50} />
              </div>
              </div>
              <ul className="mb-4 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm mb-2 flex items-center font-medium">
                    <FaRegCircleCheck className='mr-4 text-[#0067D0] text-base w-[20px]'/>
                    {feature}
                    </li>
                ))}
              </ul>
              <div className='border-t border-[#D1D5DB] py-4 w-48'>
              <p className="text-xl font-semibold mb-4">{plan.price}</p>
              <button className="bg-[#0067D0] text-white font-semibold text-sm py-2 px-4 rounded w-36 mt-auto">
                Coba Sekarang
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;