import React, { useEffect } from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft} from 'react-icons/bs';
import { RiNotification3Line} from 'react-icons/ri';
import { MdKeyboardArrowDown} from 'react-icons/md';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile} from '.';
import { useGlobalContext } from '../context/context';


const NavButton=({title, customFun, dotColor, color, icon})=>{
 return <TooltipComponent content={title} position='Bottom'>
    <button type='button' className='text-xs rounded-full p-2 ml-1.5 hover:bg-light-gray' style={{color}} onClick={customFun}>
      <span className=' inline-flex rounded-full h-2 w-2 right-2 top-2' style={{background: dotColor}}></span>
        {icon}
    </button>
  </TooltipComponent>
}

export default function Navbar() {
  const{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, reSize, setResize} =useGlobalContext()

  useEffect(()=>{
      const handleResize=()=> setResize(window.innerWidth)
      window.addEventListener( 'resize', handleResize)
      handleResize();
      return ()=>window.removeEventListener('resize', handleResize)

  },[])

  useEffect(()=>{
    if (reSize<=900) {
      setActiveMenu(false)
    }
},[reSize])

  return (
    <div className='flex justify-between md:mx-6 p-1 pt-1'>
        <NavButton title={'Menu'} customFun={()=>setActiveMenu((pre)=>!pre)} color='blue' icon={<AiOutlineMenu/>}/>
      <div className='flex'>
        <NavButton title={'Cart'} customFun={()=>handleClick('cart')} color='blue' icon={<FiShoppingCart/>}/>
        <NavButton title={'Chat'} customFun={()=>handleClick('chat')} color='blue' dotColor='#03c9d7' icon={<BsChatLeft/>}/>
        <NavButton title={'Notification'} customFun={()=>handleClick('notification')} color='blue' dotColor='#03c9d7' icon={<RiNotification3Line/>}/>
        <TooltipComponent content='Profile' position='BottomCenter'>
          <div className='flex items-center rounded-lg cursor-pointer p-1.5 gap-2 hover:bg-light-gray' onClick={()=>handleClick('userProfile')}>
            <img src={avatar} alt="profile" className='h-8 w-8 rounded-full ' />
            <p>
              <span className='text-gray-400 text-14'>Hi,</span> <span className='text-gray-400 font-bold ml-1 text-14'>Michael <span><MdKeyboardArrowDown/></span> </span> 
            </p>
          </div>
        </TooltipComponent>
        {isClicked.chat&& <Chat/>}
        {isClicked.cart&& <Cart/>}
        {isClicked.notification&& <Notification/>}
        {isClicked.userProfile&& <UserProfile/>}
      </div>
    </div>
  )
}
