import React from 'react'
import MyCard from "../../comps/card"
import CustomButton from "../../comps/button"
import Header from "../../comps/header"
import Slider from "../../comps/slider"
import Card from "../../comps/card"
import './resultinfo.css'
import Sleep1 from '../../comps/card/Images/Sleep_1.svg';
import Social1 from '../../comps/card/Images/Social _01.svg';
import Work1 from '../../comps/card/Images/Work_1.svg';
import { Button } from 'reactstrap'
import Router from "next/router";

function ClickIndexSleep(){
    Router.push("/sleepinfo");
}

function ClickIndexSocial(){
    Router.push("/socialinfo");
}

function ClickIndexWork(){
    Router.push("/workinfo");
}

const ResultInfoPage = ({}) => { 
    return <div className="">
    <Header />
<p className="infoheader">Information</p>
   
    <div className = "main">
<div className ="sleepbox">
    <div className="imagediv">
    <img className= "sleepimage" src = {Sleep1}></img>
     </div>
            <div className="InfoTextDiv">
                <p className = "HeadlineText">
                    Get a minimum of 8 hours of sleep to feel more energized.
                </p>
                <CustomButton text = "Sleep Tips" onClick={ClickIndexSleep}></CustomButton>
            </div>
</div>

<div className ="sleepbox">
    <div className="imagediv">
    <img className= "sleepimage" src = {Social1}></img>
     </div>
            <div className="InfoTextDiv">
                <p className = "HeadlineText">
                    Not socializing enough is a major factor to adding extraneous stress! Who needs that?
                </p>
                <CustomButton text = "Social Tips" onClick={ClickIndexSocial}></CustomButton>
            </div>
</div>

<div className ="sleepbox">
    <div className="imagediv">
    <img className= "sleepimage" src = {Work1}></img>
     </div>
            <div className="InfoTextDiv">
                <p className = "HeadlineText">
                    Remember to take breaks when working otherwise you will feel burned out!
                </p>
                <CustomButton text = "Work Tips" onClick={ClickIndexWork}></CustomButton>
            </div>
</div>





    </div>
    </div>
}
export default ResultInfoPage;