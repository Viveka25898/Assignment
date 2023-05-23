import React from 'react'
import "./ReferralLink.css"
import {ShoppingBag, ContentCopyRounded} from "@mui/icons-material"
export const ReferralLink = () => {
  return (
    <div className='referralLinkDiv' >
        <div className="referralLinkLeftDiv">
            <div className="percentageFeeDiv">
                <span className="feeLogo"><ShoppingBag/></span>
                <span className="feeText">12.5% of fee</span>
            </div>
            <div className="referralLinkHeading">
                Your Referral Link for XYZ
            </div>
            <div className="referralLinkBox">
                <span className="referralLink">https://unityexchange.design</span>
                <span className="referralLinkIcon"><ContentCopyRounded/></span>
            </div>

        </div>
        <div className="referralLinkRightDiv">
        <div className="percentageFeeDiv">
                <span className="feeLogo"><ShoppingBag/></span>
                <span className="feeText">12.5% of fee</span>
            </div>
            <div className="referralLinkHeading">
                Your Referral Link for XYZ
            </div>
            <div className="referralLinkBox">
                <span className="referralLink">https://unityexchange.design</span>
                <span className="referralLinkIcon"><ContentCopyRounded/></span>
            </div>
            
        </div>
    </div>
  )
}
