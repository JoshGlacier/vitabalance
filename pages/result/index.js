import React from 'react'
import MyCard from "../../comps/card"
import CustomButton from "../../comps/button"
import Header from "../../comps/header"
import Slider from "../../comps/slider"
import Card from "../../comps/card"
import './result.css'
import Router from "next/router";

import {data, changeData} from "../../comps/data.js";
console.log(data);


// if(process.browser){
//     loadResult();
// }

const ResultPage = () => { 
    //loadResult();
    var resulttext = "";
    var descriptiontext = "";
    if(data.sleep >= 7 && data.social >= 4 && data.social <= 6 && data.work >= 4 && data.work <= 6){
        resulttext = "Congrats! You are living a balanced life!"
        descriptiontext = "";
    }  else {
        resulttext = "Oh No! Your life is not balanced!"
        descriptiontext = "WHY? You're not getting enough sleep because you might be spending too much time working or socializing!"
    }

    // if(data.social === 4){
    //     resulttext = "result is 4"
    // } 

    // if(data.work === 8){
    //     resulttext = "result is 8"
    // } 

    function ClickIndexInfo(){
        Router.push("/resultinfo");
    }

    function ClickIndexHome(){
        Router.push("/home");
    }
    


    return <div className="page">
        <Header />
        <div className="mainCard">
            <h1 className="heading">{resulttext}</h1>
            <h1 className="description">{descriptiontext}</h1>
            <br/><br/> <br/><br/>
            <div className="info">
                <p>Click the INFO button for information to help keep and balance your life!</p>
            <CustomButton text = "Info" className="infoButton" onClick = {ClickIndexInfo}/>
            </div>
        {/* <Card></Card> */}
        <CustomButton text = "Return to Home" onClick = {ClickIndexHome}/>
        </div>
    </div>



    // function loadResult(){
    //     if(data.sleep >= 4){
    //         document.querySelector("#result").innerHTML = "It works!";
    //     } else {
    //         document.querySelector("#result").innerHTML = "It doesn't work";
    //     }
    // }
}

// function loadResult(){
//     if(data.sleep >= 4){
//         document.querySelector("#result").innerHTML = "It works!";
//     } else {
//         document.querySelector("#result").innerHTML = "It doesn't work";
//     }
// }

export default ResultPage;