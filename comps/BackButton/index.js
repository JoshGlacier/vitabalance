import React from 'react';
import './backbutton.css';
import Router from "next/router";
//Made the UI
const BackButton = ({text, color, onClick, ClickFunction}) => <div style={{backgroundColor:color,boxShadow:"1px 1px 5px"+color}}className = "custom_button_box_back" onClick={onClick} ClickFunction={ClickFunction}>
    <div className= "text-align_back">
    <div className = "custom_button_box_inner_back">
        {text}
        
    </div>
    </div>
</div>

function ClickIndex(){
   
}

BackButton.defaultProps = {
    text:"Let's Go!",
    color:"#043A5B",
    onClick:ClickIndex
}

export default BackButton; 
