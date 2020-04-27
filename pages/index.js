import React from 'react'
import MyCard from "../comps/card"
import CustomButton from "../comps/button"
import Header from "../comps/header"
import Slider from "../comps/slider"
import Card from "../comps/card"
import Router from "next/router";


function ClickIndex(){
    Router.push("/sleep");
}


const HomePage = ({}) => { 
    return <div className="custom">
        
        <Header />
        <video src = {require("../Vitabalance.mp4")} controls/> 
<div onClick={ClickIndex}  page = "/work">
<CustomButton OnClick = {ClickIndex} text = "Get Started"></CustomButton>
</div>
</div>
}

 
export default HomePage;