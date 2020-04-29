import React from 'react';
import './header.css';


const Asset_3 = require('./Asset_3.png');

const Header = () => <div className="header_box">
    <img className="image" src={Asset_3} width={"100%"} height={"100%"} />
</div>


Header.defaultProps = {
    color:"#043A5B",
}

export default Header;