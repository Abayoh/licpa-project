import React from "react";
import AboutSection from "../Components/AboutSection";
import InfoSection from "../Components/InfoSection";
import ContactSection from "../Components/ContactSection";
import NewsAndEventSection from "../Components/NewsAndEventSection";

function Home() {
  return (
    <>
      <div className="hero-section flex  items-center relative lg:h-[1000px] h-[400px] pt-[120px] md:pt-[130px] lg:pt-[160px]">
        <div className="flex justify-center md:items-center bg-dark bg-opacity-60 md:h-96 md:w-[40rem] h-60 w-80 mx-auto md:mx-10 md:my-24">
          <div className="mx-5 my-5">
            <h2 className="text-white md:font-samibold text-xl sm:text-4xl md:text-[45px] leading-snug sm:leading-snug md:leading-snug mb-8">
              Liberia Institute Of Cartified Public Accountants (LICPA)
            </h2>
            <p className="mb-10 text-gray-300 font-semibold hidden md:block">
              The main ‘thrust' is to focus on educating attendees on how to
              best protect highly vulnerable business applications with
              interactive panel discussions and roundtables led by subject
            </p>
            <button className="py-4 px-6 sm:px-10 inline-flex items-center justify-center text-center text-dark text-base bg-white hover:text-primary hover:shadow-lg font-medium rounded-lg transition duration-300 ease-in-out">
              Read More
            </button>
          </div>
        </div>
      </div>
      <AboutSection />
      <InfoSection />
      <ContactSection />
      <NewsAndEventSection />
    </>
  );
}

export default Home;
