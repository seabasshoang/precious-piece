import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="navBox">
            <div className="title">PRECIOUS PIECE</div>
            <div className="navItems">
                <a className="navItem1" href="/">sunglasses</a>
                <a className="navItem2" href="/">glasses</a>
                <a className="navItem3" href="/">campaigns</a>
            </div>
        </div>
        
    );
}

export default NavBar;