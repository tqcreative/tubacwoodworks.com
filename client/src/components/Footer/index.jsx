import React, { Component } from 'react'
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer_root">
                <div className="footer_wrap">
                    <div className="top_wrap">
                        <div><p>this will contain a user log in</p></div>
                    </div>
                    <div className="mid_wrap">
                        <div><p>this will be four sections of links</p></div>
                    </div>
                    <div className="bottom_wrap">
                        <p className="legal">Copyright &copy; 2019 Tubac Woodworks, Inc. All rights reserved.</p>
                    </div>
                </div>
            </div>
        )
    }
}