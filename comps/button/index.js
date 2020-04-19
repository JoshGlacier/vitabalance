import React from 'react';
import './button.css';
//Made the UI
const CustomButton = ({text, color, onClick}) => <div style={{backgroundColor:color,boxShadow:"1px 1px 5px"+color}}className = "custom_button_box" onClick={onClick}>
    <div className = "custom_button_box_inner">
        {text}
        
    </div>
</div>

function ButtonClick() {
    //Go to next Page
}

CustomButton.defaultProps = {
    text:"Let's Go!",
    color:"#043A5B",
    onClick:ButtonClick()
}


export default CustomButton; 
