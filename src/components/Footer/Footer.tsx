import logo from '@/assets/Moses logo[1].png'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTiktok} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='mt-[50px] bg-[#000] z-[100] '>
        <div className="container z-[100]">
            <div className="content mb-[20px] z-[100] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  lg:p-[20px] md:p-[20px] p-[0px] gap-[40px] ">
                <div className='flex flex-col items-start  justify-start gap-[30px]'>
                    <div className="logo w-[150px]"><img src={logo} alt="" className='w-full' /></div>  
                    <div className="des text-[12px] text-[#ceccccff]">Moses Design is where visionary minds and creative expertise transform spaces and elevate surroundings with extraordinary designs. With a focus on delivering inspirational and empowering creations, we curate exceptional outcomes tailored to our clients’ unique requirements, paying strong attention to every detail.</div>
                </div>
                <div className='flex flex-col items-start pt-[20px] justify-start gap-[30px]'>
                    <div className="news text-[20px] font-semibold text-[#fff]"><h1>Newsletter Subscription</h1></div>
                    <form className=""><input type="email" placeholder='Email*' className=' bg-transparent border-b' /></form>
                </div>
                <div className='flex flex-col items-start pt-[20px] justify-start gap-[30px]'>
                    <div className='text-[20px] font-semibold text-[#fff]'><h1> Portfolio</h1></div>
                    <button className=' bg-Gold w-[90%] border-none h-[50px] p-[10px] text-center border  text-[#000]'><span className=' relative '>Download Portofolio</span> </button>
                </div>
                <div className='flex flex-col items-start pt-[20px] justify-start gap-[10px]'>
                <div className='text-[20px] font-semibold text-[#fff]'><h1>Contact Info</h1></div>
                    <div >
                        <span className='text-[#fff] font-semibold text-[18px]'>Address: </span>
                        <span className='text-[#ceccccff] text-[14px]'>building 110 - arabilla - new cairo</span>
                    </div>
                    <div >
                        <span className='text-[#fff] font-semibold text-[18px]'>Phone: </span>
                        <a href="tel:++201273552288" className="text-base text-body-color text-[#fff]">
                     +201273552288
                     </a>
                    </div>
                    <div >
                        <span className='text-[#fff] font-semibold text-[18px]'>Email: </span>
                        <span className='text-[#ceccccff] text-[14px]'>Info@mosesdesigneg.com</span>
                    </div>
                </div>
            </div>

        </div>
        <div className="socail bg-Gold ">
            <div className="container">
                <div className="content w-full lg:flex-row md:flex-row flex-col gap-[10px] h-full flex items-center lg:justify-between md:justify-between justify-center p-[10px]  lg:p-[20px]">
                    <ul className="social-links flex items-center gap-[10px] text-[20px]">
                        <li><a href="https://www.facebook.com/profile.php?id=61555543965346" className='text-black hover:text-[#4a4949] transition duration-300'><FaFacebookSquare/></a></li>
                        <li><a href="https://www.instagram.com/mosesdesignseg/?fbclid=IwAR11JA-w9pzFqRkwFkOZPh-S9VnuycZBDVXHiNwrVUzvv1Naz78pzpH924I" className='text-black hover:text-[#4a4949] transition duration-300'><FaInstagramSquare/></a></li>
                        <li><a href="https://www.tiktok.com/@mosesdesigns?_t=8jIwEic5EEn&_r=1" className='text-black hover:text-[#4a4949] transition duration-300'><FaTiktok/></a></li>
                    </ul>
                    <a href='https://www.facebook.com/getsmarketingagencyeg' className='text-black'>© 2023 Gets All Rights Reserved.</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
