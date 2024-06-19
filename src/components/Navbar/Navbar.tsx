import './Navbar.css'
import { Link } from 'react-router-dom'
import {FaBars}from 'react-icons/fa'
import { useState ,useEffect} from 'react'
import logo from '../../assets/Moses logo[1].png'
const Navbar = () => {
    const [navbarLayout,setNavbarLayout]=useState(false)
useEffect(()=>{
  window.addEventListener('scroll',()=>{
    const scroll= window.scrollY
    if(scroll>1){
      setNavbarLayout(!navbarLayout)
    }else{
      setNavbarLayout(false)
    }
  })
},[])
    const [pathName,setPathName]=useState('/')
    const pathNameHandler=()=>{
        const path = window.location.pathname
        setPathName(path)
        console.log(pathName);
    }       
    useEffect(()=>{
        pathNameHandler()
    },[pathName])
   
    const [toggle,setToggle]=useState(false)
return (
    <nav className={`w-[100%] z-[1000000]  ${navbarLayout?' bg-[#171717] border-none  top-[0px]': "bg-[#0000] "} fixed py-[10px] h-auto  `}>

            <div className=" flex items-center justify-between lg:px-[50px] md:px-[50px] sm:px-[20px] px-[20px]">
                <div className="logo flex items-center justify-center gap-[15px]">
                <Link to='/'>
                    <img src={logo} alt="" className='lg:h-[90px] md:h-[80px]  sm:h-[70px] h-[70px]  object-cover'/>
                </Link>
                </div>
         
            <div className="links sm:block md:block hidden">
                <ul className='flex gap-[20px]'>
                    <Link  to='/' className=' font-bold'>Home</Link>
                    <Link  to='/aboutus' className=' font-bold'>About Us</Link>
                    <Link  to='/projects' className=' font-bold'  >Projects</Link>
                </ul>
            </div>
            <div onClick={()=>setToggle(!toggle)} className="icons cursor-pointer text-[35px] text-white sm:hidden md:hidden block relative" >
                <FaBars/>
            </div>
            <div className={`mob-nav absolute w-[90%] z-20  h-auto p-[40px] bg-black left-[50%] translate-x-[-50%] rounded-xl top-[100px] ${toggle?'nav-open':'nav-close'}`}>
            <ul className='flex gap-[20px] flex-col'>
                    <Link onClick={()=>setToggle(!toggle)} to='/' className='text-white font-bold  text-[25px]'>Home</Link>
                    <Link onClick={()=>setToggle(!toggle)} to='/aboutus' className='text-white font-bold  text-[25px]'>About Me</Link>
                    <Link onClick={()=>setToggle(!toggle)} to='/projects' className='text-white font-bold 0 text-[25px]'>Projects</Link>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar