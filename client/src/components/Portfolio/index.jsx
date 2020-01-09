import React, {Component} from 'react'
import './portfolio.css';
import axios from 'axios';

// build an object from our mongo database.
class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deck: [
                {
                    title: "Default 1",
                    link: "www.google.com",
                    imgUrl: ""
                },
                {
                    title: "Default 2",
                    link: "www.google.com",
                    imgUrl: ""
                },
                {
                    title: "Default 3",
                    link: "www.google.com",
                    imgUrl: ""
                },
                {
                    title: "Default 4",
                    link: "www.google.com",
                    imgUrl: ""
                },
                {
                    title: "Default 5",
                    link: "www.google.com",
                    imgUrl: ""
                },
                {
                    title: "Default 6",
                    link: "www.google.com",
                    imgUrl: ""
                }
            ]
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
            if (response.data[0].title){
                console.log(response);
                this.setState({
                    deck : response.data
                });
            }
        })
        .catch(error => {
            console.error(error);
        });
    }

    render() {
        return (
        <div className="portfolio_root">
            <div className="portfolio_items_go_here">
                {/* see portfolio.js file for more info */}
                {/* This is placeholder content while the app loads */}
                <div className="deck">
                    <div className="card" style={{background: `url(${this.state.deck[0].imgUrl})`}}><p>{this.state.deck[0].title}</p></div>
                    <div className="card" style={{background: `url(${this.state.deck[1].imgUrl})`}}><p>{this.state.deck[1].title}</p></div>
                    <div className="card" style={{background: `url(${this.state.deck[2].imgUrl})`}}><p>{this.state.deck[2].title}</p></div>
                    <div className="card" style={{background: `url(${this.state.deck[3].imgUrl})`}}><p>{this.state.deck[3].title}</p></div>
                    <div className="card" style={{background: `url(${this.state.deck[4].imgUrl})`}}><p>{this.state.deck[4].title}</p></div>
                    <div className="card" style={{background: `url(${this.state.deck[5].imgUrl})`}}><p>{this.state.deck[5].title}</p></div>
                </div>
            </div>
        </div>
        )}
}

export default Portfolio;