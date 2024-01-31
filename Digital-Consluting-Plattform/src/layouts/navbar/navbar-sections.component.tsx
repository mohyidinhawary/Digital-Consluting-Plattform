import { useState } from "react";
import { links } from "../../types/list";
export default function   NavSections(){
  
  const [open,setOpen]=useState(false);
    return(
      
        <>
        <div className="items-center justify-between  w-full md:flex md:w-auto md:order-1 " id="navbar-user">
        <div className=" absolute right-8 top-6 md:hidden " onClick={()=>setOpen(!open)}>
            <i className="fa fa-bars font-size:24px text-black text-xl" />
          </div>
    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-lime-500 md:z-auto z-[1] left-0  w-full  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-18 opacity-100' : 'top-[-490px]'}  `}>
      
      { links.map((link)=>(
        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
        <a href={link.link} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">{link.name}</a>
      </li>
      ))}
      
    </ul>
    
  </div>
        </>
    )
}