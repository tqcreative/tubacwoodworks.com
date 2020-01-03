import React from 'react'
import './hero.css';

function Hero() {

    return (
        <div className="hero_root parallax" data-speed=".3">
            <div id="hero_quote" className="parallax" data-speed="-1">
                <div>Tubac Woodworks img</div>
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