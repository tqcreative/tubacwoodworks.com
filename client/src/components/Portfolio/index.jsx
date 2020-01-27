import React, {Component} from 'react'
import './portfolio.css';
import axios from 'axios';
import UploadPhoto from '../../sub_component/UploadPhoto';

// component variables
let portfolioImagePath = "/cms/images/";

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
            open5: {transform: 'translateY(240px)'}
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

        let transformOff = {transform: 'translateY(240px)'};
        let transformOn = {transform: 'translateY(0)'};

        return (
        <div className="portfolio_root">
            <div className="portfolio_items_go_here">
                <div className="deck">
                    <div onClick={()=>{ 
                        this.state.open0.transform == 'translateY(0)' ? 
                        this.setState({open0 : transformOff}) :
                        this.setState({open0 : transformOn}) 
                    }} 
                    id="card0" className="card" style={{backgroundImage: `url(${this.state.deck[0].imgUrl})`}}>
                        {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_1"}/> :
                        <noscript></noscript> }
                        <div id="textbox0" style={this.state.open0} >
                            <p>{this.state.deck[0].title}</p>
                            <p>{this.state.deck[0].description}</p>
                        </div>
                    </div>
                    <div
                    onClick={()=>{ 
                        this.state.open1.transform == 'translateY(0)' ? 
                        this.setState({open1 : transformOff}) :
                        this.setState({open1 : transformOn}) 
                    }}
                     id="card1" className="card" style={{backgroundImage: `url(${this.state.deck[1].imgUrl})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_2"}/> :
                        <noscript></noscript> }
                        <div id="textbox1"  style={this.state.open1} >
                            <p>{this.state.deck[1].title}</p>
                            <p>{this.state.deck[1].description}</p>
                        </div>
                    </div>
                    <div
                    onClick={()=>{ 
                        this.state.open2.transform == 'translateY(0)' ? 
                        this.setState({open2 : transformOff}) :
                        this.setState({open2 : transformOn}) 
                    }}
                     id="card2" className="card" style={{backgroundImage: `url(${this.state.deck[2].imgUrl})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_3"}/> :
                        <noscript></noscript> }
                        <div id="textbox2" style={this.state.open2} >
                            <p>{this.state.deck[2].title}</p>
                            <p>{this.state.deck[2].description}</p>
                        </div>
                    </div>
                    <div
                    onClick={()=>{ 
                        this.state.open3.transform == 'translateY(0)' ? 
                        this.setState({open3 : transformOff}) :
                        this.setState({open3 : transformOn}) 
                    }}
                     id="card3" className="card" style={{backgroundImage: `url(${this.state.deck[3].imgUrl})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_4"}/> :
                        <noscript></noscript> }
                        <div id="textbox3"  style={this.state.open3} >
                            <p>{this.state.deck[3].title}</p>
                            <p>{this.state.deck[3].description}</p>
                        </div>
                    </div>
                    <div
                    onClick={()=>{ 
                        this.state.open4.transform == 'translateY(0)' ? 
                        this.setState({open4 : transformOff}) :
                        this.setState({open4 : transformOn}) 
                    }}
                     id="card4" className="card" style={{backgroundImage: `url(${this.state.deck[4].imgUrl})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_5"}/> :
                        <noscript></noscript> }
                        <div id="textbox4" style={this.state.open4} >
                            <p>{this.state.deck[4].title}</p>
                            <p>{this.state.deck[4].description}</p>
                        </div>
                    </div>
                    <div
                    onClick={()=>{ 
                        this.state.open5.transform == 'translateY(0)' ? 
                        this.setState({open5 : transformOff}) :
                        this.setState({open5 : transformOn}) 
                    }}
                     id="card5" className="card" style={{backgroundImage: `url(${this.state.deck[5].imgUrl})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_6"}/> :
                        <noscript></noscript> }
                        <div id="textbox5" style={this.state.open5} >
                            <p>{this.state.deck[5].title}</p>
                            <p>{this.state.deck[5].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
}

export default Portfolio;