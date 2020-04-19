import React from 'react';
import './header.css';

const Asset_3 = require('./Asset_3.png');

const Header = () => <div className="header_box">
    <img src={Asset_3.png} />
</div>


Header.defaultProps = {
    color:"#043A5B",
}

export default Header;