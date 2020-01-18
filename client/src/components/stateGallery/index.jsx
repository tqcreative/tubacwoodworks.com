import React, { Component } from 'react';
import axios from 'axios';
import './stategallery.css';
import ImageWrapper from '../../components/ImageWrapper';
import ImageCard from '../../components/ImageCard';

class StateGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayOfImages: ["/images/check_1.jpg"]
        }
    };

    componentWillMount() {
        console.log("Component has mounted");
        axios
            .get("/cms/kitchenbathvanity")
            .then(collectData => {
                // console.log(collectData.data)
                // console.log(collectData.data[0].imageArray);
                // console.log(collectData.data[0].imageArray.length);
                // console.log(collectData.data[0].imageArray[2]);
                this.setState({ arrayOfImages: collectData.data[0].imageArray });
            })
    };

    render() {
        // console.log(this.state.arrayOfImages.length)
        // for (let i = 0; i < this.state.arrayOfImages.length; i++){
        //     console.log(this.state.arrayOfImages[i])
        return (
            <ImageWrapper>
                <div className="stateGallery_root">
                <div className="image-div">
                    {this.state.arrayOfImages.map(img => {
                        return (
                          
                    <ImageCard className="item" arrayOfImages={img}/>)})}
                </div>
                </div>
               
            </ImageWrapper>

        )
    }

}

export default StateGallery;