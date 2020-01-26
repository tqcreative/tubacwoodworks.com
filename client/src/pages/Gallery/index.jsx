import React, { Component } from 'react';
import './gallery.css';
import { NavBar } from '../../components/Navbar';
// import gsap from "gsap";
import HeroSmart from '../../components/HeroSmart';
import Footer from '../../components/Footer';
import Signup from '../../components/Signup';
import StateGallery from '../../components/stateGallery';
import UploadBtn from '../../sub_component/UploadButton';
import SimpleSlider from '../../components/SimpleSlider';
import SmartSlider from '../../components/Slider';
import axios from 'axios';


export default class Gallery extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user,
			styleProp: 'absolute',
            arrayOfImages: ["/images/check_1.jpg"],
            tableName: "showcase"
        };
        this.callTableToLoad = this.callTableToLoad.bind(this);
        this.changeTableName = this.changeTableName.bind(this);
		};
	

	componentDidMount() {
        // console.log("Gallery Component Mounted")
        this.callTableToLoad();
    }
    
    callTableToLoad(){
        axios
        .get("/cms/kitchenbathvanity")
        .then(collectData => {
            // console.log(collectData.data)
            // console.log(collectData.data[0].imageArray);
            // console.log(collectData.data[0].imageArray.length);
            // console.log(collectData.data[0].imageArray[2]);
            // console.log(this.state.arrayOfImages);
            // console.log(collectData.data[0][this.state.tableName]);
            let tableNameInCallBack = this.state.tableName;

            switch (tableNameInCallBack) {
                case "imageArray":
                    this.setState({ arrayOfImages: collectData.data[0][this.state.tableName] });
                    break;
                case "kitchenTable":
                    this.setState({ arrayOfImages: collectData.data[1][this.state.tableName] });
                    break;
                case "bathTable":
                    this.setState({ arrayOfImages: collectData.data[2][this.state.tableName] });
                    break;
                case "furnitureTable":
                    this.setState({ arrayOfImages: collectData.data[3][this.state.tableName] });
                    break;
                case "showcase":
                    this.setState({ arrayOfImages: collectData.data[4][this.state.tableName] });
                    break;
                default:
                    break;
            }
        })
    }

    changeTableName(event){
       // set the state of tableName to kitchenTable
    //    console.log("====================================================");
       if (event.target.name != null && event.target.name != undefined){
        this.setState({tableName: `${event.target.name}`});
        this.callTableToLoad();
       } else {
           //dont do anything!
       };

    };

	render() {
		if (this.props.user) {
			return (
				<div className="gallery_page_root">
					<HeroSmart login={"Peter"} backgroundName={"gallery_hero"} title="Gallery" subTitle="come see our work"/>	
					<NavBar styleProp={this.state.styleProp} />
					<div style={{position: 'relative'}}>
						<UploadBtn  tableNameProp={this.state.tableName} refreshTable={this.callTableToLoad} />
					</div>
					<SmartSlider/>
					<button type='button' name="imageArray" className="btn btn-primary" onClick={this.changeTableName}>All Images</button>
                    <button type='button' name="kitchenTable" className="btn btn-primary" onClick={this.changeTableName}>Kitchen Images</button>
                    <button type='button' name="bathTable" className="btn btn-primary" onClick={this.changeTableName}>Bath Images</button>
                    <button type='button' name="furnitureTable" className="btn btn-primary" onClick={this.changeTableName}>Furniture Images</button>
					<StateGallery logedIn={"Peter"} tableNameProp={this.state.tableName} theArray={this.state.arrayOfImages}/>
					<Signup />
					<Footer />
				</div>
			)
		} else {
			return (
				<div className="gallery_page_root">
					<HeroSmart login={false} backgroundName={"gallery_hero"} title="Gallery" subTitle="come see our work"/>	
					<NavBar styleProp={this.state.styleProp} />
					{/* <SimpleSlider/> */}
					<SmartSlider/>
					{/* Button with kitchen/bath/furniture options that call their subsequent functions that set the state on click  */}
                        <button type='button' name="imageArray" className="btn btn-primary" onClick={this.changeTableName}>All Images</button>
                        <button type='button' name="kitchenTable" className="btn btn-primary" onClick={this.changeTableName}>Kitchen Images</button>
                        <button type='button' name="bathTable" className="btn btn-primary" onClick={this.changeTableName}>Bath Images</button>
                        <button type='button' name="furnitureTable" className="btn btn-primary" onClick={this.changeTableName}>Furniture Images</button>
					<StateGallery logedIn={false} tableNameProp={this.state.tableName} theArray={this.state.arrayOfImages}/>
					<Signup />
					<Footer />
				</div>
			)
		}
	}

}
