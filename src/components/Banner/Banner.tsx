
const Banner = ({title,img} ) => {
  return (
    <section className='w-'>
        <div className='img w-full h-[50vh] relative'>
            <img src={img} alt="" className='w-full h-full object-fill' />
            <span className='w-full h-full flex items-center justify-center absolute top-0 left-0 bg-[#0000004f]'>
              <div className='w-full h-[50%] flex items-center justify-center flex-col'> 
              <h1 className='lg:text-[70px] md:text-[65px] sm:text-[55px] text-[55px] text-[#fff]'>{title}</h1>
              </div>
            </span>
        </div>
    </section>
  )
}

export default Banner