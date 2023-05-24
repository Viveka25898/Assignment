import React from 'react'
import "./Table.css"
import { CurrencyBitcoin, OpenInNew } from "@mui/icons-material"
import { useState, useEffect } from 'react';
import axios from "axios"

export const Table = () => {
    const [tableData, setTablData] = useState([]);
    useEffect(() => {

        fetch("https://raw.githubusercontent.com/akshita151199/APIs/main/data").then((res) => res.json())
            .then((theData) => {
                console.log(theData.data)
                setTablData(theData.data)
            });
    }, [])
    //     useEffect(()=>{
    // axios.get("https://raw.githubusercontent.com/akshita151199/APIs/main/data").then((res)=>
    // setTablData(res.data)  )
    //     },[])
    // const getApiData= async () =>{
    //     try{

    //         const res= await axios.get("https://raw.githubusercontent.com/akshita151199/APIs/main/data")
    //         setTablData(res.data);
    //     }catch(error){
    // console.log(error);
    //     }
    //     }

    // useEffect(()=>{
    //     getApiData();
    // })

    return (
        <div className='table'>
            <div className="tableTabHeadings">
                <span className="firstTabHeading">First Tab</span>
                <span className="secondTabHeading">Second Tab</span>
            </div>
            <div className="tableHadingsDiv">
                <span className="assetHeading">ASSET</span>
                <span className="amountHeading">AMMOUNT</span>
                <span className="userAccountHeading">USER ACCOUNT</span>

                <span className="referralEarningHeading">REFERRAL EARNING</span>
            </div>
            {
                tableData.map((value, index) => {
                    return (
                        <div className="tableDataDiv" key={index}>
                            <div className="assetDataDiv">
                                <div className="assetDataDivImg"> <img src={value.img} className='bitcoinImg' alt="" /> </div>
                                <div className="assetDataDivData">
                                    <div className="bitcoinName">{value.asset}</div>
                                    <div className="putDiv">
                                        <span className="put">{value.type}</span>


                                        <div className="avaxDiv">
                                            <span className="avaxImg"><img src={value.chain.img} alt="" /></span>
                                            <span className="avaxText">{value.chain.name}</span>
                                        </div>


                                    </div>
                                </div>

                            </div>
                            <div className="ammountDataDiv">
                                <div className="ammountData">{value.amount}</div>
                                <div className="ammountExpired">{value.state}</div>
                            </div>
                            <div className="userAccountDiv"  >{value.user}</div>
                            <div className="referralEarningDiv">
                                <div className="bnb">{value.referral_earnings}</div>
                                <div className="viewOnBsc">View on BSC Scan <OpenInNew className='referralIcon'
                                    style={{ fontSize: "15" }} /></div>

                            </div>
                        </div>

                    )
                })
            }
            {/* <div className="tableDataDiv">
                <div className="assetDataDiv">
                    <div className="assetDataDivImg"> <img src="bitcoinImg.png" className='bitcoinImg' alt="" /> </div>
                    <div className="assetDataDivData">
                        <div className="bitcoinName">Bitcoin</div>
                        <div className="putDiv">
                            <span className="put">Put</span>
                            <div className="avaxDiv">
                                <span className="avaxImg"></span>
                                <span className="avaxText">AVAX</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="ammountDataDiv">
                    <div className="ammountData">0.0000 BNB</div>
                    <div className="ammountExpired">Expired</div>
                </div>
                <div className="userAccountDiv">0xFbE..0f58A7D</div>
                <div className="referralEarningDiv">
                    <div className="bnb">0.0000.BNB</div>
                    <div className="viewOnBsc">View on BSC Scan <OpenInNew className='referralIcon'
                        style={{ fontSize: "15" }} /></div>

                </div>
            </div> */}


        </div>

    )
}
