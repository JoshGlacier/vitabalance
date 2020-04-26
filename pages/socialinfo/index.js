import React from 'react'
import MyCard from "../../comps/card"
import CustomButton from "../../comps/button"
import Header from "../../comps/header"
import Slider from "../../comps/slider"
import Card from "../../comps/card"
import Router from "next/router";
import Social1 from '../../comps/card/Images/Social _01.svg';
import './socialinfo.css'

function ClickIndex(){
    Router.push("/Home");
}

const SocialInfo = ({}) => { 
    return <div className="custom">
 <Header />
 <h1 class = "infoheader">How to be more Socially Active</h1>
<p className="GeneralInfo"> Initiate — Take The First Step Yourself
If you are one of those people who always wait for someone to initiate a conversation, then it is high time you quit the habit and initiated a tête-à-tête yourself. You will be surprised to see the response this change in approach will bring. The number of acquaintances you will make in this way will, by far, outstrip the number that you would have made if you had waited for people to come and approach you. Let’s face it, not everybody has the time to come around talking to all the people that they meet. So, to make sure you do not miss out on the opportunities to meet new people, take matters in your own hands. Not only will this send out a very receptive image of yourself, you might also find a few people with similar interests whom you would otherwise have missed if you had waited for them to come and talk to you.</p>
<div onClick={ClickIndex} page = "/work">
<CustomButton OnClick = {ClickIndex} text = "Return to Homescreen"></CustomButton>
</div>
</div>
}

 
export default SocialInfo;