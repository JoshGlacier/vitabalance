import React from 'react'
import MyCard from "../../comps/card"
import CustomButton from "../../comps/button"
import Header from "../../comps/header"
import Slider from "../../comps/slider"
import Card from "../../comps/card"
import Router from "next/router";
import "./home.css"

/*

IMPORTANT! THE INFO ON THIS PAGE IS
JUST FOR REFERENCE ONLY. IF YOU WANT
TO EDIT THE ACTUAL HOMEPAGE, PLEASE
EDIT THE INDEX.JS PAGE IN THE PAGES 
FOLDER

*/







function ClickIndex(){
    document.querySelector("#mainapp").style.opacity = 0;
    setTimeout(function(){
    Router.push("/sleep");
    }, 1000)
}

const HomePage = ({}) => { 
    return <div id= "mainapp" className="custom">
        <Header />
        <video className= "videocss" src = {require("../../Vitabalance.mp4")} controls/> 
<div onClick={ClickIndex}  page = "/work">
<CustomButton OnClick = {ClickIndex} text = "Get Started"></CustomButton>
</div>
</div>
}

 
export default HomePage;