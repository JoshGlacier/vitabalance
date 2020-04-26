import React from 'react'
import MyCard from "../../comps/card"
import CustomButton from "../../comps/button"
import Header from "../../comps/header"
import Slider from "../../comps/slider"
import Card from "../../comps/card"
import Router from "next/router";
import Work1 from '../../comps/card/Images/Work_1.svg';

function ClickIndex(){
    Router.push("/result");
}

const WorkPage = ({}) => { 
    return <div className="custom">
        
        <Header />
<img class = "images" src = {Work1}></img>
<Slider />
<div onClick={ClickIndex} page = "/work">
<CustomButton OnClick = {ClickIndex}></CustomButton>
</div>
</div>
}

export default WorkPage;