import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './style.css';
import axios from 'axios';

class ContactSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultsArr: [],
            searchString: "",
            searchId: null,
            dropdownClass: "dropdown-menu",
            redirectPath: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.getSearchResults = this.getSearchResults.bind(this);
        this.getContact = this.getContact.bind(this);
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

    setSearchString(id, firstName, lastName){
        this.setState({
            searchString: `${firstName} ${lastName}`,
            searchId: id,
            dropdownClass: "dropdown-menu"
        })
    }

    getContact(event){
        event.preventDefault();
        if(this.state.searchId)
            window.location.href=`${this.props.hrefOnClick}/${this.state.searchId}`
    }

    render() {
        return (
            <div className="search_root">
                <form className="form-inline mx-sm-4 mx-lg-0 my-2 my-lg-0">
                    <div className="dropdown">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" name="searchString"
                            value={this.state.searchString} aria-label="Search" onChange={this.handleInputChange}
                        />
                        
                        <div className={this.state.dropdownClass} data-toggle="dropdown">
                            {this.state.resultsArr.map(result=>{
                                return( 
                                    <button key={result._id} className="dropdown-item" 
                                        type="button" onClick={(event)=>{event.preventDefault();this.setSearchString(result._id, result.firstName, result.lastName)}}
                                    >{result.firstName} {result.lastName}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.getContact}>Search</button>
                </form>
            </div>
        )
    }
}

export default ContactSearch;