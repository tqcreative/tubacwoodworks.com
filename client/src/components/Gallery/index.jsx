import React, { Component } from 'react';
import './gallery.css';

export default class Gallery extends Component {
    render() {
        return (
            <div className="gallery_root">

                <div className="gallery_container">

                    <div className="item item-1" style={{backgroundColor:""}}>
                    </div>
                    <div className="item item-2"></div>

                    <div className="item span-3 item-3" >item 3</div>

                    <div className="item item-4">item 4</div>

                    <div className="item span-2 item-5">item 5</div>
                    <div className="item span-2 item-6">item 6</div>
                    <div className="item item-7">item 7</div>
                    <div className="item span-3 item-8">item 8</div>
                    <div className="item item-9">item 9</div>

                    <div className="item  item-10">item 10</div>
                    <div className="item item-11">item 11</div>
                    <div className="item span-2 item-12">item 12</div>


                </div>

            </div>
        )
    }
}
