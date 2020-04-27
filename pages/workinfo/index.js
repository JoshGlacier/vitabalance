import React from 'react'
import MyCard from "../../comps/card"
import CustomButton from "../../comps/button"
import Header from "../../comps/header"
import Slider from "../../comps/slider"
import Card from "../../comps/card"
import Router from "next/router";
import Work1 from '../../comps/card/Images/Work_1.svg';
import './workinfo.css'

function ClickIndex(){
    Router.push("/Home");
}

const WorkInfo = ({}) => { 
    return <div className="custom">
 <Header />
 <h1 class = "infoheader">How to be more Productive</h1>
<p className="GeneralInfo"> 
        1. Make a reasonable to-do list. Don't overwhelm yourself.
        <br></br>
        2. Set small goals for the tasks.
        <br></br>
        3. Focus on one goal at a time.
        <br></br>
        4. Track your time to identify patterns.
        <br></br>
        5. Find a method for delegating and following-up.
        <br></br>
        6. Create a proactive dashboard.
        <br></br>
        7. Figure out your 2 peak hours.
        <br></br>
        8. Pick one task and then do it.
        </p>
<div onClick={ClickIndex} page = "/sleep">
<CustomButton OnClick = {ClickIndex} text = "Return to Homescreen"></CustomButton>
</div>
</div>
}

export default WorkInfo;