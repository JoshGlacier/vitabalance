import React from 'react';
import './workResults.css';
import Header from '../header';
import CustomButton from '../button';

import Work1 from './Images/Work_1.svg';
import Work2 from './Images/Work_2.svg';
import Work3 from './Images/Work_3.svg';

const workResults = () => <div className="mainCard">

 <Header />

    <div className="card">
        <h1 className="title">Be Productive</h1>

        <img class = "images" src = {Work1}></img>

        <p className="bodyText">
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
        </p>
        <CustomButton />
    </div>
</div>



export default workResults;

