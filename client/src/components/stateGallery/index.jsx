import React, {Component} from 'react';
import axios from 'axios';
import './stategallery.css';

class StateGallery extends Component {
    constructor(props) {
		super(props)
		this.state = {
            arrayOfImages : ["/images/check_1.jpg"]
		}
    };

    componentWillMount(){
        console.log("Component has mounted");
        axios
        .get("/cms/kitchenbathvanity")
        .then(collectData => {
            console.log(collectData.data)
            console.log(collectData.data[0].imageArray);
            console.log(collectData.data[0].imageArray.length);
            console.log(collectData.data[0].imageArray[2]);
            this.setState({arrayOfImages : collectData.data[0].imageArray});
        })
    };

    render(){
        return (

           <div className="stateGallery_root">
                <p id="ptag">hello world</p>
                <div className="image_div" style={{backgroundImage: `url(/cms/images/${this.state.arrayOfImages[0]}`}}></div>
            </div>

        )
    }
        
}

export default StateGallery;