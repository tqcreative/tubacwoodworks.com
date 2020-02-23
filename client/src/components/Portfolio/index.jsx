import React, {Component} from 'react'
import './portfolio.css';
import axios from 'axios';
import UploadPhoto from '../../sub_component/UploadPhoto';
import PencilPortfolio from '../../sub_component/PencilPortfolio';

// component variables
let portfolioImagePath = "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/";

// build an object from our mongo database.
class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            updatedLast: Date(),
            deck: [
                {
                    title: "",
                    link: "#",
                    imgUrl: "",
                    description: "" 
                },
                {
                    title: this.props.theTextObject.portfolio.box_2.title,
                    link: "#",
                    imgUrl: this.props.theTextObject.portfolio.box_2.background,
                    description: this.props.theTextObject.portfolio.box_2.description 
                },
                {
                    title: this.props.theTextObject.portfolio.box_3.title,
                    link: "#",
                    imgUrl: this.props.theTextObject.portfolio.box_3.background,
                    description: this.props.theTextObject.portfolio.box_3.description 
                },
                {
                    title: this.props.theTextObject.portfolio.box_4.title,
                    link: "#",
                    imgUrl: this.props.theTextObject.portfolio.box_4.background,
                    description: this.props.theTextObject.portfolio.box_4.description 
                },
                {
                    title: this.props.theTextObject.portfolio.box_5.title,
                    link: "#",
                    imgUrl: this.props.theTextObject.portfolio.box_5.background,
                    description: this.props.theTextObject.portfolio.box_5.description 
                },
                {
                    title: this.props.theTextObject.portfolio.box_6.title,
                    link: "#",
                    imgUrl: this.props.theTextObject.portfolio.box_6.background,
                    description: this.props.theTextObject.portfolio.box_6.description 
                }
            ],
            images: {
                image1: `${portfolioImagePath}portfolio_1.jpg`,
                image2: `${portfolioImagePath}portfolio_2.jpg`,
                image3: `${portfolioImagePath}portfolio_3.jpg`,
                image4: `${portfolioImagePath}portfolio_4.jpg`,
                image5: `${portfolioImagePath}portfolio_5.jpg`,
                image6: `${portfolioImagePath}portfolio_6.jpg`,
            },
            style: [
                {transform: 'translateY(0)'},
                {transform: "translateY(230px)"}
            ],
            open0: {transform: 'translateY(240px)'},
            open1: {transform: 'translateY(240px)'},
            open2: {transform: 'translateY(240px)'},
            open3: {transform: 'translateY(240px)'},
            open4: {transform: 'translateY(240px)'},
            open5: {transform: 'translateY(240px)'},
            arrow0: {transform: 'rotate(0)'},
            arrow1: {transform: 'rotate(0)'},
            arrow2: {transform: 'rotate(0)'},
            arrow3: {transform: 'rotate(0)'},
            arrow4: {transform: 'rotate(0)'},
            arrow5: {transform: 'rotate(0)'},
            portfolio: {
                box_1: { title: "", description: "", background: ""},
                box_2: { title: "", description: "", background: ""},
                box_3: { title: "", description: "", background: ""},
                box_4: { title: "", description: "", background: ""},
                box_5: { title: "", description: "", background: ""},
                box_6: { title: "", description: "", background: ""}
            }
        }
        this.updatedLast = this.updatedLast.bind(this);
    };

    updatedLast() {
        this.setState({updatedLast: Date()})
        // this.forceUpdate();
        // these did not work because browsers cache data.
    }

    componentDidMount(){
        // console.log(this.props.theTextObject);
        // console.log(this.props.theTextObject.portfolio.box_1);
        // console.log(this.props.theUpdateButton);
        // this.axiosCall();
        
    }

    axiosCall(){
        axios
        .get('/cms/portfolio_component', {
    
        })
        .then(response => {
            
            //console.log(response);

            if (response.data[0].title){
                this.setState({
                    deck : response.data,
                    portfolio : this.props.theTextObject.portfolio
                });
            }
        })
        .catch(error => {
            //console.error(error);
        });
    }

    render() {

        const transformOff = {transform: 'translateY(240px)'};
        const transformOn = {transform: 'translateY(0)'};
        const arrowUp = {transform: 'rotate(180deg)'};
        const arrowDown = {transform: 'rotate(0)'};
        let editText;

        return (
        <div className="portfolio_root">
            <div className="portfolio_items_go_here">
                <div className="deck">
                    <div onClick={()=>{ 
                        this.state.open0.transform == 'translateY(0)' ? 
                        this.setState({open0 : transformOff, arrow0: arrowDown}) :
                        this.setState({open0 : transformOn, arrow0: arrowUp}); 
                    }} 
                    id="card0" className="card" style={{backgroundImage: `url(${this.props.theTextObject.portfolio.box_1.background})`}}>
                        {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_1"}/> :
                        <noscript></noscript> }

                        {this.props.login === 'Peter' ? <PencilPortfolio theTextObject={this.props.theTextObject} theUpdateButton={this.props.theUpdateButton} boxNumber = {1} /> : ""}

                        <div id="textbox0" style={this.state.open0} >
                            <p>{this.props.theTextObject.portfolio.box_1.title}<ion-icon name="ios-arrow-up" style={this.state.arrow0}></ion-icon></p>
                            <p>{this.props.theTextObject.portfolio.box_1.description}</p>
                        </div>
                    </div>
                    <div
                    onClick={()=>{ 
                        this.state.open1.transform == 'translateY(0)' ? 
                        this.setState({open1 : transformOff, arrow1: arrowDown}) :
                        this.setState({open1 : transformOn, arrow1: arrowUp}) 
                    }}
                     id="card1" className="card" style={{backgroundImage: `url(${this.props.theTextObject.portfolio.box_2.background})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_2"}/> :
                        <noscript></noscript> }

                        {this.props.login === 'Peter' ? <PencilPortfolio theTextObject={this.props.theTextObject} theUpdateButton={this.props.theUpdateButton} boxNumber = {2} /> : ""}

                        <div id="textbox1"  style={this.state.open1} >
                            <p>{this.props.theTextObject.portfolio.box_2.title}<ion-icon name="ios-arrow-up" style={this.state.arrow1}></ion-icon></p>
                            <p>{this.props.theTextObject.portfolio.box_2.description}</p>
                        </div>
                    </div>
                    <div
                    onClick={()=>{ 
                        this.state.open2.transform == 'translateY(0)' ? 
                        this.setState({open2 : transformOff, arrow2: arrowDown}) :
                        this.setState({open2 : transformOn, arrow2: arrowUp}) 
                    }}
                     id="card2" className="card" style={{backgroundImage: `url(${this.props.theTextObject.portfolio.box_3.background})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_3"}/> :
                        <noscript></noscript> }

                        {this.props.login === 'Peter' ? <PencilPortfolio theTextObject={this.props.theTextObject} theUpdateButton={this.props.theUpdateButton} boxNumber = {3} /> : ""}

                        <div id="textbox2" style={this.state.open2} >
                            <p>{this.props.theTextObject.portfolio.box_3.title}<ion-icon name="ios-arrow-up" style={this.state.arrow2}></ion-icon></p>
                            <p>{this.props.theTextObject.portfolio.box_3.description}</p>
                        </div>
                    </div>
                    <div
                    onClick={()=>{ 
                        this.state.open3.transform == 'translateY(0)' ? 
                        this.setState({open3 : transformOff, arrow3: arrowDown}) :
                        this.setState({open3 : transformOn, arrow3: arrowUp}) 
                    }}
                     id="card3" className="card" style={{backgroundImage: `url(${this.props.theTextObject.portfolio.box_4.background})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_4"}/> :
                        <noscript></noscript> }

                        {this.props.login === 'Peter' ? <PencilPortfolio theTextObject={this.props.theTextObject} theUpdateButton={this.props.theUpdateButton} boxNumber = {2} /> : ""}

                        <div id="textbox3"  style={this.state.open3} >
                            <p>{this.props.theTextObject.portfolio.box_4.title}<ion-icon name="ios-arrow-up" style={this.state.arrow3} ></ion-icon></p>
                            <p>{this.props.theTextObject.portfolio.box_4.description}</p>
                        </div>
                    </div>
                    <div
                    onClick={()=>{ 
                        this.state.open4.transform == 'translateY(0)' ? 
                        this.setState({open4 : transformOff, arrow4: arrowDown}) :
                        this.setState({open4 : transformOn, arrow4: arrowUp}) 
                    }}
                     id="card4" className="card" style={{backgroundImage: `url(${this.props.theTextObject.portfolio.box_5.background})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_5"}/> :
                        <noscript></noscript> }

                        {this.props.login === 'Peter' ? <PencilPortfolio theTextObject={this.props.theTextObject} theUpdateButton={this.props.theUpdateButton} boxNumber = {2} /> : ""}

                        <div id="textbox4" style={this.state.open4} >
                            <p>{this.props.theTextObject.portfolio.box_5.title}<ion-icon name="ios-arrow-up" style={this.state.arrow4}></ion-icon></p>
                            <p>{this.props.theTextObject.portfolio.box_5.description}</p>
                        </div>
                    </div>
                    <div
                    onClick={()=>{ 
                        this.state.open5.transform == 'translateY(0)' ? 
                        this.setState({open5 : transformOff, arrow5: arrowDown}) :
                        this.setState({open5 : transformOn, arrow5: arrowUp}) 
                    }}
                     id="card5" className="card" style={{backgroundImage: `url(${this.props.theTextObject.portfolio.box_6.background})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_6"} updateFunction={this.updatedLast} /> :
                        <noscript></noscript> }

                        {this.props.login === 'Peter' ? <PencilPortfolio theTextObject={this.props.theTextObject} theUpdateButton={this.props.theUpdateButton} boxNumber = {2} /> : ""}

                        <div id="textbox5" style={this.state.open5} >
                            <p>{this.props.theTextObject.portfolio.box_6.title}<ion-icon name="ios-arrow-up" style={this.state.arrow5}></ion-icon></p>
                            <p>{this.props.theTextObject.portfolio.box_6.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
}

export default Portfolio;