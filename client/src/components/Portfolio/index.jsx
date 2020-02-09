import React, {Component} from 'react'
import './portfolio.css';
import axios from 'axios';
import UploadPhoto from '../../sub_component/UploadPhoto';

// component variables
let portfolioImagePath = "https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/";

// build an object from our mongo database.
class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deck: [
                {
                    title: "Woodwork",
                    link: "#",
                    imgUrl: `${portfolioImagePath}portfolio_1.JPG`,
                    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas amet at dolor." 
                },
                {
                    title: "Furniture",
                    link: "#",
                    imgUrl: `${portfolioImagePath}portfolio_2.JPG`,
                    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas amet at dolor."
                },
                {
                    title: "Custom Cabinets",
                    link: "#",
                    imgUrl: `${portfolioImagePath}portfolio_3.JPG`,
                    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas amet at dolor."
                },
                {
                    title: "Kitchen",
                    link: "#",
                    imgUrl: `${portfolioImagePath}portfolio_4.JPG`,
                    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas amet at dolor."
                },
                {
                    title: "Counters",
                    link: "#",
                    imgUrl: `${portfolioImagePath}portfolio_5.JPG`,
                    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas amet at dolor."
                },
                {
                    title: "Islands",
                    link: "#",
                    imgUrl: `${portfolioImagePath}portfolio_6.JPG`,
                    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas amet at dolor."
                }
            ],
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
        }
    };

    componentDidMount(){
        this.axiosCall();
    }

    axiosCall(){
        axios
        .get('/cms/portfolio_component', {
    
        })
        .then(response => {
            
            //console.log(response);

            if (response.data[0].title){
                this.setState({
                    deck : response.data
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

        return (
        <div className="portfolio_root">
            <div className="portfolio_items_go_here">
                <div className="deck">
                    <div onClick={()=>{ 
                        this.state.open0.transform == 'translateY(0)' ? 
                        this.setState({open0 : transformOff, arrow0: arrowDown}) :
                        this.setState({open0 : transformOn, arrow0: arrowUp}); 
                    }} 
                    id="card0" className="card" style={{backgroundImage: `url(${this.state.deck[0].imgUrl})`}}>
                        {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_1"}/> :
                        <noscript></noscript> }
                        <div id="textbox0" style={this.state.open0} >
                            <p>{this.state.deck[0].title}<ion-icon name="ios-arrow-up" style={this.state.arrow0}></ion-icon></p>
                            <p>{this.state.deck[0].description}</p>
                        </div>
                    </div>
                    <div
                    onClick={()=>{ 
                        this.state.open1.transform == 'translateY(0)' ? 
                        this.setState({open1 : transformOff, arrow1: arrowDown}) :
                        this.setState({open1 : transformOn, arrow1: arrowUp}) 
                    }}
                     id="card1" className="card" style={{backgroundImage: `url(${this.state.deck[1].imgUrl})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_2"}/> :
                        <noscript></noscript> }
                        <div id="textbox1"  style={this.state.open1} >
                            <p>{this.state.deck[1].title}<ion-icon name="ios-arrow-up" style={this.state.arrow1}></ion-icon></p>
                            <p>{this.state.deck[1].description}</p>
                        </div>
                    </div>
                    <div
                    onClick={()=>{ 
                        this.state.open2.transform == 'translateY(0)' ? 
                        this.setState({open2 : transformOff, arrow2: arrowDown}) :
                        this.setState({open2 : transformOn, arrow2: arrowUp}) 
                    }}
                     id="card2" className="card" style={{backgroundImage: `url(${this.state.deck[2].imgUrl})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_3"}/> :
                        <noscript></noscript> }
                        <div id="textbox2" style={this.state.open2} >
                            <p>{this.state.deck[2].title}<ion-icon name="ios-arrow-up" style={this.state.arrow2}></ion-icon></p>
                            <p>{this.state.deck[2].description}</p>
                        </div>
                    </div>
                    <div
                    onClick={()=>{ 
                        this.state.open3.transform == 'translateY(0)' ? 
                        this.setState({open3 : transformOff, arrow3: arrowDown}) :
                        this.setState({open3 : transformOn, arrow3: arrowUp}) 
                    }}
                     id="card3" className="card" style={{backgroundImage: `url(${this.state.deck[3].imgUrl})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_4"}/> :
                        <noscript></noscript> }
                        <div id="textbox3"  style={this.state.open3} >
                            <p>{this.state.deck[3].title}<ion-icon name="ios-arrow-up" style={this.state.arrow3} ></ion-icon></p>
                            <p>{this.state.deck[3].description}</p>
                        </div>
                    </div>
                    <div
                    onClick={()=>{ 
                        this.state.open4.transform == 'translateY(0)' ? 
                        this.setState({open4 : transformOff, arrow4: arrowDown}) :
                        this.setState({open4 : transformOn, arrow4: arrowUp}) 
                    }}
                     id="card4" className="card" style={{backgroundImage: `url(${this.state.deck[4].imgUrl})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_5"}/> :
                        <noscript></noscript> }
                        <div id="textbox4" style={this.state.open4} >
                            <p>{this.state.deck[4].title}<ion-icon name="ios-arrow-up" style={this.state.arrow4}></ion-icon></p>
                            <p>{this.state.deck[4].description}</p>
                        </div>
                    </div>
                    <div
                    onClick={()=>{ 
                        this.state.open5.transform == 'translateY(0)' ? 
                        this.setState({open5 : transformOff, arrow5: arrowDown}) :
                        this.setState({open5 : transformOn, arrow5: arrowUp}) 
                    }}
                     id="card5" className="card" style={{backgroundImage: `url(${this.state.deck[5].imgUrl})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_6"}/> :
                        <noscript></noscript> }
                        <div id="textbox5" style={this.state.open5} >
                            <p>{this.state.deck[5].title}<ion-icon name="ios-arrow-up" style={this.state.arrow5}></ion-icon></p>
                            <p>{this.state.deck[5].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
}

export default Portfolio;