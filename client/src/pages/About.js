import React from 'react';
import aboutImg from '../assets/images/about.png';
import aboutCardImg from '../assets/images/about-card.png';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className='container mx-auto px-4 py-8'>
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-6 xl:gap-0 items-center">
        {/* about image */}
        <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
          <img src={aboutImg} alt="doctor image" className="w-full rounded-lg shadow-lg" />
          <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[7%] lg:right-[15%]">
            <img src={aboutCardImg} alt="card" className="w-full rounded-lg shadow-md" />
          </div>
        </div>

        {/* about content */}
        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Proud to be one of the nation's best</h2>
          <p className="text-lg text-gray-600 mb-4">
            For 30 years in a row, U.S. News & World Report has recognized us
            as one of the best public hospitals in the Nation and #1 in Europe.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Our best is something we strive for each day,
            caring for our patients, not looking back at what we accomplished but towards what we can do tomorrow.
            Providing the best.
          </p>
          <Link to='/' className="inline-block bg-[#005555] text-[white] text-lg font-normal py-2 px-6 
          rounded-lg shadow transition duration-300 
          mt-4 mr-2
          hover:text-[#eef106]">
            Learn More
          </Link>
          <Link to='/Contact' className="inline-block bg-[#005555] text-[white] text-lg font-normal py-2 px-6 
          rounded-lg shadow transition duration-300 
          mt-4 ml-4 
          hover:text-[#eef106]">
            Need Help?
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
