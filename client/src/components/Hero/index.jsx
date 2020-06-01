import React from 'react'
import './hero.css';
import UploadPhoto from '../../sub_component/UploadPhoto';
import Pencil from '../../sub_component/PencilHero';

function Hero(props) {

    let uploadPhotoComponent;
    // let thisId = props.__id;
    let backgroundImageName = 'hero.jpg';
    let nameOfImage = "hero";

    props.login === "Peter" ?
    uploadPhotoComponent = <UploadPhoto __parent_image_name={nameOfImage}/> :
    uploadPhotoComponent = <noscript></noscript>

    return (
        <div className="hero_root">

        <span>{uploadPhotoComponent}</span>
            <div className="hero_background parallax hero_parallax" data-rellax-speed="-10" style={{backgroundImage: `url(/cms/images/${backgroundImageName})`}}></div>
            <div id="hero_quote">
            { 
                props.login === "Peter" ?
                <Pencil theTextObject={props.theTextObject} theUpdateButton={props.theUpdateButton} className="pencil" /> :
                <noscript></noscript>
                }
                
                <div>
                    <img src="/cms/images/logo_white.jpg" alt="Tubac Woodworks Logo"/>
                </div>
                <p>
                    {props.theTextObject.hero.h2}
                </p>
            </div>

        </div>
    )
}

export default Hero;