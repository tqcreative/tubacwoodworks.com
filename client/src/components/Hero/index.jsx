import React from 'react'
import './hero.css';

function Hero() {

    return (
        <div className="hero_root">
            <div className="hero_background parallax" data-rellax-speed="-10"></div>
            <div id="hero_quote">
                <div>
                    <img src="/cms/images/logo.jpg" alt="Tubac Woodworks Logo"/>
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