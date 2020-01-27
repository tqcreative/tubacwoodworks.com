import React from 'react';
import './gallery.css';

export default function Gallery() {

        return (

            <div className="gallery_root">
                
                <h2>Gallery</h2>
                <h3> <a href="/gallery"><ion-icon name="ios-camera"></ion-icon></a></h3>

                <div id="gallery_container" className="gallery_container">

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
                    <div className="item item_13"></div>
                    {/* <div className="item item_14"></div> */}

                </div>

            </div>
        )
}
