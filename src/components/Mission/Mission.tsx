import  { useState } from 'react'
import img from '@/assets/IMG-20240112-WA0093.jpg'
const Mission = () => {
    const [view,setView]=useState('goals')
  return (
    <div className='lg:mt-[100px] md:mt-[100px] mt-[50px] '>
      <div className="container">
        <div className="content flex items-center justify-center lg:flex-row md:flex-col flex-col gap-[40px] ">
          <div className="desc flex-1 flex flex-col items-start justify-start ">
          <section className='w-full '>
        <div className='option flex items-start justify-start gap-[30px] text-[#959393]'>
            <button onClick={()=>setView('goals')} className={`${view==='goals'&& 'text-Gold'}`}>OUR GOALS</button>
            <button onClick={()=>setView('mission')} className={`${view==='mission'&& 'text-Gold'}`}>OUR MISSION</button>
            <button onClick={()=>setView('vission')} className={`${view==='vission'&& 'text-Gold'}`}>OUR VISION</button>
        </div>
        <div className='view'>
            {view==='goals'&&<AboutGets/>}
            {view==='mission'&&<MissionVeiw/>}
            {view==='vission'&&<Vission/>}
        </div>
    </section>
          </div>
          <div className=" flex-1 h-full w-full flex items-start justify-end ">
            <div className=" founder  img h-[70%] lg:w-[100%] md:w-full w-full flex items-start justify-end relative overflow-hidden">
                <img  src={img} alt="" className=' h-full w-[100%] object-cover' />
              <span className=' absolute  bottom-[10%] w-[0%] h-[100px] bg-mainColor flex flex-col items-start justify-center '>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  )
}

const MissionVeiw=()=>{
    return(
        <div className='mt-[30px]'>
            <h3 className='text-[25px] text-[#fff]'>Design & implementation</h3>
            <p className='mt-[15px] text-[#706f6f]' >Embedding ourselves into person’s lifestyle allows us to transfer their dream of having a house into creating an actual home . we create such a reality , by providing : Design , implementation , furnishing and landscape</p>
        </div>
    )
}

const Vission=()=>{
    return(
        <div className='mt-[30px]'>
            <h3 className='text-[25px] text-[#fff]'> Interior Of Tomorrow</h3>
            <p className='mt-[15px] text-[#706f6f]'>Embedding ourselves into person’s lifestyle allows us to transfer their dream of having a house into creating an actual home . we create such a reality , by providing : Design , implementation , furnishing and landscape</p>
        </div>
    )
}

const AboutGets=()=>{
    return(
        <div className='mt-[30px]'>
            <h3 className='text-[25px] text-[#fff]'>Goals</h3>
            <p className='mt-[15px] text-[#706f6f]'>Our goal is to make you the best design ever with our unique signature way in designs & also to make you feel comfortable with the best quality . Here we will make your dreams come true . We are doing our best to become the best international interior design studio
</p>
        </div>
    )
}

export default Mission