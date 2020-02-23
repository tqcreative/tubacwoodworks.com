import React from 'react';

export default function SubSlide(props) {
    return (
        <div className="item_slider" style={{backgroundImage: `url(/cms/images/${props.slideImage})`}}></div>
    )
}