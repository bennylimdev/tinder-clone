import React from 'react'
import './Header.css';
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

function Header() {
    return (
        // BEM 
        <div className="header">
            
            <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
            
            <Link to="/">
                <img className='header__logo' src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="logo"/>
            </Link>

            <Link to="/chats">
                <IconButton>
                <ForumIcon className="header__icon" fontSize="large" /> 
                </IconButton>
            </Link>
        </div>
    )
}

export default Header