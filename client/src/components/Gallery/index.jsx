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
        console.log(this.props.staticGalleryImageProp)
        return (
            <div className="gallery_root">
                <h2>Gallery</h2>
                <h3> <a href="/gallery"><ion-icon name="ios-camera"></ion-icon></a></h3>

                <div id="gallery_container" className="gallery_container">
                
                {/* {this.props.staticGalleryImageProp.map((img) => {
                    return (
                        <ImageCard key={img + Math.floor(Math.random()*8000)+1} onClick={this.toggleToast} theArray={img}/>)
                })} */}
               

                    <div className="item item_1" style={{backgroundImage: `url(/cms/images/${this.props.staticGalleryImageProp[0]}`}} onClick={this.toggleToast}></div>
                    <div className="item item_2" style={{backgroundImage: `url(/cms/images/${this.props.staticGalleryImageProp[1]}`}} onClick={this.toggleToast}></div>
                    <div className="item span-3 item_3" style={{backgroundImage: `url(/cms/images/${this.props.staticGalleryImageProp[2]}`}} onClick={this.toggleToast}></div>
                    <div className="item item_4" style={{backgroundImage: `url(/cms/images/${this.props.staticGalleryImageProp[3]}`}}></div>
                    <div className="item span-2 item_5" style={{backgroundImage: `url(/cms/images/${this.props.staticGalleryImageProp[4]}`}}></div>

                    <div className="item span-2 item_6" style={{backgroundImage: `url(/cms/images/${this.props.staticGalleryImageProp[5]}`}}></div>
                    <div className="item item_7" style={{backgroundImage: `url(/cms/images/${this.props.staticGalleryImageProp[6]}`}}></div>
                    <div className="item span-3 item_8" style={{backgroundImage: `url(/cms/images/${this.props.staticGalleryImageProp[7]}`}}></div>
                    <div className="item item_9" style={{backgroundImage: `url(/cms/images/${this.props.staticGalleryImageProp[8]}`}}></div>
                    <div className="item  item_10" style={{backgroundImage: `url(/cms/images/${this.props.staticGalleryImageProp[9]}`}}></div>
                    <div className="item item_11" style={{backgroundImage: `url(/cms/images/${this.props.staticGalleryImageProp[10]}`}} ></div>

                    {/*     
                    removed to preserve load times            
                    <div className="item span-2 item-12" style={{backgroundImage: `url(${greenKitchen})`}}></div>
                    <div className="item span-2 item-12" style={{backgroundImage: `url(${greenKitchen})`}}></div> 
                    */}

                    <div className="item item_12" style={{backgroundImage: `url(/cms/images/${this.props.staticGalleryImageProp[11]}`}} ></div>
                    <div className="item item_13" style={{backgroundImage: `url(/cms/images/${this.props.staticGalleryImageProp[12]}`}} ></div>
                    {/* <div className="item item_14"></div> */}

            
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
