import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Hero.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import DragHandleIcon from "@material-ui/icons/DragHandle";

const Hero = () => {
    return ( <
        div className = "region" >
        <
        div className = "hero" >
        <
        div className = { `nav` } >
        <
        div className = "nav-left" >
        <
        p className = "long_nav" > Skin care < /p> <
        p className = "long_nav" > Body & Hand < /p> <
        p className = "long_nav" > Hair < /p> <
        p className = "long_nav" > Fragrance < /p> <
        p className = "long_nav" > Home < /p> <
        p className = "long_nav" > Kits & Travel < /p> <
        p className = "long_nav" > Gifts < /p> <
        p className = "long_nav" > Read < /p> <
        p className = "long_nav" > Stores < /p> <
        p className = "long_nav" > Search < /p> <
        p className = "short_nav " > Shop < /p> <
        p className = "short_nav " > Read < /p> <
        p className = "short_nav " > Store < /p> <
        p className = "short_nav " > Search < /p> < /
        div > <
        div className = "nav-right" >
        <
        p > Login < /p> <
        p > Cart < /p> < /
        div > <
        /div> <
        div className = { `mob-nav` } >
        <
        div className = "nav-left" >
        <
        img src = "https://upload.wikimedia.org/wikipedia/commons/4/4d/Aesop_logo_2013.svg"
        alt = "" /
        >
        <
        /div> <
        div className = "nav-right" >
        <
        p > Cart < /p> <
        DragHandleIcon / >
        <
        /div> < /
        div > <
        div className = "logo" >
        <
        img src = "https://upload.wikimedia.org/wikipedia/commons/4/4d/Aesop_logo_2013.svg"
        alt = "" /
        >
        <
        /div> <
        div className = "hero-text" >
        <
        h2 > Mother’ s Day < /h2> <
        h1 > For cherished figures < /h1> <
        p >
        A selection of gifts to recognise gracious guidance— including Beacon, a kit created with all kinds of supportive spirits in mind. <
        /p> <
        Button variant = "outlined" >
        <
        span className = "btn-hero" > Discover gifts
        for mother figures < /span> <
        ArrowForwardIcon / >
        <
        /Button> < /
        div > <
        /div> <
        div className = "mob-hero-text" >
        <
        h4 > Mother’ s Day < /h4> <
        h1 > For cherished figures < /h1> <
        p >
        A selection of gifts to recognise gracious guidance— including Beacon, a kit created with all kinds of supportive spirits in mind. <
        /p> <
        Button variant = "outlined" >
        <
        span className = "btn-hero" > Discover gifts
        for mother figures < /span> <
        ArrowForwardIcon / >
        <
        /Button> < /
        div > <
        /div>
    );
};

export default Hero;