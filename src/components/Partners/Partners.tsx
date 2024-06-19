// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import './styles.css';
import img1 from '@/assets/Untitled-1Artboard-1.png'
import img2 from '@/assets/Untitled-1Artboard-2.png'
import img3 from '@/assets/Untitled-1Artboard-3.png'
import img4 from '@/assets/Untitled-1Artboard-4.png'
import img5 from '@/assets/Untitled-1Artboard-5.png'
import img6 from '@/assets/Untitled-1Artboard-6.png'
import img7 from '@/assets/Untitled-1Artboard-7.png'
import img8 from '@/assets/amaz.png'
const logos=[{img:img1},{img:img2},{img:img3},{img:img4},{img:img5},{img:img6},{img:img7},{img:img8},]
const Partners = () => {
  return (
    <section className='  w-full mb-[50px] mt-[100px]'>
        <div className="container  text-center">
        <Swiper
        slidesPerView={2}
        spaceBetween={0}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper mt-[50px]"
      >
        {
            logos.map((logo,index)=>{
                return(
                    <SwiperSlide key={index} className=' bg-transparent h-auto'>
                        <div className='img w-[100%] h-auto   flex items-center justify-center'>   
                            <img src={logo.img} alt="" className=' w-full h-full object-cover' />
                        </div>
                    </SwiperSlide>
                )
            })
        }
       
      </Swiper>
        </div>
    </section>

  )
}

export default Partners