import React from 'react';
import Image from 'next/image';

const PricingSection = () => {
  return (
    <div className="flex flex-col items-center bg-white text-black">
      <h2 className="text-3xl font-bold mb-8">
        Pilih Paket Belajar yang Cocok Untukmu!
      </h2>
      <div className="flex space-x-4">
        {/* Basic Plan */}
        <div className="border rounded-lg p-6 shadow-md w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Basic Plan</h3>
            <Image
              src="/basicPlan.png"
              alt="Basic Plan Logo"
              width={24}
              height={24}
            />
          </div>
          <ul className="mb-4">
            <li className="flex items-center mb-2">
              Akses konten gratis
            </li>
            <li className="flex items-center mb-2">
              Learning path terbatas
            </li>
          </ul>
          <p className="text-lg font-bold mb-4">Gratis</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Coba Sekarang
          </button>
        </div>

        {/* Pro Plan */}
        <div className="border rounded-lg p-6 shadow-md w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Pro Plan</h3>
            <Image
              src="/proPlan.png"
              alt="Pro Plan Logo"
              width={24}
              height={24}
            />
          </div>
          <ul className="mb-4">
            <li className="flex items-center mb-2">
              Akses penuh semua konten
            </li>
            <li className="flex items-center mb-2">
              Learning path lengkap
            </li>
            <li className="flex items-center mb-2">
              Forum eksklusif dengan mentor
            </li>
          </ul>
          <p className="text-lg font-bold mb-4">Rp 20.000/Bulan</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Coba Sekarang
          </button>
        </div>

        {/* Elite Plan */}
        <div className="border rounded-lg p-6 shadow-md w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Elite Plan</h3>
            <Image
              src="/elitePlan.png"
              alt="Elite Plan Logo"
              width={24}
              height={24}
            />
          </div>
          <ul className="mb-4">
            <li className="flex items-center mb-2">
              Akses penuh semua konten
            </li>
            <li className="flex items-center mb-2">
              Learning path lengkap
            </li>
            <li className="flex items-center mb-2">
              Forum eksklusif dengan mentor
            </li>
            <li className="flex items-center mb-2">
              Sertifikat
            </li>
            <li className="flex items-center mb-2">
              Diskon eksklusif untuk event/workshop SMK Telkom Malang
            </li>
            <li className="flex items-center mb-2">
              Konsultasi 1-on-1 dengan mentor pilihan
            </li>
            <li className="flex items-center mb-2">
              Merchandise eksklusif
            </li>
            <li className="flex items-center mb-2">
              Bonus E-book dan materi tambahan
            </li>
          </ul>
          <p className="text-lg font-bold mb-4">Rp 50.000/Bulan</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Coba Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
