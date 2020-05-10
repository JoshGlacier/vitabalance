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
import './socialinfo.css'
import BackButton from '../../comps/BackButton'

function ClickIndexBack(){
    document.querySelector("#mainapp").style.opacity = 0;
    setTimeout(function(){
    Router.push("/resultinfo");
    }, 1000)
}


function ClickIndexSocial(){
    document.querySelector("#mainapp").style.opacity = 0;
    setTimeout(function(){
    Router.push("/home");
    }, 1000)
}

const SocialInfo = ({}) => { 
    return <div id= "mainapp" className="custom">
 <Header />
 <BackButton onClick={ClickIndexBack} text="&laquo;&nbsp;Back"></BackButton>

 <p class="socialHeader">How to be more social</p>

<span className="imagesContainer">
<img className="socialImg" src={Social3}></img>
<img className="socialImg" src={Social2}></img>
<img className="socialImg" src={Social1}></img>
</span>

<div className="customdiv">

   <dl className="GeneralInfo">
   <dt>1. Initiate — Take The First Step Yourself.</dt>
       {/* <dd>Daily sunlight or artificial bright light can improve sleep quality and duration, especially if you have severe sleep issues or insomnia.</dd> */}
   <dt>2. Non-Verbal Communication As Important As Verbal One.</dt>
       {/* <dd>Blue light tricks your body into thinking it’s daytime. There are several ways you can reduce blue light exposure in the evening.</dd> */}
   <dt>3. While In A Conversation, Listen.</dt>
       {/* <dd>Caffeine can significantly worsen sleep quality, especially if you drink large amounts in the late afternoon or evening.</dd> */}
   <dt>4. Try To Search Out Common Interests.</dt>
       {/* <dd>Long daytime naps may impair sleep quality. If you have trouble sleeping at night, stop napping or shorten your naps.</dd> */}
   <dt>5. Concentrate On The Person.</dt>
       {/* <dd>Try to get into a regular sleep/wake cycle — especially on the weekends. If possible, try to wake up naturally at a similar time every day.</dd> */}
   <dt>6. Be Comfortable With Yourself.</dt>
       {/* <dd>Avoid alcohol before bed, as it can reduce nighttime melatonin production and lead to disrupted sleep patterns.</dd> */}
   <dt>7. Not Everyone Can Be Pleased.</dt>
       {/* <dd>Optimize your bedroom environment by eliminating external light and noise to get better sleep.</dd> */}
   
</dl>


<dl className ="GeneralInfo">
   <dt>8. Experience Is The Best Teacher.</dt>
       {/* <dd>Test different temperatures to find out which is most comfortable for you. Around 20°C (70°F) is best for most people.</dd> */}
   <dt>9. Try Going Out When You Don't Want To.</dt>
       {/* <dd>Consuming a large meal before bed can lead to poor sleep and hormone disruption. However, certain meals and snacks a few hours before bed may help.</dd> */}
   <dt>10. Practice Some Convo Starters.</dt>
       {/* <dd>Relaxation techniques before bed, including hot baths and meditation, may help you fall asleep.</dd> */}
   <dt>11. Give Yourself Some Goals.</dt>
       {/* <dd>A warm bath, shower, or foot bath before bed can help you relax and improve your sleep quality.</dd> */}
   <dt>12. Make Sure You Recharge.</dt>
       {/* <dd>Your bed, mattress, and pillow can greatly affect sleep quality and joint or back pain. Try to buy a high quality bedding — including a mattress — every 5–8 years.</dd> */}
   <dt>13. Get Ready To Paraphrase.</dt>
       {/* <dd>Regular exercise during daylight hours is one of the best ways to ensure a good night’s sleep.</dd> */}
   <dt>14. Fake It 'Til You Make It.</dt>
       {/* <dd>Reduce fluid intake in the late evening and try to use the bathroom right before bed.</dd> */}
</dl>




</div>





 {/* <p class = "infoheader">Social Activity: Take The First Step Yourself</p>
 <div className="customdiv">
<p className="GeneralInfo"> 
If you are one of those people who always wait for someone to initiate a conversation, then it is high time you quit the habit and initiated a tête-à-tête yourself. You will be surprised to see the response this change in approach will bring. The number of acquaintances you will make in this way will, by far, outstrip the number that you would have made if you had waited for people to come and approach you. Let’s face it, not everybody has the time to come around talking to all the people that they meet. So, to make sure you do not miss out on the opportunities to meet new people, take matters in your own hands. Not only will this send out a very receptive image of yourself, you might also find a few people with similar interests whom you would otherwise have missed if you had waited for them to come and talk to you.</p>
<img className = "imagesocial" src = {Social1}></img>
<p className ="GeneralInfo"> 
Socializing with people is an easy yet intricate affair. It is a lot like walking in to a strange room and trying out the electrical switches. Some will help you with what you want, while others will be as useless as anything else. There is no harm in trying them out, but they will not bring the desired results. But such an experience surely will help you. The next time you walk in to that same room, you will know which switches to press for what you require. The same is the case with socializing. Go out, meet people and learn from them. Learn from the experience and based on them try to improve yourself.

While there are surely more ways to socialize, the bases for all of those methods lie in these few intricacies. Get them right and you are on your way to mingle like never before.</p>


</div> */}

<div onClick={ClickIndexSocial} page = "/work">
<CustomButton OnClick = {ClickIndexSocial} text = "Return to Homescreen"></CustomButton>
</div>
</div>
}

 
export default SocialInfo;