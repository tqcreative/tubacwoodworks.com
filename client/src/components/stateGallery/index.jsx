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
            // toastMsg: [], 
			// toastShow: false,
        }
        // this.showImageToast = this.handleSignupResult.bind(this);
		// this.toggleToast = this.toggleToast.bind(this);
    };

    componentDidMount() {
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

    // showImageToast(img){
	// 	console.log(img);
	// 	this.setState({toastMsg: img, toastShow: true})
    // };

    // toggleToast(){
	// 	this.setState({toastShow: !this.state.toastShow});
	// }

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
                                <ImageCard key={img + Math.floor(Math.random()*8000)+1} className="item" arrayOfImages={img} />)
                        })}
                    </div>
                    </div>
            </ImageWrapper>
        )
    }
}
export default StateGallery;