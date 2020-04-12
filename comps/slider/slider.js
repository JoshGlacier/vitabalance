import React from 'react';
import './slider.css';

const Slider = () => <div className="slider">
         <span>0</span><input type="range" id="slider" name="slider" min="0" max="5" step="1"/><span>5</span>
     <output></output>
     <p id="result"></p>
</div>

export default Slider;