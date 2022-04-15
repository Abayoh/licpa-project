import React from "react";
import aboutimg from "../assets/mentor.jpg";
import dottedsvg from '../assets/svg/dotted-shape.svg'

function AboutSection() {
  return (
    <section className="pt-20 lg:pt-[120px] pb-20 lg:pb-[120px] bg-[#f3f4fe]">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center lg:mx-10">
            <div>
            <div className="lg:max-w-[565px] xl:max-w-[640px] w-full py-12 md:px-7 sm:px-12 md:p-16 lg:py-9 lg:px-16 xl:p-[70px]">
                <span className="text-sm font-medium text-white py-2 px-5 bg-primary inline-block mb-5">
                  About (LICPA)
                </span>
                <h2 className="font-bold text-3xl sm:text-4xl 2xl:text-[40px] sm:leading-snug text-dark mb-6">
                    Liberia Institute Of Cartified Public Accountants (LICPA)
                </h2>
                <p className="text-base text-body-color mb-9 leading-relaxed">
                  The main ‘thrust' is to focus on educating attendees on how
                  to best protect highly vulnerable business applications with
                  interactive panel discussions and roundtables led by subject
                  matter experts.
                </p>
                <p className="text-base text-body-color mb-9 leading-relaxed">
                  The main ‘thrust' is to focus on educating attendees on how
                  to best protect highly vulnerable business applications with
                  interactive panel.
                </p>
                <a href="#about" className="inline-flex items-center justify-center py-4 px-6 rounded text-white bg-dark text-base font-medium hover:bg-opacity-90 hover:shadow-lg transition duration-300 ease-in-out">
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative lg:w-[800px] z-10">
               <img src={aboutimg} alt="aboutimg" className="w-full " />
               <span className="absolute top-[-40px] left-[-20px] z-[-0]">
                    <img src={dottedsvg} alt="dottedsvg" />
               </span>
            </div>
         </div>
      </div>
    </section>
  );
}

export default AboutSection;