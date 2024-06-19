import img from '@/assets/aboutceo2.jpg'
const AboutCeo = () => {
  return (
    <section className='mt-[100px] '>
    <div className="container">
        <div className="content xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col gap-[50px]  flex items-start justify-center ">
            <div className="left relative flex-1 flex items-center justify-center">
                <div className="img lg:h-[670px] md:h-[550px] sm:h-[350px] h-[350px] lg:w-[90%] md:w-[95%] sm:w-[95%] w-[95%] rounded-[30px] overflow-hidden">
                    <img src={img} alt="" className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="right flex-1 flex flex-col gap-[20px] items-start justify-start text-start">
                <div className="title lg:text-[25px] md:text-[25px] text-Gold"><h1>ABOUT CEO</h1></div>
                <div className="name lg:text-[55px] md:text-[62px] sm:text-[35px] text-[30px] font-bold text-[#fff]"><h2>CEO : BESHOY ADEL</h2></div>
                <p className="des text-[#C6C8C9] lg:text-[18px] md:text-[18px] sm:text-[15px] text-[14px]">Egyptian architect and interior designer, Beshoy Adel, has become a prominent figure in the niche field of elegant designs, luxurious finishes and visionary layouts. Renowned for his highly expressive designs marked by mixed materials and dynamic forms, he is considered a pioneer in contemporary and modern grandeur architecture styles in the region Prominent with his experimental styles and innovative designs,
                Born in Egypt and the oldest of 2 siblings, Beshoy aimed for excellence in his studies and nourished a deep-rooted interest in the arts. Even as a young adult he had no doubt that he would one day actualise a professional career in design.
                Today, his innovative designs and experimental methods have earned him a strong reputation among celebrities, project innovators, prominent aristocratic families and major real estate developers..</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutCeo