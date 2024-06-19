import Banner from '@/components/Banner/Banner'
import img from '@/assets/IMG-20240112-WA0093.jpg'
import ProjectsComponent from '@/components/Projects/ProjectsComponents'
import { useState,useEffect } from "react";
import { createClient } from 'contentful';
import Spinner from '@/components/Spinner/Spinner';
const Projects = () => {
  const [products, setProducts] = useState([])
  const [idProducts, setIdProducts] = useState([])
  const [isLoading,setIsLoading]=useState(false)
  const [galleryOpen,setGalleryOpen]=useState(false)
  const [id,setId]=useState('')
    const client = createClient({
      space: '890dos5ugy5k',
      environment: 'master', // defaults to 'master' if not set
      accessToken: '8H5fOBEZ_HigGXFQufaOr0KDe9Im7Qt-xMiEHL07v6E'
    })
    const getData = async()=>{
      try {
        setIsLoading(true)
          const response=await client.getEntries({content_type:'allProjects'})
          setProducts(response.items)
          setIsLoading(false)
      } catch (error) {
          console.log(error);
      }
    }
    const getIdData = async()=>{
    client.getEntry(id)
    .then((entry) => setIdProducts(entry) )
    .catch(console.error)
    }
    useEffect(() => {
      getData()
  }, [])  
  useEffect(() => {
    getIdData()
  },[id])
  return (
    <section>
        <Banner title={'Projects'} img={img}/>
        {
      isLoading?<Spinner/>:<ProjectsComponent title={'ALL PROJECTS'}     products={products} setId={setId} idProducts={idProducts} galleryOpen={galleryOpen}   setGalleryOpen={setGalleryOpen} setIdProducts={setIdProducts} isLoading={isLoading} setIsLoading={setIsLoading} />

    }
    </section>
  )
}

export default Projects