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
        this.toggleToast = this.toggleToast.bind(this);

    };

    componentDidUpdate(){
        console.log(this.props.theArray);
    }

    toggleToast(imgURL) {
        this.setState({ toastShow: !this.state.toastShow, toastImage: imgURL })
    }

    render(theArray) {
     
        return (
            <div>
                <ImageWrapper>
                    <div className="stateGallery_root" >

                        <div className="image-div">
                            {this.props.theArray.map((img, index) => {
                                return (
                                    <ImageCard refreshTable={this.props.refreshTable} logedIn={this.props.logedIn} tableNameProp={this.props.tableNameProp} imageNumber={index} key={img + Math.floor(Math.random() * 8000) + 1} onClick={this.toggleToast} className="item" theArray={img == undefined ? "kitchen_1.jpg" : img} />)
                            })}

                        </div>

                    </div>
                </ImageWrapper>
                <Toast show={this.state.toastShow} onClose={this.toggleToast}>
                    <div>
                        <img src={this.state.toastImage} alt="image" style={{ maxWidth: "100%" }} />
                    </div>
                </Toast>
            </div>
        )
    }
}
export default StateGallery;