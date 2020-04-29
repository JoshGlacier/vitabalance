import React from 'react'
import MyCard from "../../comps/card"
import CustomButton from "../../comps/button"
import Header from "../../comps/header"
import Slider from "../../comps/slider"
import Card from "../../comps/card"
import Router from "next/router";
import Work1 from '../../comps/card/Images/Work_1.svg';
import './workinfo.css'

function ClickIndexWork(){
    Router.push("/home");
}

const WorkInfo = ({}) => { 
    return <div className="custom">
 <Header />
 <h1 class = "infoheader">How to be more Productive</h1>
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
        </p>
<div onClick={ClickIndexWork} page = "/sleep">
<CustomButton OnClick = {ClickIndexWork} text = "Return to Homescreen"></CustomButton>
</div>
</div>
}

export default WorkInfo;