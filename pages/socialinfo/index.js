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

 <h1 class = "infoheader">Social Activity: Take The First Step Yourself</h1>
 <div className="customdiv">
<p className="GeneralInfo"> 
If you are one of those people who always wait for someone to initiate a conversation, then it is high time you quit the habit and initiated a tête-à-tête yourself. You will be surprised to see the response this change in approach will bring. The number of acquaintances you will make in this way will, by far, outstrip the number that you would have made if you had waited for people to come and approach you. Let’s face it, not everybody has the time to come around talking to all the people that they meet. So, to make sure you do not miss out on the opportunities to meet new people, take matters in your own hands. Not only will this send out a very receptive image of yourself, you might also find a few people with similar interests whom you would otherwise have missed if you had waited for them to come and talk to you.</p>
<img className = "imagesocial" src = {Social1}></img>
<p className ="GeneralInfo"> 
Socializing with people is an easy yet intricate affair. It is a lot like walking in to a strange room and trying out the electrical switches. Some will help you with what you want, while others will be as useless as anything else. There is no harm in trying them out, but they will not bring the desired results. But such an experience surely will help you. The next time you walk in to that same room, you will know which switches to press for what you require. The same is the case with socializing. Go out, meet people and learn from them. Learn from the experience and based on them try to improve yourself.

While there are surely more ways to socialize, the bases for all of those methods lie in these few intricacies. Get them right and you are on your way to mingle like never before.</p>


</div>
<div onClick={ClickIndex} page = "/work">
<CustomButton OnClick = {ClickIndex} text = "Return to Homescreen"></CustomButton>
</div>
</div>
}

 
export default SocialInfo;