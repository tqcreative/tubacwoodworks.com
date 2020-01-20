import React from 'react'
import './hero.css';
import UploadPhoto from '../../sub_component/UploadPhoto';

function Hero(props) {

    let uploadPhotoComponent;
    let thisId = props.__id;
    let backgroundImageName = 'hero.jpg';
    let nameOfImage = "hero";

    props.login === "Peter" ?
    uploadPhotoComponent = <UploadPhoto __parent_image_name={nameOfImage}/> :
    uploadPhotoComponent = <noscript></noscript>

    return (
        <div className="hero_root">
        <span>{uploadPhotoComponent}</span>
            <div className="hero_background parallax" data-rellax-speed="-10" style={{backgroundImage: `url(/cms/images/${backgroundImageName})`}}></div>
            <div id="hero_quote">
                <div>
                    <img src="/cms/images/logo_white.jpg" alt="Tubac Woodworks Logo"/>
                </div>
                <p>
                    Tubac Woodworks Inc, building custom
                    cabinetry, etertainment center, bookcases,
                    desks, and a variety of other wood products
                    for home, office, or business.
                </p>
            </div>

        </div>
    )
}

export default Hero;