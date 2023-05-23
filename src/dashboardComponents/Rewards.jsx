import React from 'react'
import "./Rewards.css"
import { OpenInNew} from "@mui/icons-material"


export const Rewards = () => {
  return (
    <div className="rewardsDiv">
        <div className="rewardsDivLeft">
          <div className="yourRewardsText">
            Your rewards
          </div>
          <div className="rewardsValue">$ 0.26231428</div>
          <div className="rewardBottom">

          <div className="rewardValueBottomOne">
            <span className="avaxRewardDiv">$40 AVAX</span>
          </div>
          <div className="rewardValueBottomTwo">
            <span className="bnbDiv">$10 BNB</span>
          </div>
          <div className="rewardValueBottomThree">
            <span className="btcDiv">$210 BTC</span>
          </div>
          </div>

        </div>
        <div className="customLinkButtonDiv">
         <button className="dashboardCustomLinkButton">
            <span className="customLinkLogo"><OpenInNew style={{fontSize:"20"}}/></span>
            <span className="customLinkText">Custom link</span>
         </button>
        </div>
      </div>
  )
}
