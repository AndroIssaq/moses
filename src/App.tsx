import './App.css'
import { Route , Routes } from 'react-router'
import Home from '@/pages/Home.tsx'
import Navbar from '@/components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer'
import AboutUs from './pages/AboutUs'
import Projects from './pages/Projects' 
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import PopoverComponent from './components/PopoverComponent/PopoverComponent'
function App() {
  const {pathname}= useLocation()
useEffect(()=>{
  window.scrollTo(0,0)
  if(pathname==='/'){
    document.title='MOSES DESIGN'
  }else{
    document.title=`MOSES DESIGN ${pathname}`
  }
 
},[pathname])

  return (
    <>

      <Navbar/>
      <div className='fixed z-[10000] bottom-[5%] right-[2%] flex items-center justify-center '>
        <PopoverComponent/>
      </div>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
