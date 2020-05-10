import React from 'react';
import './slider.css';

const Slider = ({onChange}) => <div className="slider">
         <center><p className="bubble"><span id="result">5</span><br/><span id="units">hrs.</span></p>
           <input type="range" id="slider" name="slider" min="0" max="10" step="1" defaultValue="5" onChange={()=>{onChange(); showValue();}}/></center>
            {/* <span>&ndash;</span><input type="range" id="slider" name="slider" min="0" max="10" step="1" onChange={()=>{onChange(); showValue();}}/><span>+</span> */}
</div>


function showValue() {
    var input = document.getElementById("slider");
    var output = document.getElementById("result");
    output.innerHTML = input.value;

    input.oninput = function() {
        output.innerHTML = this.value;
        

    // Show + after value when value = 10
        if(this.value == 10){
            output.innerHTML = this.value + "+";
        }
    }
}

export default Slider;