import React, { Component } from 'react';
import './gallery.css';
import Toast from "../../components/Toast";
import ImageCard from '../../components/ImageCard';

class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staticGalleryImages: ["/images/check_1.jpg"],
            toastShow: false,
            toastImage: ""
        }
        this.toggleToast = this.toggleToast.bind(this);
        
    };

    toggleToast(imgURL) {
        this.setState({ toastShow: !this.state.toastShow, toastImage: imgURL})
    }


    render(staticGalleryImageProp, onClick) {
        // console.log(this.props.staticGalleryImageProp)
        return (
            <div className="gallery_root">
                <h2>Showcase</h2>
                <h3> <a href="/gallery"><ion-icon name="ios-camera"></ion-icon></a></h3>

                <div id="gallery_container" className="gallery_container">
                {this.props.staticGalleryImageProp.map((img, index) => {
                    // console.log (img, index)
                    return (
                        <div className={`item item_${(index+1)} span-${(index+1)}`} style={{backgroundImage: `url(${img}`}} key={img + Math.floor(Math.random() * 8000) + 1} onClick={()=> this.toggleToast(`${img}`)} ></div>
                    )
                        
                })}

            </div>
                <Toast show={this.state.toastShow} onClose={this.toggleToast}>
            <div>
                <img src={this.state.toastImage} alt="image" style={{maxWidth:"100%"}}/>
            </div>
                </Toast>

            </div>
        )
}
}

export default Gallery;
