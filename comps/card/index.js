import React from 'react';
import './card.css';
import Header from '../header';
import Slider from '../slider';
import CustomButton from '../button';
import Sleep1 from './Images/Sleep_1.svg';
import Sleep2 from './Images/Sleep_2.svg';
import Sleep3 from './Images/Sleep_3.svg';
import Social1 from './Images/Social _01.svg';
import Social2 from './Images/Social _02.svg';
import Social3 from './Images/Social _03.svg';
import Work1 from './Images/Work_1.svg';
import Work2 from './Images/Work_2.svg';
import Work3 from './Images/Work_3.svg';

import showValue from '../slider';

const Card = () => <div>
 <Header />
 <img className="images" src={Sleep2} id="sleep2"></img>
{/* <img className="images" src={Sleep1} id="sleep1"></img>
<img className="images" src={Sleep2} id="sleep2"></img>
<img className="images" src={Sleep3} id="sleep3"></img> */}
<Slider/>
</div>


// function sleepResult() {
//     console.log(showValue.output);
//    if(Slider.value <= 3){
//        document.querySelector("#sleep1").style = 'display: none';
//        document.querySelector("#sleep2").style = 'display: none';
//        document.querySelector("#sleep3").style = 'display: block';
//     } else if (Slider >= 4 || Slider <= 6){
//        document.querySelector("#sleep1").style = 'display: none';
//        document.querySelector("#sleep2").style = 'display: block';
//        document.querySelector("#sleep3").style = 'display: none';
//     } else if (Slider >= 7){
//        document.querySelector("#sleep1").style = 'display: block';
//        document.querySelector("#sleep2").style = 'display: none';
//        document.querySelector("#sleep3").style = 'display: none';
//     }
// }

export default Card;

