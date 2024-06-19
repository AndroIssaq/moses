import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useState,useEffect } from "react";
import { createClient } from 'contentful';
const Services = () => {
  const [products, setProducts] = useState([])
  const [isLoading,setIsLoading]=useState(false)
  const client = createClient({
    space: '890dos5ugy5k',
    environment: 'master', // defaults to 'master' if not set
    accessToken: '8H5fOBEZ_HigGXFQufaOr0KDe9Im7Qt-xMiEHL07v6E'
  })
  const getData = async()=>{
    try {
      setIsLoading(true)
        const response=await client.getEntries({content_type:'services'})
        setProducts(response.items)
        setIsLoading(false)
    } catch (error) {
        console.log(error);
    }
  }
  useEffect(() => {
    getData()
}, [])  
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
      )
      
  return (
    <section className='mt-[100px]'>
        <div className='w-full container text-start lg:text-[25px] md:text-[25px] text-Gold p-0'><h1>OUR SERVICES</h1></div>
        <div className="container border-t border-[#706f6f]">
            <div className="content mt-[20px] flex flex-col items-center justify-center w-full">
            <Carousel
    plugins={[plugin.current]}
      opts={{
        align: "end",
      }}

      orientation="horizontal"
      className="w-full"
    >
      <CarouselContent className="-mt-1  w-full p-[5px] ">
        {products?.map((product, index) => (
          <CarouselItem key={index} className="xl:basis-[25%] lg:basis-[40%] md:basis-[40%] sm:basis-[50%] basis-[80%]  w-full h-full pb-[10px]">
            <div className="">
              <Card className='overflow-hidden w-full lg:h-[450px] md:h-[450px] sm:h-[350px] h-[250px]  '>
                <CardContent className="flex relative items-center justify-center w-full h-full p-[0px]">
                  <img src={'http:'+product?.fields?.img?.fields?.file?.url} alt="" className='w-full h-full object-cover' />
                  <span className='w-full h-full flex items-center justify-center absolute top-0 left-0 bg-[#00000076]'>
              <div className='w-full h-[50%] flex items-center text-center justify-center flex-col'> 
              <h1 className='lg:text-[35px] md:text-[35px] sm:text-[20px] text-[20px] text-[#fff]'>{product?.fields?.title}</h1>
              </div>
            </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
            </div>
        </div>
    </section>
   
  )
}

export default Services

/*
 
*/