import React, { useState } from 'react';
import { NavLink,Link} from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {links} from '../data/dummy';
import {useGlobalContext} from '../context/context'


export default function Sidebar() {
  const { activeMenu, setActiveMenu, reSize}=useGlobalContext();

  const closeActiveMenu=()=>{
    if (activeMenu&& reSize<=900) {
      setActiveMenu(false)
    }
  }

  const activeLink='flex gap-5 items-center pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
  const normalLink='flex gap-5 items-center pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-600 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu&&<>
      <div className='flex justify-between items-center'>
        <Link to='/' onClick={closeActiveMenu} className='flex justify-center items-center gap-2 ml-3 mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
          <SiShopware/> <span>Shoppy</span>
        </Link>
        <TooltipComponent content={'Menu'} position='BottomCenter'>
          <button type='button' onClick={()=>setActiveMenu((pre)=>!pre)} className='rounded-full p-1.5 text-xl block mt-4 hover:bg-light-gray'>
            <MdOutlineCancel/>
          </button>
        </TooltipComponent>
      </div>
      <div className="mt-10">
      {links.map((item,index)=>
      <div key={index}>
        <p className='text-gray-500 m-3 mt-4 text-xs uppercase'>
          {item.title}
        </p>
        {item.links.map((link,index)=>
          <NavLink to={`/${link.name}`} 
          key={index} onClick={closeActiveMenu}
          style={({ isActive }) => ({
            backgroundColor: isActive ? '#448ee4' : '',
          })}
          className={({ isActive }) => isActive ? activeLink : normalLink} 
          >
              {link.icon}
              <span className='uppercase text-sm'>{link.name}</span>
          </NavLink>
        )}
      </div>
      )}
      </div>
      </>}
    </div>
  )
}
