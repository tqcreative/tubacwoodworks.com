import React, { Component } from 'react';
import './style.css';
import axios from 'axios';

class ContactSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultsArr: [],
            searchString: "",
            dropdownClass: "dropdown-menu"
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.getSearchResults = this.getSearchResults.bind(this);
    }

    handleInputChange(event) {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
        if (event.target.name === "searchString") this.getSearchResults(event.target.value);
    };

    getSearchResults(queryString) {
        axios.get(`/api/customers/search?queryString=${queryString}`)
            .then(res => {
                this.setState({ 
                    resultsArr: res.data,
                    dropdownClass: res.data ? "dropdown-menu show" : "dropdown-menu"
                 })
            }).catch(err => {
                this.setState({ 
                    resultsArr: [], 
                    dropdownClass: "dropdown-menu"
                })
            })
    }

    render() {
        return (
            <div className="search_root">
                <form className="form-inline my-2 my-lg-0">
                    <div className="dropdown">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" name="searchString"
                            value={this.state.searchString} aria-label="Search" onChange={this.handleInputChange}
                        />
                        
                        <div className={this.state.dropdownClass} data-toggle="dropdown">
                            {this.state.resultsArr.map(result=>{
                                return <button key={result._id} className="dropdown-item" type="button">{result.firstName} {result.lastName}</button>
                            })}
                        </div>
                    </div>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default ContactSearch;