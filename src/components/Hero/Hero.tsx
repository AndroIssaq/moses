// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectFade ,Autoplay} from 'swiper/modules';
import './styles.css';
import img2 from '@/assets/1.jpg'
import img3 from '@/assets/16.16.png'
import img4 from '@/assets/2.2.png'
import img5 from '@/assets/32.32.png'
import logo from '@/assets/LOGOGOOG.png'
const services=[{img:img2},{img:img3},{img:img4},{img:img5},]
const Hero = () => {
  return (
    <section className='w-full h-[100vh]'>
       <Swiper
        spaceBetween={30}
        effect={'fade'}
        fadeEffect={{
          crossFade:true,
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        modules={[EffectFade,Autoplay]}
        className="mySwiper"
      >
        {
          services.map((service,index)=>{
            return(
                <SwiperSlide key={index} className=' relative'>
                  <img className='hero-img h-[100vh] w-full object-cover'  src={service.img} />
                  <span className='w-full h-full flex items-end justify-center absolute top-0 left-0 bg-[#0000004f]'>
                    <div className='w-[90%] h-[50%] flex items-center justify-center flex-col'> 
                    <div className=' ]'><img src={logo} alt="" className=' object-cover w-full h-full'/></div>
                    </div>
                  </span>
                </SwiperSlide>
            )
          })
        }
       
      </Swiper>
    </section>
  )
}

export default Hero