import React from 'react'
import "./Dashboard.css"
import { Rewards } from '../../dashboardComponents/Rewards'
import { ReferralLink } from '../../dashboardComponents/ReferralLink'
import { AccountBalanceWalletOutlined,Close} from "@mui/icons-material"
import { Table } from '../../dashboardComponents/Table'
import { useState } from 'react'

export const Dashboard = () => {
  const [show,setShow]= useState(true);
  const removeAdd =()=>{
    setShow(! show)
  }

  return (
    <>
    <div className='dashboard'>
      <div className="dashboardTop">
        <div className="dashboardSection">
          Section
        </div>
        <div className="dashboardTopRightBox">
          <span className="dashboardTopRightBoxLogo"><AccountBalanceWalletOutlined/></span>
          <span className="dashboardTopRightBoxText">0.2 $XYZ</span>
          <button className="tierBox">
            <span className="tierBoxText">Tier 1</span>
          </button>
        </div>
      </div>
      {
        show &&
        <div className="dashboarAddDiv">
        <div className="addDiv">
          <div className="addTextAndButtonDiv">
            <div className="addText">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            <button className="tutorialBtnDiv">Tutorial</button>
          </div>
          <div className="addImgDiv"> <img src="img.jpg" className="addImgDiv" alt="" /> </div>
        </div>
        <button className="addRemoveDiv" onClick={removeAdd}><Close/></button>
      </div>
      }
      {/* <div className="dashboardAdd">
        <div className="dashBoardAddTextDiv">
          
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
      
          <button className="tutorialButtonDiv">
             Tutorial 
          </button >
        </div>
        <div className="addImgDiv">
          <img src="../../img.jpg" alt="" />
          
        </div>
     <button className="addRemove"><Close/></button> 
      </div> */}
        <Rewards/>
        <ReferralLink/>
        <Table/>

    </div>
    </>
  )
}
