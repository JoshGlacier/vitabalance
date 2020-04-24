import React from 'react';
import MyCard from "../../comps/card";
import CustomButton from "../../comps/button";
import Header from "../../comps/header";
import Slider from "../../comps/slider";
import Card from "../../comps/card";
import Link from 'next/link';
import Router from "next/router";

/*function ClickIndex(){
    document.querySelector(".custom").style.right = "-100%";
    setTimeout(function() {
        Router.push("/social");
    }, 1000)
    }
*/

function ClickIndex(){
    Router.push("/social");
}


const SleepPage = ({}) => { 
    return <div className="custom">
        
<Card></Card>
<div onClick={ClickIndex} page = "/social">
<CustomButton page = "/social" OnClick = {ClickIndex}></CustomButton>
</div>
</div>
}




export default SleepPage;