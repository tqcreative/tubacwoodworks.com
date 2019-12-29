import React, { Component } from 'react';
import './gallery.css';

export default class Gallery extends Component {
    render(props) {
        return (
            <div className="gallery_root">
    
                <div className="item item-1" style={{ backgroundImage: `url(https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=11677445-847&recipeName=680)` }}>
                </div>
            </div>
        )
    }
}
