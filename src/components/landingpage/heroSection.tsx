import Image from 'next/image';

const Hero = () => {
    return (
      <section className="relative bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Text Content */}
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-4xl font-bold text-black mb-4">
              Learn Anytime, <span className="text-blue-600">Grow Anytime</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Lorem ipsum odor amet, consectetur adipiscing elit. Eu aenean tortor ut, tempor bibendum maecenas lacinia.
            </p>
            <a
              href="/daftar"
              className="inline-block text-white bg-blue-600 px-6 py-3 rounded-lg text-xl hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 transition">
              Daftar Sekarang
            </a>
          </div>
  
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
            <Image width={300} height={200}
              src="/HeroImage.png"
              alt="Hero Image"
              className="w-full max-w-md rounded-lg"
            />
            </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  