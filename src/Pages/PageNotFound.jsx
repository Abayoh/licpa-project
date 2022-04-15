import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../Components/PageHeader'

function PageNotFound() {
  return (
    <>
    <PageHeader pageName="404 PAGE" />
    <section className="bg-white py-14 lg:py-20">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="max-w-[850px] mx-auto text-center bg-white rounded-lg relative overflow-hidden py-20 px-8 sm:px-12 md:px-[60px] shadow-lg wow fadeInUp">
              <h2 className="font-bold mb-8 text-dark text-3xl sm:text-4xl lg:text-[40px] xl:text-[42px] ">
                404 - We couldn't find that page.
              </h2>
              <h3 className="font-normal mb-8 text-xl md:text-2xl text-dark-700">
                Maybe you can find what you need here?
              </h3>
              <ul className="flex flex-wrap justify-center">
                <li>
                  <Link to="/" className="text-base  font-medium  py-3  px-6  text-dark  rounded-md  mx-2  my-1  inline-block  bg-[#f5f8ff]  hover:bg-primary hover:text-white ">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default PageNotFound