import { Parallax } from "react-parallax";
import background from '@/assets/back2.png'
import AboutCeo from '../AboutCeo/AboutCeo';
import Services from '../Services/Services';
const ParallaxCompoent = () => {
  return (
    <>
  
  <Parallax bgImage={background} strength={900}  className=' object-cover  w-full flex items-center justify-center flex-col mt-[50px]  pb-[20px]'>
    <Services/>
    <AboutCeo/>
  </Parallax>
       
  </>
  )
}

export default ParallaxCompoent