import React  from 'react'
import { useState } from "react";
import { NavLink } from 'react-router-dom';
function BackgroundColor() {
    const [color, setColor] = useState("white");
  }
const Navbar = ({children}) => {
    const menuItem=[
        {
            path:"/features",
            name:"Features",
        },
        {
            path:"/pricing",
            name:"Pricing",    
        },
        {
            path:"/usecases",
            name:"Use Cases",   
        },
        {
            path:"/get-in-touch",
            name:"Request a Demo",    
        },
        {
            path:"/more",
            name:"More",    
        },
    ]
    return (
        <div className='flex flex-col'>
            <nav className="justify-between bg-white items-center max-w-full px-5 pt-6 pb-4  flex  h-full">
                <div className='flex flex-row'>
                     <a href="https://www.youtube.com/" className='flex cursor-pointer flex-row pr-4' >
                         <img src="https://podio.com/content/dam/podio/images/logos/podio-logo.svg" alt="logo" className='h-[30px] ' />
                    </a>
                    <div className='bg-primary lg:flex rounded-[72px]'>
                        <ul className="flex text-black items-center justify-center px-2 ">
                            {
                                menuItem.map((item, index)=>(
                                    <NavLink to={item.path} key={index} className={`cursor-pointer px-4 translift hover:text-[#05758A] hover:underline underline-offset-8 font-normal text-md `} activeclassName="active">
                                        <div style={{display:"block" }} className="link_text">{item.name}</div>
                                    </NavLink>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row pu-1'>
                    <a href="https://www.youtube.com/" className="mr-4">
                        <button className='ml-4 lg:flex text-sm font-semibold text-black px-4 py-1'>Login</button>
                    </a>
                    <a href="https://www.youtube.com/" className="mr-4">
                        <button className='ml-4 lg:flex text-sm  text-white px-4 py-1 hover:bg-[#2199AA] border rounded-full rounded bg-[#05758A]'>Sign up</button>
                    </a>
                </div>
             </nav>
             <main>{children}</main>
        </div>
  )
}
export default Navbar