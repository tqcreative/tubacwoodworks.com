import React, { Component } from 'react';
import './gallery.css';
import bathroom from './images/bathroom.JPG';
import kitchen1 from './images/kitchen1.JPG';
import kitchen3 from './images/kitchen3.JPG';
import kitchen4 from './images/kitchen4.JPG';
import kitchen5 from './images/kitchen5.JPG';
import woodenBar from './images/wooden-bar.JPG';
import foldingBed from './images/folding-bed.JPG';
import Bed from './images/gar1.JPG';
import woodenCabinets from './images/wooden.JPG';
import whiteCabinets from './images/whiteCab.JPG';



export default class Gallery extends Component {
    render() {
        return (
            <div className="gallery_root">

                <div className="gallery_container">

                    <div className="item item-1" style={{backgroundImage: `url(${kitchen1})`}}>
                        <span></span>
                    </div>
                    <div className="item item-2" style={{backgroundImage: `url(${bathroom})`}}></div>

                    <div className="item span-3 item-3" style={{backgroundImage: `url(${kitchen3})`}}></div>

                    <div className="item item-4" style={{backgroundImage: `url(${kitchen4})`}}></div>

                    <div className="item span-2" style={{backgroundImage: `url(${kitchen5})`}}></div>

                    <div className="item span-2 item-6" style={{backgroundImage: `url(${woodenBar})`}}></div>
                    
                    <div className="item item-7" style={{backgroundImage: `url(${foldingBed})`}}></div>

                    <div className="item span-3 item-8" style={{backgroundImage: `url(${Bed})`}}></div>

                    <div className="item item-9" style={{backgroundImage: `url(${woodenCabinets})`}}></div>

                    <div className="item  item-10" style={{backgroundImage: `url(${whiteCabinets})`}}></div>
                    <div className="item item-11">item 11</div>
                    <div className="item span-2 item-12">item 12</div>


                </div>

            </div>
        )
    }
}
