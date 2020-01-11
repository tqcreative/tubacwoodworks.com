import React, {Component} from 'react';
import './style.css';
import Contact from '../Contact';
import ContactSearch from '../ContactSearch';

class ContactWrapper extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            id:props.id
        }
    }

    render(){
        return(
            <div>
                <ContactSearch hrefOnClick="/crm/customer" />
                <Contact id={this.state.id}/>
            </div>
        )
    }
}

export default ContactWrapper;