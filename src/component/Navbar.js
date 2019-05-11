import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <ul className="menu">
                <div className="menu_icon"></div>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/news">Hotel News</Link></li>
                <li><Link to="/">Log Out</Link></li>
            </ul>

        )
    }
}