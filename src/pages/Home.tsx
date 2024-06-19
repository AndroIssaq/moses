import ContactUs from '@/components/ContactUs/ContactUs'
import Hero from '@/components/Hero/Hero.tsx'
import ParallaxCompoent from '@/components/ParallaxCompoent/ParallaxCompoent'
import Partners from '@/components/Partners/Partners'
import RecentProjects from '@/components/ResentProjects/RecentProjects'
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs'
const Home = () => {
  return (
   <>
    <Hero/>
    <ParallaxCompoent/>
    <Partners/>
    <WhyChooseUs/>
    <RecentProjects/>
    <ContactUs/>
   </>
  )
}

export default Home