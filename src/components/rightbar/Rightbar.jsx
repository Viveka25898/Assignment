import React from 'react'
import "./Rightbar.css"
import { KeyboardBackspace, OpenInNew, ExitToApp, AccountBalanceWalletOutlined } from "@mui/icons-material"

export const Rightbar = () => {
  return (
    <div className='rightBar'>
      <div className="rightBarTopBoxes">
        <div className="rightBarTopLeftBox">
          <span className="rightBarTopLeftBoxIcon"></span>
          <select name="" id="" className="avalanche">
            <option value="" className='avalancheOptions' >Avalanche</option>
          </select>
        </div>
        <div className="rightBarTopRightBox">
          {/* <span className="rightBarTopRightBoxIcon"><AccountBalanceWalletOutlined className='muiIcon' /></span> */}
          <select className="rightBarTopRightBoxAccount">
            <option value="" className='accountOptions'>0XF6...1353</option>
          </select>
        </div>
      </div>
      <div className="rightBarCustomLinkBox">
        <div className="customLinkHeading">
          <span className="arrowLeft"><KeyboardBackspace /></span>
          <span className="rightBarcustomLinkText">Custom Link</span>
        </div>
        <div className="rightBarCustomLink">
          <span className="url">https://testnet.xyz.xyz/trade?ref=</span>
        </div>
        <div className="div">

          <input type='text' placeholder='ENTER' className="rightBarInputBox">
          </input>
        </div>
        <div className="rightBarBottom">
          <button className="customLinkBox">
            <span className="customIcon"><OpenInNew style={{fontSize:"20"}}/></span>
            <span className="customLink">Custom link</span>

          </button>
          <button className="cancelBox">
            <span className="cancelIcon"><ExitToApp /></span>
            <span className="cancelText">Cancel</span>
          </button>
        </div>
      </div>
    </div>
  )
}
