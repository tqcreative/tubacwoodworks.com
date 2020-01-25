import React, { Component } from 'react';
import axios from 'axios';
import './stategallery.css';
import ImageWrapper from '../../components/ImageWrapper';
import ImageCard from '../../components/ImageCard';
import Toast from "../../components/Toast";

class StateGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayOfImages: ["/images/check_1.jpg"],
            toastShow: false,
            toastImage: ""
        }
        this.allGallery = this.allGallery.bind(this);
        this.kitchenGallery = this.kitchenGallery.bind(this);
        this.bathGallery = this.bathGallery.bind(this);
        this.furnitureGallery = this.furnitureGallery.bind(this);
        this.toggleToast = this.toggleToast.bind(this);
        
    };

    componentDidMount() {
        console.log("Component has mounted");
        // axios
        //     .get("/cms/kitchenbathvanity")
        //     .then(collectData => {
        //         // console.log(collectData.data)
        //         // console.log(collectData.data[0].imageArray);
        //         // console.log(collectData.data[0].imageArray.length);
        //         // console.log(collectData.data[0].imageArray[2]);
        //         this.setState({ arrayOfImages: collectData.data[0].imageArray });
        //     })
    };

    allGallery(){
        // axios
        //     .get("/cms/kitchenbathvanity")
        //     .then(collectData => {
        //         console.log(collectData.data[0].imageArray)
        //         // console.log(collectData.data[0].imageArray);
        //         // console.log(collectData.data[0].imageArray.length);
        //         // console.log(collectData.data[0].imageArray[2]);
        //         this.setState({ arrayOfImages: collectData.data[0].imageArray });
        //     })
    };

    kitchenGallery(){
        // axios
        //     .get("/cms/kitchenbathvanity")
        //     .then(collectData => {
        //         console.log(collectData.data[1].kitchenTable)
        //         // console.log(collectData.data[0].imageArray);
        //         // console.log(collectData.data[0].imageArray.length);
        //         // console.log(collectData.data[0].imageArray[2]);
        //         this.setState({ arrayOfImages: collectData.data[1].kitchenTable });
        //     })
    };

    bathGallery(){
        // axios
        //     .get("/cms/kitchenbathvanity")
        //     .then(collectData => {
        //         // console.log(collectData.data[1].kitchenTable)
        //         // console.log(collectData.data[0].imageArray);
        //         // console.log(collectData.data[0].imageArray.length);
        //         // console.log(collectData.data[0].imageArray[2]);
        //         this.setState({ arrayOfImages: collectData.data[2].bathTable });
        //     })
    };

    furnitureGallery(){
        // axios
        //     .get("/cms/kitchenbathvanity")
        //     .then(collectData => {
        //         // console.log(collectData.data[1].kitchenTable)
        //         // console.log(collectData.data[0].imageArray);
        //         // console.log(collectData.data[0].imageArray.length);
        //         // console.log(collectData.data[0].imageArray[2]);
        //         this.setState({ arrayOfImages: collectData.data[3].furnitureTable });
        //     })
    }

    toggleToast(imgURL) {
        this.setState({ toastShow: !this.state.toastShow, toastImage: imgURL})
    }


    render() {
        console.log(this.props.theArray)
        // console.log(this.state.arrayOfImages.length)
        // for (let i = 0; i < this.state.arrayOfImages.length; i++){
        //     console.log(this.state.arrayOfImages[i])
        return (
           <div>
            <ImageWrapper>
                
                {/* <button type='button' className="btn btn-primary" onClick={this.allGallery}>All Images</button>
                <button type='button' className="btn btn-primary" onClick={this.kitchenGallery}>Kitchen Images</button>
                <button type='button' className="btn btn-primary" onClick={this.bathGallery}>Bath Images</button>
                <button type='button' className="btn btn-primary" onClick={this.furnitureGallery}>Furniture Images</button> */}
                <div className="stateGallery_root" >
                    
                    <div className="image-div">
                        {this.state.arrayOfImages.map((img, index) => {
                            return (
                                <ImageCard key={img + Math.floor(Math.random()*8000)+1} onClick={this.toggleToast} className="item" arrayOfImages={img} />)
                        })}
                        
                    </div>
                  
                    </div>
            </ImageWrapper>
            <Toast show={this.state.toastShow} onClose={this.toggleToast}>
            <div>
                <img src={this.state.toastImage} alt="image" style={{maxWidth:"100%"}}/>
            </div>
        </Toast>
        </div>
        )
    }
}
export default StateGallery;