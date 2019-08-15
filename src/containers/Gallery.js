import React, {Component } from 'react';
import './Gallery.css'

export default class Gallery extends Component{

    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "custom2.js";
        script.async = true;
    
        document.body.appendChild(script);
    }

    render(){
        return (<div className="Gallery">
            <div className="lander">
            <div id="instafeed"></div>
            </div>
            </div>);
    }
}