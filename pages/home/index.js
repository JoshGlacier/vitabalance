import React from 'react'
import MyCard from "../../comps/card"
import CustomButton from "../../comps/button"
import Header from "../../comps/header"
import Slider from "../../comps/slider"
import Card from "../../comps/card"
import Router from "next/router";

/*

IMPORTANT! THE INFO ON THIS PAGE IS
JUST FOR REFERENCE ONLY. IF YOU WANT
TO EDIT THE ACTUAL HOMEPAGE, PLEASE
EDIT THE INDEX.JS PAGE IN THE PAGES 
FOLDER

*/







function ClickIndex(){
    Router.push("/sleep");
}
 


const HomePage = ({}) => { 
    return <div className="custom">
        
<Card></Card>
<div onClick={ClickIndex} page = "/social">
<CustomButton page = "/social" OnClick = {ClickIndex}></CustomButton>
</div>
</div>
}





export default HomePage;