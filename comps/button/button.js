import React from 'react';
import './button.css';
//Made the UI
const CustomButton = ({text, color, onClick}) => <div style={{backgroundColor:color,boxShadow:"1px 1px 5px"+color}}className = "custom_button_box" onClick={onClick}>
    <div className = "custom_button_box_inner">
        {text}
        
    </div>
</div>


CustomButton.defaultProps = {
    text:"Let's Go!",
    color:"#000080",
    onClick:ClickIndex()
}


export default CustomButton; 
