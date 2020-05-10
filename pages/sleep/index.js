import React from 'react';
import MyCard from "../../comps/card";
import CustomButton from "../../comps/button";
import Header from "../../comps/header";
import Slider from "../../comps/slider";
import Card from "../../comps/card";
import Link from 'next/link';
import Router from "next/router";
import Sleep1 from '../../comps/card/Images/Sleep_1.svg';
import Sleep2 from '../../comps/card/Images/Sleep_2.svg';
import Sleep3 from '../../comps/card/Images/Sleep_3.svg';
import './sleep.css'

import {data, changeData} from "../../comps/data.js";
console.log(data);


/*function ClickIndex(){
    document.querySelector(".custom").style.right = "-100%";
    setTimeout(function() {
        Router.push("/social");
    }, 1000)
    }
*/

function ClickIndex(){
    document.querySelector("#mainapp").style.opacity = 0;
    setTimeout(function(){
    Router.push("/social");
    }, 1000)
    changeData({
        sleep:parseInt(document.querySelector("#slider").value),
        social:data.social,
        work:data.work
    })
    console.log("sleep", data);
}


const SleepPage = ({}) => { 
    return <div id = "mainapp" className="custom">
    <Header />
    <p class="question">How many hours of sleep did you get last night?</p>
    <div className="imgContainer"><center>
        <img className="images" src={Sleep1} id="sleep1"></img>
        <img className="images" src={Sleep2} id="sleep2"></img>
        <img className="images" src={Sleep3} id="sleep3"></img>
        </center>
        </div>

<Slider onChange={sleepResult}/>

<div onClick={ClickIndex} page = "/social">
<CustomButton page = "/social" OnClick = {ClickIndex}></CustomButton>
</div>
</div>
}

function sleepResult() {
    console.log(document.querySelector("#slider").value);
   if(parseInt(document.querySelector("#slider").value) <= 3){
       document.querySelector("#sleep1").style = 'display: none';
       document.querySelector("#sleep2").style = 'display: none';
       document.querySelector("#sleep3").style = 'display: block';
    } else if (parseInt(document.querySelector("#slider").value) >= 7){
        document.querySelector("#sleep1").style = 'display: block';
        document.querySelector("#sleep2").style = 'display: none';
        document.querySelector("#sleep3").style = 'display: none';
     } else if (parseInt(document.querySelector("#slider").value) >= 4 || parseInt(document.querySelector("#slider").value) <= 6){
       document.querySelector("#sleep1").style = 'display: none';
       document.querySelector("#sleep2").style = 'display: block';
       document.querySelector("#sleep3").style = 'display: none';
     }
}


export default SleepPage;