import React from 'react';
import './slider.css';

const Slider = () => <div className="slider">
         <center><p className="bubble"><span id="result">0</span><br/><span id="units">hrs.</span></p></center>
         <span>&ndash;</span><input type="range" id="slider" name="slider" min="0" max="10" step="1" onChange={showValue}/><span>+</span>
</div>

function showValue() {
    var input = document.getElementById("slider");
    var output = document.getElementById("result");
    output.innerHTML = input.value;

    input.oninput = function() {
        output.innerHTML = this.value;
    }
}

export default Slider;