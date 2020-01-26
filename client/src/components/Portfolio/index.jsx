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
            lastItemUpdated: null
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
        return (
        <div className="portfolio_root">
            <div className="portfolio_items_go_here">
                <div className="deck">
                    <div id="card0" className="card" style={{backgroundImage: `url(${this.state.deck[0].imgUrl})`}}>
                        {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_1"}/> :
                        <noscript></noscript> }
                        <div id="textbox0">
                            <p>{this.state.deck[0].title}</p>
                            <p>{this.state.deck[0].description}</p>
                        </div>
                    </div>
                    <div id="card1" className="card" style={{backgroundImage: `url(${this.state.deck[1].imgUrl})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_2"}/> :
                        <noscript></noscript> }
                        <div id="textbox1">
                            <p>{this.state.deck[1].title}</p>
                            <p>{this.state.deck[1].description}</p>
                        </div>
                    </div>
                    <div id="card2" className="card" style={{backgroundImage: `url(${this.state.deck[2].imgUrl})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_3"}/> :
                        <noscript></noscript> }
                        <div id="textbox2">
                            <p>{this.state.deck[2].title}</p>
                            <p>{this.state.deck[2].description}</p>
                        </div>
                    </div>
                    <div id="card3" className="card" style={{backgroundImage: `url(${this.state.deck[3].imgUrl})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_4"}/> :
                        <noscript></noscript> }
                        <div id="textbox3">
                            <p>{this.state.deck[3].title}</p>
                            <p>{this.state.deck[3].description}</p>
                        </div>
                    </div>
                    <div id="card4" className="card" style={{backgroundImage: `url(${this.state.deck[4].imgUrl})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_5"}/> :
                        <noscript></noscript> }
                        <div id="textbox4">
                            <p>{this.state.deck[4].title}</p>
                            <p>{this.state.deck[4].description}</p>
                        </div>
                    </div>
                    <div id="card5" className="card" style={{backgroundImage: `url(${this.state.deck[5].imgUrl})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_6"}/> :
                        <noscript></noscript> }
                        <div id="textbox5">
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