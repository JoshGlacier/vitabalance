import React from 'react'
import MyCard from "../../comps/card"
import CustomButton from "../../comps/button"
import Header from "../../comps/header"
import Slider from "../../comps/slider"
import Card from "../../comps/card"
import Router from "next/router";
import Social1 from '../../comps/card/Images/Social _01.svg';
import Social2 from '../../comps/card/Images/Social _02.svg';
import Social3 from '../../comps/card/Images/Social _03.svg';

import {data, changeData} from "../../comps/data.js";
console.log(data);


function ClickIndex(){
    Router.push("/work");
    changeData({
        sleep:data.sleep,
        social:parseInt(document.querySelector("#slider").value),
        work:data.work
    })
    console.log("social", data);
}

const SocialPage = ({}) => { 
    return <div className="custom">
        
        <Header />
        <p class="question">How many hours did you spend socializing yesterday?</p>
        <div className="imgContainer"><center>
        <img className="images" src={Social1} id="social1"></img>
        <img className="images" src={Social2} id="social2"></img>
        <img className="images" src={Social3} id="social3"></img>
        </center></div>

<Slider onChange={socialResult}/>
<div onClick={ClickIndex} page = "/work">
<CustomButton OnClick = {ClickIndex}></CustomButton>
</div>
</div>
}
function socialResult() {
    console.log(document.querySelector("#slider").value);
   if(parseInt(document.querySelector("#slider").value) <= 3){
       document.querySelector("#social1").style = 'display: none';
       document.querySelector("#social2").style = 'display: none';
       document.querySelector("#social3").style = 'display: block';
    } else if (parseInt(document.querySelector("#slider").value) >= 7){
        document.querySelector("#social1").style = 'display: block';
        document.querySelector("#social2").style = 'display: none';
        document.querySelector("#social3").style = 'display: none';
     } else if (parseInt(document.querySelector("#slider").value) >= 4 || parseInt(document.querySelector("#slider").value) <= 6){
       document.querySelector("#social1").style = 'display: none';
       document.querySelector("#social2").style = 'display: block';
       document.querySelector("#social3").style = 'display: none';
     }
}

 
export default SocialPage;