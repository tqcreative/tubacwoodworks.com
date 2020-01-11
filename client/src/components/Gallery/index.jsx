import React from 'react';
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
import bathroomCabinets from './images/bathroomCab.JPG'
import greenKitchen from './images/green-kitchen.JPG'



export default function Gallery() {

        return (
            
            <div className="gallery_root">

                <div className="gallery_container">

                    <div className="item item_1"></div>
                    <div className="item item_2"></div>
                    <div className="item span-3 item_3"></div>
                    <div className="item item_4"></div>
                    <div className="item span-2 item_5"></div>

                    <div className="item span-2 item_6"></div>
                    <div className="item item_7"></div>
                    <div className="item span-3 item_8"></div>
                    <div className="item item_9"></div>
                    <div className="item  item_10"></div>
                    <div className="item item_11"></div>

                    {/*     
                    removed to preserve load times            
                    <div className="item span-2 item-12" style={{backgroundImage: `url(${greenKitchen})`}}></div>
                    <div className="item span-2 item-12" style={{backgroundImage: `url(${greenKitchen})`}}></div> 
                    */}

                    <div className="item item_12"></div>

                </div>

            </div>
        )
}
