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
        console.log("Component has mounted");
        axios
            .get("/cms/kitchenbathvanity")
            .then(collectData => {
                // console.log(collectData.data[0])
                // console.log(collectData.data[0].imageArray);
                // console.log(collectData.data[0].imageArray.length);
                // console.log(collectData.data[0].imageArray[2]);
                // console.log(`state: ${this.state.arrayOfImages[0].original}`)
                // this.setState({ arrayOfImages: collectData.data[0].imageArray });
                let newArray = Array.from(collectData.data[0].imageArray);
                // console.log(newArray);
                let arrayOfObjects = []
                for(let i=0; i < newArray.length; i++){
                    let newObjectItem = { original: `/cms/images/${newArray[i]}`, thumbnail: `/cms/images/${newArray[i]}`};
                    arrayOfObjects.push(newObjectItem);
                }
                this.setState({arrayOfImages: arrayOfObjects});
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.slideInterval !== prevState.slideInterval ||
            this.state.slideDuration !== prevState.slideDuration) {
            // refresh setInterval
            this._imageGallery.pause();
            this._imageGallery.play();
        }
    }
    // kitchenSlider() => {
    //     console.log(collectData.data[0])
    // }

    render() {
        // console.log(Array.from(this.state.arrayOfImages));
        console.log(this.props.theArray)
        return (
            <div>
            <section className='smartslider_root'>
                <ImageGallery
                    items={this.state.arrayOfImages}
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


