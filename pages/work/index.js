import React from 'react'
import MyCard from "../../comps/card"
import CustomButton from "../../comps/button"
import Header from "../../comps/header"
import Slider from "../../comps/slider"
import Card from "../../comps/card"
import Router from "next/router";
import Work1 from '../../comps/card/Images/Work_1.svg';
import Work2 from '../../comps/card/Images/Work_2.svg';
import Work3 from '../../comps/card/Images/Work_3.svg';

import {data, changeData} from "../../comps/data.js";
console.log(data);


function ClickIndex(){
    Router.push("/result");
    changeData({
        sleep:data.sleep,
        social:data.social,
        work:parseInt(document.querySelector("#slider").value)
    })
    console.log("work", data);
}

const WorkPage = ({}) => { 
    return <div className="custom">
        
        <Header />
        <p class="question">How many hours did you spend working yesterday?</p>
        <div className="imgContainer"><center>
        <img className="images" src={Work1} id="work1"></img>
        <img className="images" src={Work2} id="work2"></img>
        <img className="images" src={Work3} id="work3"></img>
        </center></div>

<Slider onChange={workResult}/>
<div onClick={ClickIndex} page = "/work">
<CustomButton OnClick = {ClickIndex}></CustomButton>
</div>
</div>
}

function workResult() {
    console.log(document.querySelector("#slider").value);
   if(parseInt(document.querySelector("#slider").value) <= 3){
       document.querySelector("#work1").style = 'display: block';
       document.querySelector("#work2").style = 'display: none';
       document.querySelector("#work3").style = 'display: none';
    } else if (parseInt(document.querySelector("#slider").value) >= 7){
        document.querySelector("#work1").style = 'display: none';
        document.querySelector("#work2").style = 'display: none';
        document.querySelector("#work3").style = 'display: block';
     } else if (parseInt(document.querySelector("#slider").value) >= 4 || parseInt(document.querySelector("#slider").value) <= 6){
       document.querySelector("#work1").style = 'display: none';
       document.querySelector("#work2").style = 'display: block';
       document.querySelector("#work3").style = 'display: none';
     }
}

export default WorkPage;