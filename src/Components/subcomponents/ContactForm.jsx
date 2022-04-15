import React from 'react'

function ContactForm() {
  return (
    <div className="px-4 w-full lg:w-5/12 xl:w-4/12">
            <div className="shadow-testimonial rounded-lg bg-white py-10 px-8 md:p-[60px] lg:p-10 2xl:p-[60px] sm:py-12 sm:px-10 lg:py-12 lg:px-10 wow fadeInUp" data-wow-delay>
              <h3 className="font-semibold mb-8 text-2xl md:text-[26px]">
                Send us a Message
              </h3>
              <form>
                <div className="mb-6">
                  <label htmlFor="fullName" className="block text-xs text-dark">
                    Full Name*
                  </label>
                  <input type="text" name="fullName" placeholder="Adam Gelius" className="w-full border-0 border-b border-[#f1f1f1] focus:border-primary focus:outline-none py-4 "/>
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-xs text-dark">Email*</label>
                  <input type="email" name="email" placeholder="example@yourmail.com" className=" w-full border-0 border-b border-[#f1f1f1] focus:border-primary focus:outline-none py-4"/>
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-xs text-dark"> Phone* </label>
                  <input type="text" name="phone" placeholder="+885 1254 5211 552" className="w-full border-0 border-b border-[#f1f1f1] focus:border-primary focus:outline-none py-4"/>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-xs text-dark"> Message* </label>
                  <textarea name="message" rows="1" placeholder="type your message here" className="w-full  border-0 border-b border-[#f1f1f1]  focus:border-primary focus:outline-none  py-4 resize-none"></textarea>
                </div>
                <div className="mb-0">
                  <button type="submit" className="inline-flex items-center justify-center py-4 px-6 rounded text-white bg-dark text-base font-medium hover:bg-dark transition duration-300 ease-in-out ">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
  )
}

export default ContactForm