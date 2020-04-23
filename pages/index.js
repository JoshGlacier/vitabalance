import Link from 'next/link';
import Router from 'next/router';
import './app.css';

function ClickIndex(){
    document.querySelector("#main_app").style.right = "-100%";
    setTimeout(function() {
        Router.push("/sleep");
    }, 1000)
    }


const Index = () => <div id="main_app">
    <div onClick={ClickIndex}>Index</div>

</div>

export default Index;