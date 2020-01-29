import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import axios from 'axios';
import image1 from '../Slider/images/gallery_1.jpg';
import image2 from '../Slider/images/gallery_2.jpg';
import "../Slider/slider.css"

export default class SmartSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showBullets: true,
            infinite: true,
            showThumbnails: false,
            showFullscreenButton: true,
            showGalleryFullscreenButton: true,
            showPlayButton: false,
            showNav: true,
            isRTL: false,
            slideDuration: 450,
            slideInterval: 2000,
            slideOnThumbnailOver: false,
            thumbnailPosition: 'bottom',
            arrayOfImages: []
        };
    }

    componentWillMount() {
        // console.log("Component has mounted");
       
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.slideInterval !== prevState.slideInterval ||
            this.state.slideDuration !== prevState.slideDuration) {
            // refresh setInterval
            this._imageGallery.pause();
            this._imageGallery.play();
        }
    }



    render() {
        // console.log(this.state.arrayOfImages);
        // console.log(this.props.smartArray)
        
        return (
            <div>
            <section className='smartslider_root'>
                <ImageGallery
                    items={this.props.smartArray}
                    lazyLoad={false}
                    showBullets={this.state.showBullets}
                    showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
                    showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
                    showThumbnails={this.state.showThumbnails}
                    showIndex={this.state.showIndex}
                    showNav={this.state.showNav}
                    isRTL={this.state.isRTL}
                    thumbnailPosition={this.state.thumbnailPosition}
                    slideDuration={parseInt(this.state.slideDuration)}
                    slideInterval={parseInt(this.state.slideInterval)}
                    slideOnThumbnailOver={this.state.slideOnThumbnailOver}
                />
            </section>
            {/* <div className="buttons">
                 <button type="button" class="btn btn-warning" onclick="kitchenSlider()">Kitchen & Bath </button>
                 <button type="button" class="btn btn-warning" onclick="furnitureSlider()">Furniture</button>
            </div> */}
            </div>

        )
    
    }
}


