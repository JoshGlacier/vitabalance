import React from 'react'
import MyCard from "../../comps/card"
import CustomButton from "../../comps/button"
import Header from "../../comps/header"
import Slider from "../../comps/slider"
import Card from "../../comps/card"
import Router from "next/router";
import Social1 from '../../comps/card/Images/Social _01.svg';

function ClickIndex(){
    Router.push("/Home");
}

const SocialInfo = ({}) => { 
    return <div className="custom">
 <Header />
<img class = "images" src = {Social1}></img>
<Slider />
<div onClick={ClickIndex} page = "/work">
<CustomButton OnClick = {ClickIndex} text = "Return to Homescreen"></CustomButton>
</div>
</div>
}

 
export default SocialInfo;