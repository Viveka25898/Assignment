import React from 'react'
import "./Sidebar.css"
import {
  WindowOutlined, ArticleOutlined, Share, SignalCellularAltOutlined, CurrencyExchange, Language,
  DarkMode, KeyboardBackspace
} from "@mui/icons-material"
export const Sidebar = () => {
  return (
    <div className='sideBar'>
      <div className="sideBarWrapper">
        <div className="sideBarTop">
          <div className="sideBarTopLogo">N</div>
          <div className="sideBarTopName">Name</div>
          <div className="sideBarTopArrow"><KeyboardBackspace /></div>
        </div>
        <div className="sideBarList">
          <div className="sideBarListItemHome">
            <span className="sideBarHomeIcon"><WindowOutlined/></span>
            <span className="sideBarHomeText">Home</span>
          </div>
          <div className="sideBarListItemSectionOne">
            <WindowOutlined className="sideBarSectionOneIcon" />
            <span className="sideBarSectionOneText">Section 1</span>
          </div>
          <div className="sideBarListItemSectionTwo">
            <WindowOutlined className="sideBarSectionTwoIcon" />
            <span className="sideBarSectionTwoText">Section 2</span>
          </div>
          <div className="sideBarListItemSectionThree">
            <WindowOutlined className="sideBarSectionThreeIcon" />
            <span className="sideBarSectionThreeText">Section 3</span>
          </div>
          <div className="sideBarListItemSectionFour">
            <CurrencyExchange className="sideBarSectionFourIcon" />
            <span className="sideBarSectionFourText">Section 4</span>
          </div>
          <div className="sideBarListItemSectionFive">
            <WindowOutlined className="sideBarSectionFiveIcon" />
            <span className="sideBarSectionFiveText">Section</span>
          </div>
          <div className="sideBarListItemSectionSix">
            <WindowOutlined className="sideBarSectionSixIcon" />
            <span className="sideBarSectionSixText">Section 6</span>
          </div><div className="sideBarListItemSectionSeven">
            <SignalCellularAltOutlined className="sideBarSectionSevenIcon" />
            <span className="sideBarSectionSevenText">Section 7</span>
          </div>
          <div className="sideBarListItemSectionEight">
            <Share className="sideBarSectionEightIcon" />
            <span className="sideBarSectionEightText">Section 8</span>
          </div>
          <div className="Documentation">
            <ArticleOutlined className="sideBarDocumentationIcon" />
            <span className="sideBarDocumentationText">Documentation</span>
          </div>
        </div>
        {/* <div className="sideBarBottom">
          <span className="sideBarBottomLeft">
            <div className="sideBarBottomLeftText">
              <span className="bottomLeftText">
                $0.90
              </span>
            </div>
          </span>
          <span className="sideBarBottomRight">
            <div className="sideBarBottomRightText">

              Buy $XYZ
            </div>
          </span>


        </div> */}
        {/* <div className="bottomLeftLogo">
          <Language className='languageLogo' />

          <span className="bottomRightLogo">

            <div className="bottomRightDarkMode">
              <DarkMode className='languageLogo' />
            </div>
          </span>
        </div> */}
        <div className="sidebarBottom">
          <button className="sidebarBottomLeftBox">
          <span className="sidebarBottomLeftLogo">N</span>
          <span className="sidebarBottomLeftBoxText">$0.90</span>
          </button>
          <button className="sidebarBottomRightBox">
            <span className="sidebarBottomRightBoxText">Buy $XYZ</span>
            
          </button>
        </div>
        <div className="sidebarLastBox">
          <sapn className="earthLogo"><Language/></sapn>
          <div className="darkNightModeDiv">
            <span className="nightLogo"><DarkMode/></span>
            <span className="dayLogo"></span>
          </div>
        </div>
      </div>
      Sidebar
    </div>
  )
}
