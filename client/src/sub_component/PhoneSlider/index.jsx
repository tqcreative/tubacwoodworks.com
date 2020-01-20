import React from 'react';
import './phoneSlider.css';

export default function Phone(props) {
    return (
        <div id="phone" className="phone_slider_root">
            <a href={`tel:${props.phoneNumber}`}>
                <ion-icon name="ios-call"></ion-icon>
            </a>
        </div>
    )
}
