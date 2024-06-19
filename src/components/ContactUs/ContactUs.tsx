import { MdOutlineLocalPhone ,MdLocationPin,MdOutlineMail  } from "react-icons/md";

const ContactUs = () => {
  return (
<section
   className="relative z-10 overflow-hidden  mt-[50px]  py-20 lg:py-[120px]"
   >
      <div className='w-full container text-start lg:text-[25px] md:text-[25px] text-Gold p-0'><h1>CONTACT US</h1></div>
   <div className="container border-t border-[#706f6f]  ">
      <div className="flex flex-wrap mt-[50px] -mx-4 lg:justify-between">
         <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
               <h2
                  className="text-dark  text-Gold mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]"
                  >
                  GET IN TOUCH WITH MOSES
               </h2>
               <p
                  className="text-base leading-relaxed text-body-color text-[#706f6f] mb-9"
                  >
                  Are you interested yet? You’re only a few empty boxes away from experience the magic of pure talent. Get in touch with us and let us guide you through our path of creation
               </p>
               <div className="mb-8 flex w-full gap-[20px] max-w-[370px]">
                    <span className="text-[45px] text-Gold"><MdLocationPin /></span>
                  <div className="w-full">
                     <h4 className="mb-1 text-xl font-bold text-dark text-white">
                        Our Location
                     </h4>
                     <p className="text-base text-body-color text-[#706f6f]">
                     building 110 - arabilla - new cairo
                     </p>
                  </div>
               </div>
               <div className="mb-8 flex w-full max-w-[370px] gap-[20px]">
                     <span className="text-[45px] text-Gold"><MdOutlineLocalPhone /></span>
                  <div className="w-full">
                     <h4 className="mb-1 text-xl font-bold text-dark text-white">
                        Phone Number
                     </h4>
                     <a href="tel:+201273552288" className="text-base text-body-color text-[#706f6f]">
                     +201273552288
                     </a>
                  </div>
               </div>
                 <div className="mb-8 flex w-full max-w-[370px] gap-[20px]">
                     <span className="text-[45px] text-Gold"><MdOutlineMail /></span>
                  <div className="w-full">
                     <h4 className="mb-1 text-xl font-bold text-dark text-white">
                        Email
                     </h4>
                     <a href="tel:+201273552288" className="text-base text-body-color text-[#706f6f]">
                     info@mosesdesignseg.com
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div className="w-full  lg:w-1/2 xl:w-5/12">
            <div
               className="relative p-8 bg-[#2b2b2d] rounded-lg shadow-lg bg-dark-2 sm:p-12"
               >
               <form>
                  <div className="mb-6">
                     <input
                        type="text"
                        placeholder="Your Name"
                        className="border-stroke border-dark-3 text-[#706f6f] bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                        />
                  </div>
                  <div className="mb-6">
                     <input
                        type="email"
                        placeholder="Your Email"
                        className="border-stroke border-dark-3 text-[#706f6f] bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                        />
                  </div>
                  <div className="mb-6">
                     <input
                        type="text"
                        placeholder="Your Phone"
                        className="border-stroke border-dark-3 text-[#706f6f] bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                        />
                  </div>
                  <div className="mb-6">
                     <textarea
                      
                        placeholder="Your Message"
                        className="border-stroke border-dark-3 text-[#706f6f] bg-dark text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
                        ></textarea>
                  </div>
                  <div>
                     <button
                        type="submit"
                        className="w-full p-3 text-white transition border rounded border-primary bg-Gold hover:bg-opacity-90"
                        >
                     Send Message
                     </button>
                  </div>
               </form>
               <div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
  )
}

export default ContactUs