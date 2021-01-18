import React from "react";
import "./cssStyles/App.css";
import {Link} from 'react-router-dom'


export default function Nav(){

    const navStyle = {
        color: '#fff',
        
    }

    return (
    <nav className='nav'>
        <ul className='nav-Links'>
            <Link style={navStyle} to='/'>
                <h3>Linguaggi</h3>
            </Link>
            <Link style={navStyle} to='/frameworks'>
                <h3>Frameworks</h3>
            </Link>
            <Link style={navStyle} to='/stili'>
                <h3>Markup and Stylesheets</h3>
            </Link>
        </ul>
    </nav>
    );
}

