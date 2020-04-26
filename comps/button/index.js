import React from 'react';
import './button.css';
import Router from "next/router";
//Made the UI
const CustomButton = ({text, color, onClick, ClickFunction}) => <div style={{backgroundColor:color,boxShadow:"1px 1px 5px"+color}}className = "custom_button_box" onClick={onClick} ClickFunction={ClickFunction}>
    <div className = "custom_button_box_inner">
        {text}
        
    </div>
</div>

function ClickIndex(){
   
}

CustomButton.defaultProps = {
    text:"Let's Go!",
    color:"#043A5B",
    onClick:ClickIndex
}

export default CustomButton; 
