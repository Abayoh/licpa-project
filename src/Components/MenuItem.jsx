import React, {useState} from 'react'
import { FaSortDown } from "react-icons/fa";

function MenuItem({routes}) {
    const [showSubMenu, setShowSubMenu] = useState(false);

    const handleHover = () => { 
        setShowSubMenu((prevState) => !prevState)
    }
    
  return (
    <>
        <li className="group nav-item h-full flex items-center hover:text-black hover:bg-blue-200" onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <a
            className="relative px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white"
            href="#pablo"
            >
            <span className="mr-1">{routes.name}</span> 
            {routes.childrens ? (
                <span className="absolute right-0 bottom-0 top-1.5 text-lg leading-lg text-white opacity-75">
                <FaSortDown size="16" />
                </span>
            ) :  ''}
            </a>
            {routes.childrens ? (
            <ul
                className={`    
                ${ showSubMenu ? "opacity-1 block" : "opacity-0 hidden"} 
                absolute flex-col space-y-4 top-14 drop-shadow-md bg-white w-80 pt-4 pb-4 border-t-blue-300`}
            >
                {routes.childrens.map((submenu, i) => (
                <li  key={i}  className="hover:bg-blue-100 h-full px-9">
                    <a className="block " href="#Objectives">
                    {submenu.name}
                    </a>
                </li>
                ))}
            </ul>
            ) : null}
        </li>
    </>
  )
}

export default MenuItem