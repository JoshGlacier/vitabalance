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
    <Header />
        <img className="images" src={Sleep1} id="sleep1"></img>
        <img className="images" src={Sleep2} id="sleep2"></img>
        <img className="images" src={Sleep3} id="sleep3"></img>

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

// Do we need 3 variabes? One for each page to calculate at the end?
// New tutorial shows how to save data - Watch


export default SleepPage;