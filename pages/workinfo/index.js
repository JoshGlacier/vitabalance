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
import './workinfo.css'
import BackButton from '../../comps/BackButton'

function ClickIndexBack(){
    Router.push("/resultinfo");
}


function ClickIndexWork(){
    Router.push("/home");
}

const WorkInfo = ({}) => { 
    return <div className="custom">
 <Header />
 <BackButton onClick={ClickIndexBack} text="&laquo;&nbsp;Back"></BackButton>


 <p class="workHeader">How to be more productive</p>

<span className="imagesContainer">
<img className="workImg" src={Work1}></img>
<img className="workImg" src={Work2}></img>
<img className="workImg" src={Work3}></img>
</span>

<div className="customdiv">

   <dl className="GeneralInfo">
   <dt>1. Make a reasonable to-do list. Don't overwhelm yourself.</dt>
       {/* <dd>Daily sunlight or artificial bright light can improve sleep quality and duration, especially if you have severe sleep issues or insomnia.</dd> */}
   <dt>2. Set small goals for the tasks.</dt>
       {/* <dd>Blue light tricks your body into thinking it’s daytime. There are several ways you can reduce blue light exposure in the evening.</dd> */}
   <dt>3. Focus on one goal at a time.</dt>
       {/* <dd>Caffeine can significantly worsen sleep quality, especially if you drink large amounts in the late afternoon or evening.</dd> */}
   <dt>4. Track your time to identify patterns.</dt>
       {/* <dd>Long daytime naps may impair sleep quality. If you have trouble sleeping at night, stop napping or shorten your naps.</dd> */}
   <dt>5. Find a method for delegating and following-up.</dt>
       {/* <dd>Try to get into a regular sleep/wake cycle — especially on the weekends. If possible, try to wake up naturally at a similar time every day.</dd> */}
   <dt>6. Create a proactive dashboard.</dt>
       {/* <dd>Avoid alcohol before bed, as it can reduce nighttime melatonin production and lead to disrupted sleep patterns.</dd> */}
   <dt>7. Figure out your 2 peak hours.</dt>
       {/* <dd>Optimize your bedroom environment by eliminating external light and noise to get better sleep.</dd> */}
   
</dl>


<dl className ="GeneralInfo">
   <dt>8. Pick one task and then do it.</dt>
       {/* <dd>Test different temperatures to find out which is most comfortable for you. Around 20°C (70°F) is best for most people.</dd> */}
   <dt>9. Focus on most important tasks first</dt>
       {/* <dd>Consuming a large meal before bed can lead to poor sleep and hormone disruption. However, certain meals and snacks a few hours before bed may help.</dd> */}
   <dt>10. Cultivate deep work</dt>
       {/* <dd>Relaxation techniques before bed, including hot baths and meditation, may help you fall asleep.</dd> */}
   <dt>11. Keep a distraction list to stay focused</dt>
       {/* <dd>A warm bath, shower, or foot bath before bed can help you relax and improve your sleep quality.</dd> */}
   <dt>12. Use the Eisenhower Matrix to identify long-term priorities</dt>
       {/* <dd>Your bed, mattress, and pillow can greatly affect sleep quality and joint or back pain. Try to buy a high quality bedding — including a mattress — every 5–8 years.</dd> */}
   <dt>13. Break tasks into smaller pieces</dt>
       {/* <dd>Regular exercise during daylight hours is one of the best ways to ensure a good night’s sleep.</dd> */}
   <dt>14. Don’t multitask</dt>
       {/* <dd>Reduce fluid intake in the late evening and try to use the bathroom right before bed.</dd> */}
</dl>




</div>







 {/* <h1 class = "infoheader">How to be more Productive</h1>
<p className="GeneralInfo"> 
        1. Make a reasonable to-do list. Don't overwhelm yourself.
        <br></br>
        2. Set small goals for the tasks.
        <br></br>
        3. Focus on one goal at a time.
        <br></br>
        4. Track your time to identify patterns.
        <br></br>
        5. Find a method for delegating and following-up.
        <br></br>
        6. Create a proactive dashboard.
        <br></br>
        7. Figure out your 2 peak hours.
        <br></br>
        8. Pick one task and then do it.
        <br></br>
        9. Focus on most important tasks first
        <br></br>
        10. Cultivate deep work
        <br></br>
        11. Keep a distraction list to stay focused
        <br></br>
        12. Use the Eisenhower Matrix to identify long-term priorities
        <br></br>
        13. Use the 80/20 rule
        <br></br>
        14. Break tasks into smaller pieces
        <br></br>
        15.Take breaks
        <br></br>
        16. Make fewer decisions
        <br></br>
        17. Eliminate inefficient communication
        <br></br>
        18. Find repeatable shortcuts
        <br></br>
        19. Learn from successes as well as mistakes
        <br></br>
        20. Plan for when things go wrong
        <br></br>
        21. Work before you get motivated or inspired
        <br></br>
        22. Don’t multitask
        <br></br>
        23. Fill the tank — recharge
        <br></br>
        24. Manage your energy (not just time)
        <br></br>
        25. Get better at saying “no”
        </p> */}


<div onClick={ClickIndexWork} page = "/sleep">
<CustomButton OnClick = {ClickIndexWork} text = "Return to Homescreen"></CustomButton>
</div>
</div>
}

export default WorkInfo;