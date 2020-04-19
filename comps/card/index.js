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

const Card = () => <div>
 <Header />
<img src = {Sleep1}></img>
<Slider />
<CustomButton />
</div>



export default Card;

