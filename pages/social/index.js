import React from 'react'
import MyCard from "../../comps/card"
import CustomButton from "../../comps/button"
import Header from "../../comps/header"
import Slider from "../../comps/slider"
import Card from "../../comps/card"
import Router from "next/router";

function ClickIndex(){
    Router.push("/work");
}

const SocialPage = ({}) => { 
    return <div className="custom">
        
<Card></Card>
<div onClick={ClickIndex} page = "/work">
<CustomButton OnClick = {ClickIndex}></CustomButton>
</div>
</div>
}

 
export default SocialPage;