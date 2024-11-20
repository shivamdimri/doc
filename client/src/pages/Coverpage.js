import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';

const Coverpage = () => {
  const navigate = useNavigate(); 

  const handleAppointmentRequest = () => {
    navigate('/register');
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]  ml-[20px]">
                <h1 className='text-[36px] text-headingColor font-[800] md:text-[60px]'>We help a healthy, longer life.</h1>
                <p className="text__para">"The pain itself is very important, 
                and the education of the student is followed, 
                but at the same time it happens that there is some great work and pain. 
                For I will come to the smallest detail, 
                who does not practice any work unless he derives some benefit from it."</p>
                <div className="float-none">
                  <button onClick={handleAppointmentRequest} className=
                  'primary-button rounded my-3 p-2 half-width-button'>Request an Appointment</button>
                </div>
              </div>

              {/* hero counter */}
              <div className='mt-[30px] lg:mt[70px] flex flex-col lg:flex-row lg:items-center gap-5 
              lg:gap-[30px]  ml-[20px]'>
                <div>
                  <h2 className='text-[36px] lg:text-[44px] font-[700]
                  text-headingColor'> +30 </h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className="text__para">Years of experience</p>
                </div>
                <div>
                  <h2 className='text-[36px] lg:text-[44px] font-[700]
                  text-headingColor'> +15 </h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className="text__para">Clinic Locations</p>
                </div>
                <div>
                  <h2 className='text-[36px] lg:text-[44px] font-[700]
                  text-headingColor'> 100% </h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                  <p className="text__para">Years of experience</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className='w-full' src={heroImg01} alt="" />
              </div>
              <div className='mt-[30px]'>
                <img src={heroImg02} alt="" className='w-full mb-[30px]'/>
                <img src={heroImg03} alt="" className='w-full mb-[30px]'/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Coverpage;
