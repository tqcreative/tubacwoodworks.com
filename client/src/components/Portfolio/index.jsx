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
                    title: "",
                    linkUrl: "",
                    imgUrl: ""
                },
                {
                    title: "",
                    linkUrl: "",
                    imgUrl: ""
                },
                {
                    title: "",
                    linkUrl: "",
                    imgUrl: ""
                },
                {
                    title: "",
                    linkUrl: "",
                    imgUrl: ""
                },
                {
                    title: "",
                    linkUrl: "",
                    imgUrl: ""
                },
                {
                    title: "",
                    linkUrl: "",
                    imgUrl: ""
                }
            ]
        }
    };

    axiosCall(){
        axios
        .get('/cms/portfolio_component', {
    
        })
        .then(response => {
            console.log(response.data[0].title);
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
                    <div className="card"><p>{  }</p></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
            </div>
        </div>
        )}
}

export default Portfolio;