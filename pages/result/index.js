import React from 'react'
import MyCard from "../../comps/card"
import CustomButton from "../../comps/button"
import Header from "../../comps/header"
import Slider from "../../comps/slider"
import Card from "../../comps/card"

const ResultPage = ({}) => { 
    return <div className="page">
        <Header />
        <div className="mainCard">
            <h1>Oh No! Your life is not balanced!</h1>
            <p>You are not getting enough sleep because you are spending too much time working.</p>
            <div className="info">
                <p>Click the INFO button for information to help improve and balance your life!</p>
            <Button />
            </div>
        <Card></Card>
        <Button />
        </div>
    </div>
}
export default ResultPage;