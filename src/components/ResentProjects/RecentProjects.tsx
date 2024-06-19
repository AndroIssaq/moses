
import img from '@/assets/IMG-20240112-WA0092.jpg'
import '@/components/ResentProjects/Recent.css'
import { useState,useEffect } from "react";
import { createClient } from 'contentful';
import GallerySection from '../GallerySection/GallerySection';
import ProjectsComponent from '../Projects/ProjectsComponents';
import { Skeleton } from '../ui/skeleton';
import Spinner from '../Spinner/Spinner';
const RecentProjects = () => {
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
          const response=await client.getEntries({content_type:'recentProjects'})
          setProducts(response.items)
          setIsLoading(false)
      } catch (error) {
          console.log(error);
      }
    }
    const getIdData = async()=>{
      setIsLoading(true)
    client.getEntry(id)
    .then((entry) => setIdProducts(entry) )
    .catch(console.error)
    setIsLoading(false)
    }
    useEffect(() => {
      getData()
  }, [])  
  useEffect(() => {
    setIsLoading(true)
    getIdData()
    setIsLoading(false)
  },[id])
 
return(
  <>
   {
      isLoading?<Spinner/>:<ProjectsComponent title={'RECENT PROJECTS'}     products={products} setId={setId} idProducts={idProducts} galleryOpen={galleryOpen}   setGalleryOpen={setGalleryOpen} setIdProducts={setIdProducts} isLoading={isLoading} setIsLoading={setIsLoading} />

    }
  </>
)
   
    
  
}

export default RecentProjects

/*


*/