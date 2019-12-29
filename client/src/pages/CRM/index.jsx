import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import './style.css';

class CRM extends Component {
    render() {
        return (
            <div className="crm_root">
                <div className="top_root"></div>
                <div className="bottom_root">
                    <div className="left_root"></div>
                    <div className="right_root"></div>
                </div>
            </div>
        )
    }
}

export default CRM
