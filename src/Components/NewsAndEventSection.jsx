import React from 'react'
import blogimg from '../assets/blog-01.jpg'
function NewsAndEventSection() {
  return (
    <section className="pt-20 lg:pt-[120px] pb-10 bg-[#f3f4fe] lg:pb-20 py-12 md:px-7 sm:px-12 md:p-16 lg:py-9 lg:px-16 xl:p-[70px]">
        <div className="container">
            <div className="mb-12 lg:mb-[100px]">
                <span className="text-sm font-medium text-white py-2 px-5 bg-primary inline-block mb-5">
                  Upcomiming Events
                </span>
                <h2 className="text-[35px] font-semibold">
                  For information on <br /> our programs or membership.
                </h2>
            </div>
            <div className="flex flex-col md:items-baseline justify-between md:flex-row md:space-x-2 space-y-5">
                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div className="mb-10 group wow fadeInUp" data-wow-delay=".1s">
                        <div className="rounded overflow-hidden mb-8 mt-4">
                            <a href="blog-details.html" className="block">
                            <img src={blogimg} alt="blog-img" className="w-full transition group-hover:scale-125 group-hover:rotate-6"/>
                            </a>
                        </div>
                        <div>
                            <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5">
                            Dec 22, 2023
                            </span>
                            <h3>
                            <a href="blog-details.html" className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                                Meet AutoManage, the best AI management tools
                            </a>
                            </h3>
                            <p className="text-base text-body-color">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div className="mb-10 group wow fadeInUp" data-wow-delay=".1s">
                        <div className="rounded overflow-hidden mb-8 mt-4">
                            <a href="blog-details.html" className="block">
                            <img src={blogimg} alt="blog-img" className="w-full transition group-hover:scale-125 group-hover:rotate-6"/>
                            </a>
                        </div>
                        <div>
                            <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5">
                            Dec 22, 2023
                            </span>
                            <h3>
                            <a href="blog-details.html" className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                                Meet AutoManage, the best AI management tools
                            </a>
                            </h3>
                            <p className="text-base text-body-color">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div className="mb-10 group wow fadeInUp" data-wow-delay=".1s">
                        <div className="rounded overflow-hidden mb-8 mt-4">
                            <a href="blog-details.html" className="block">
                            <img src={blogimg} alt="blog-img" className="w-full transition group-hover:scale-125 group-hover:rotate-6"/>
                            </a>
                        </div>
                        <div>
                            <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5">
                            Dec 22, 2023
                            </span>
                            <h3>
                            <a href="blog-details.html" className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                                Meet AutoManage, the best AI management tools
                            </a>
                            </h3>
                            <p className="text-base text-body-color">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewsAndEventSection