import Banner from "@/components/Banner/Banner"
import ContactUs from "@/components/ContactUs/ContactUs"
import Mission from "@/components/Mission/Mission"
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs"
import img from '@/assets/635446546544646446.png'

const AboutUs = () => {
  return (
    <section>
        <Banner title={'About Us'} img={img}/>
        <WhyChooseUs/>
        <Mission/>
        <ContactUs/>
    </section>
  )
}

export default AboutUs