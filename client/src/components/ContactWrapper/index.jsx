import React, {Component} from 'react';
import './style.css';
import Contact from '../Contact';

class ContactWrapper extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Contact _id="5e128404f5bcfb51402e972c"/>
            </div>
        )
    }
}

export default ContactWrapper;