import React from 'react'
import"./Home.css"
import { Topbar } from '../components/topbar/Topbar'
import { Rightbar } from '../components/rightbar/Rightbar'
import { Dashboard } from '../components/dashboard/Dashboard'
import { Sidebar } from '../components/sidebar/Sidebar'


export default function Home() {
  return (
   <>
   <Topbar/>
   <div className="homeContainer">

   <Sidebar/>
   <Dashboard/>
   <Rightbar/>
   </div>
   </>
  )
}
