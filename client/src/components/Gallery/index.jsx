import React, { Component } from 'react';
import './gallery.css';

export default class Gallery extends Component {
    render(props) {
        return (
            <div className="gallery_root">
    
                <div className="item item-1" style={{ backgroundImage: `url(https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=11677445-847&recipeName=680)` }}>
                </div>
                <div className="item item-2" >item 2</div>

            <div className="item span-3 item-3" >item 3</div>

            <div className="item item-4">item 4</div>

            <div className="item span-2 item-5">item 5</div>
            <div className="item item-6">item 6</div>
            <div className="item item-7">item 7</div>
            <div className="item item-8">item 8</div>
            <div className="item item-9">item 9</div>

            <div className="item span-2 item-10">item 10</div>
            <div className="item item-11">item 11</div>
            <div className="item item-12">item 12</div>

            <div className="item span-2 item-13">item 13</div>
            <div className="item item-14">item 14</div>
            <div className="item item-15">item 15</div>
            <div className="item item-16">item 16</div>
            
            <div className="item span-3 item-17">item 17</div>
            <div className="item item-18">item 18</div>
            <div className="item item-19">item 19</div>
            <div className="item item-20">item 20</div>
            <div className="item item-21">item 21</div>
            <div className="item item-22">item 22</div>
          
            </div>
        )
    }
}
