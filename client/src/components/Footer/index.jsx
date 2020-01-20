import React from 'react';
import './footer.css';

function Footer(props) {
    return (
        <div className="footer_root">
            <div className="footer_wrap">
                <div className="top_wrap">
                    <div></div>
                </div>
                <div className="mid_wrap">
                    <div>
                        <div className="footer_section_1">
                            <h3>Contact Us</h3>
                            <ul>
                                <li><ion-icon name="compass"></ion-icon> 25700 S Via Montana Vista, Green Valley, AZ 85622</li>
                                <li><a href="tel:5206250050"><ion-icon name="ios-call"></ion-icon> (520)625-0050</a></li>
                                <li><a href="mailto:info@tubacwoodworks.com"><ion-icon name="mail"></ion-icon> info@tubacwoodworks.com</a></li>
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
                                <li><a href="facebook.com"><ion-icon name="logo-facebook"></ion-icon></a></li>
                                <li><a href="instagram.com"><ion-icon name="logo-instagram"></ion-icon></a></li>
                                <li><a href="twitter.com"><ion-icon name="logo-twitter"></ion-icon></a></li>
                            </ul>

                            <ul>
                                <li><a href="/crm"><ion-icon name="ios-person"></ion-icon> <h4>login</h4></a></li>
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

export default Footer;