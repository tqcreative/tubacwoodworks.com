import React from 'react'
import './herosmart.css';
import { urlencoded } from 'body-parser';

function HeroSmart(props) {

    // ill need 3 props.
    // the title for the <h1></h1>
    // the image for the background
    // the sub title for the <h2></h2>

    console.log(props);

    return (
        
        <div className="herosmart_root">
            <div className="parallax" data-rellax-speed="-10" style={{backgroundImage: `url(/cms/images/${props.backgroundImage})`}}></div>
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subTitle}</h2>
            </div>
        </div>
    )
}

export default HeroSmart;