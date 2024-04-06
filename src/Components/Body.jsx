import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { useSelector } from 'react-redux'
import {Outlet} from 'react-router-dom';

const Body = () => {
  const sts= useSelector((store)=>store.app.isOpen)
  console.log(sts)
  return (
    <div className='flex gap-3'>
      {sts? <><div><Sidebar/></div></>: null}
      {/* {sts? <><div className='ml-[150px]'><MainContainer/></div></>: <MainContainer/>} */}
      <Outlet/>
      
    </div>
  )
}

export default Body