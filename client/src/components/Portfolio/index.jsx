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
                    imgUrl: `${portfolioImagePath}portfolio_1.JPG`
                },
                {
                    title: "Furniture",
                    link: "#",
                    imgUrl: `${portfolioImagePath}portfolio_2.JPG`
                },
                {
                    title: "Custom Cabinets",
                    link: "#",
                    imgUrl: `${portfolioImagePath}portfolio_3.JPG`
                },
                {
                    title: "Kitchen",
                    link: "#",
                    imgUrl: `${portfolioImagePath}portfolio_4.JPG`
                },
                {
                    title: "Counters",
                    link: "#",
                    imgUrl: `${portfolioImagePath}portfolio_5.JPG`
                },
                {
                    title: "Islands",
                    link: "#",
                    imgUrl: `${portfolioImagePath}portfolio_6.JPG`
                }
            ]
        }
    };

    componentWillMount(){
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
                {/* see portfolio.js file for more info */}
                {/* This is placeholder content while the app loads */}
                <div className="deck">
                    <div className="card" style={{backgroundImage: `url(${this.state.deck[0].imgUrl})`}}>
                        {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_1"}/> :
                        <noscript></noscript> }
                        <p>{this.state.deck[0].title}</p>
                    </div>
                    <div className="card" style={{backgroundImage: `url(${this.state.deck[1].imgUrl})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_2"}/> :
                        <noscript></noscript> }
                        <p>{this.state.deck[1].title}</p>
                    </div>
                    <div className="card" style={{backgroundImage: `url(${this.state.deck[2].imgUrl})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_3"}/> :
                        <noscript></noscript> }
                        <p>{this.state.deck[2].title}</p>
                    </div>
                    <div className="card" style={{backgroundImage: `url(${this.state.deck[3].imgUrl})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_4"}/> :
                        <noscript></noscript> }
                        <p>{this.state.deck[3].title}</p>
                    </div>
                    <div className="card" style={{backgroundImage: `url(${this.state.deck[4].imgUrl})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_5"}/> :
                        <noscript></noscript> }
                        <p>{this.state.deck[4].title}</p>
                    </div>
                    <div className="card" style={{backgroundImage: `url(${this.state.deck[5].imgUrl})`}}>
                    {this.props.login === 'Peter' ?
                        <UploadPhoto __parent_image_name={"portfolio_6"}/> :
                        <noscript></noscript> }
                        <p>{this.state.deck[5].title}</p>
                    </div>
                </div>
            </div>
        </div>
        )}
}

export default Portfolio;