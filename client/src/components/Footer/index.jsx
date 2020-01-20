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
                        <div>
                            <div className="footer_section_1">
                                <h3>Contact Us</h3>
                                <ul>
                                    <li><ion-icon name="compass"></ion-icon> 25700 S Via Montana Vista, Green Valley, AZ 85622</li>
                                    <li><a href="tel:5206250050"><ion-icon name="call"></ion-icon> (520)625-0050</a></li>
                                    <li><ion-icon name="mail"></ion-icon> info@tubacwoodworks.com</li>
                                </ul>
                            </div>
                            <div className="footer_section_2">
                                <h3>Business Hours</h3>
                                <ul>
                                    <li><ion-icon name="calendar"></ion-icon> Mon-Fri: 9:00am &#8212; 5:00pm</li>
                                    <li><ion-icon name="calendar"></ion-icon> Sat: By appointment only</li>
                                    <li><ion-icon name="calendar"></ion-icon> Sun: Closed</li>
                                </ul>
                            </div>
                            <div className="footer_section_3">
                                <h3>Share</h3>
                                <ul>
                                    <li><ion-icon name="logo-facebook"></ion-icon></li>
                                    <li><ion-icon name="logo-instagram"></ion-icon></li>
                                    <li><ion-icon name="logo-twitter"></ion-icon></li>
                                </ul>

                                <ul>
                                    <li><a href="/crm"><ion-icon name="ios-person"></ion-icon></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bottom_wrap">
                        <p className="legal">Copyright &copy; 2019 Tubac Woodworks, Inc. All rights reserved.</p>
                    </div>
                </div>
            </div>
        )
    }
}