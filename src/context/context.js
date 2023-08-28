import React, { useContext,useState,} from 'react';

const MyContext = React.createContext();

const initialValues={
    chat:false,
    cart:false,
    userProfile:false,
    notification: false,
}

export const ContextProvider=({children})=>{
    const [activeMenu, setActiveMenu]=useState(true);
    const [ isClicked, setIsClicked]=useState(initialValues);
    const[ reSize, setResize] =useState(undefined);

    const handleClick=(clicked)=>{
        setIsClicked({...initialValues, [clicked]:true})
    }
    return<MyContext.Provider value={{activeMenu,setActiveMenu, isClicked, setIsClicked,handleClick, reSize, setResize}}>
        {children}
    </MyContext.Provider>
}

export const useGlobalContext=()=>useContext(MyContext);
