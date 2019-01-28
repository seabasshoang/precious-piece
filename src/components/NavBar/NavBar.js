import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="navBox">
            <div className="title">PRECIOUS PIECE</div>
            <div className="navItems">
                <a className="navItem1" href="/">Sunglasses</a>
                <a className="navItem2" href="/">Glasses</a>
                <a className="navItem3" href="/">Campaigns</a>
            </div>
        </div>
        
    );
}

export default NavBar;