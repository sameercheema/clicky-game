import React from 'react'
import './nav.css'

const Nav = props => {
    return (
        <nav className="navbar navbar-red">
            <a className="navbar-brand" href="#home">
            <img src="https://commons.wikimedia.org/wiki/Category:Donald_Trump_in_the_1940s#/media/File:Donald_Trump_baby_photo_88BD7957.jpg" width="40" height="30" className="d-inline-block align-top mr-2 mt-2" alt="" />
                Fun With Trump
            </a>
            <span className="navbar-text">
                Score: {props.score}
            </span>
        </nav>
    )
}

export default Nav;