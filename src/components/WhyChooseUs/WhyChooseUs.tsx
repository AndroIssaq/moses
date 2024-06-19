import img from '@/assets/ABOUT MOSES.jpg'
const WhyChooseUs = () => {
  return (
    <section className='mt-[100px] '>
        <div className="container">
            <div className="content xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col gap-[50px]  flex items-start justify-center ">
                <div className="left relative flex-1 flex items-center justify-center">
                    <div className="img lg:h-[550px] md:h-[550px] sm:h-[350px] h-[350px] lg:w-[90%] md:w-[95%] sm:w-[95%] w-[95%] rounded-[30px] overflow-hidden">
                        <img src={img} alt="" className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className="right flex-1 flex flex-col gap-[20px] items-start justify-start text-start">
                    <div className="title lg:text-[25px] md:text-[25px] text-Gold"><h1>WHY CHOOSE US</h1></div>
                    <div className="name lg:text-[45px] md:text-[62px] sm:text-[35px] text-[30px] font-bold text-[#fff]"><h2>MOSES INTERIOR DESIGNS</h2></div>
                    <p className="des text-[#C6C8C9]">Moses DesignS is where visionary minds and creative expertise transform spaces and elevate surroundings with extraordinary designs. With a focus on delivering inspirational and empowering creations, we curate exceptional outcomes tailored to our clients’ unique requirements, paying strong attention to every detail.</p>
                    <div className="numbers w-full border-t border-[#C6C8C9] grid xl:grid-cols-2 mt-[50px] lg:grid-cols-2 md:grid-cols-2 sm:grid-col-1 grid-col-1 lg:gap-[20px] md:gap-[20px] ">
                        <div className="projects flex items-center justify-center gap-[25px] ">
                            <h1 className='lg:text-[75px] md:text-[75px] sm:text-[55px] text-[55px]  font-bold text-[#FFF]'>52</h1>
                            <p className='text-[#C6C8C9] text-[20px] tracking-widest'>PROJECTS COMPLETED</p>
                        </div>
                        <div className="customers flex items-center justify-center gap-[25px] ">
                            <h1 className='lg:text-[75px] md:text-[75px] sm:text-[55px] text-[55px] font-bold text-[#FFF]'>49</h1>
                            <p className='text-[#C6C8C9] text-[20px] tracking-widest'>CUSTOMER SATISFACTION</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs