import React from 'react'
import MyCard from "../../comps/card"
import CustomButton from "../../comps/button"
import Header from "../../comps/header"
import Slider from "../../comps/slider"
import Card from "../../comps/card"
import Router from "next/router";
import Sleep1 from '../../comps/card/Images/Sleep_1.svg';
import Sleep2 from '../../comps/card/Images/Sleep_2.svg';
import Sleep3 from '../../comps/card/Images/Sleep_3.svg';
import './sleepinfo.css'



function ClickIndex(){
    Router.push("/Home");
}

const SleepInfo = ({}) => { 
    return <div className="custom">
 <Header />

 <p class="sleepHeader">How to Sleep Better at Night</p>

 <span className="imagesContainer">
<img className="sleepImg" src={Sleep1}></img>
<img className="sleepImg" src={Sleep2}></img>
<img className="sleepImg" src={Sleep3}></img>
</span>

 <div className="customdiv">

    <dl className="GeneralInfo">
    <dt>Increase bright light exposure during the day</dt>
        <dd>Daily sunlight or artificial bright light can improve sleep quality and duration, especially if you have severe sleep issues or insomnia.</dd>
    <dt>Reduce blue light exposure in the evening</dt>
        <dd>Blue light tricks your body into thinking it’s daytime. There are several ways you can reduce blue light exposure in the evening.</dd>
    <dt>Don’t consume caffeine late in the day</dt>
        <dd>Caffeine can significantly worsen sleep quality, especially if you drink large amounts in the late afternoon or evening.</dd>
    <dt>Reduce irregular or long daytime naps</dt>
        <dd>Long daytime naps may impair sleep quality. If you have trouble sleeping at night, stop napping or shorten your naps.</dd>
    <dt>Try to sleep and wake at consistent times</dt>
        <dd>Try to get into a regular sleep/wake cycle — especially on the weekends. If possible, try to wake up naturally at a similar time every day.</dd>
    <dt>Don’t drink alcohol</dt>
        <dd>Avoid alcohol before bed, as it can reduce nighttime melatonin production and lead to disrupted sleep patterns.</dd>
    <dt>Optimize your bedroom environment</dt>
        <dd>Optimize your bedroom environment by eliminating external light and noise to get better sleep.</dd>
    
</dl>


<dl className ="GeneralInfo">
    <dt>Set your bedroom temperature</dt>
        <dd>Test different temperatures to find out which is most comfortable for you. Around 20°C (70°F) is best for most people.</dd>
    <dt>Don’t eat late in the evening</dt>
        <dd>Consuming a large meal before bed can lead to poor sleep and hormone disruption. However, certain meals and snacks a few hours before bed may help.</dd>
    <dt>Relax and clear your mind in the evening</dt>
        <dd>Relaxation techniques before bed, including hot baths and meditation, may help you fall asleep.</dd>
    <dt>Take a relaxing bath or shower</dt>
        <dd>A warm bath, shower, or foot bath before bed can help you relax and improve your sleep quality.</dd>
    <dt>Get a comfortable bed, mattress, and pillow</dt>
        <dd>Your bed, mattress, and pillow can greatly affect sleep quality and joint or back pain. Try to buy a high quality bedding — including a mattress — every 5–8 years.</dd>
    <dt>Exercise regularly — but not before bed</dt>
        <dd>Regular exercise during daylight hours is one of the best ways to ensure a good night’s sleep.</dd>
    <dt>Don’t drink any liquids before bed</dt>
        <dd>Reduce fluid intake in the late evening and try to use the bathroom right before bed.</dd>
</dl>




</div>
<div page = "/work">
<CustomButton OnClick = {ClickIndex} text = "Return to Homescreen"></CustomButton>
</div>
</div>
}

 
export default SleepInfo;