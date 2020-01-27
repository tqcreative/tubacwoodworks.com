import React from 'react'
import './partners.css';
import UploadPhoto from '../../sub_component/UploadPhoto';

function partners(props) {

    // make an API call to get data from the database and fill out the cards

    return (
        <div className="partners_root">
            <div className="partners_items_go_here">
                {/* This is placeholder content while the app loads */}
                <div id="partners_wrap" className="partners_deck" style={{ backgroundImage: `url(/cms/images/partners_0.jpg)` }}>

                    <div class="partner_pair">
                        <div id="partner_text" className="partner_card">
                            <h3>take a look at our partners</h3>
                        </div>
                        <div id="partner_card_1" className="partner_card" style={{ backgroundImage: `url(/cms/images/partner_1.jpg)` }}>
                            {props.login === 'Peter' ? <UploadPhoto __parent_image_name={"partner_1"} /> : <noscript></noscript>}
                            <div>
                                <h3>partner name</h3>
                                <p>what they do</p>
                            </div>
                        </div>
                    </div>

                    <div class="partner_pair">
                        <div id="partner_card_2" className="partner_card" style={{ backgroundImage: `url(/cms/images/partner_2.jpg)` }}>
                            {props.login === 'Peter' ? <UploadPhoto __parent_image_name={"partner_2"} /> : <noscript></noscript>}
                            <div>
                                <h3>partner name</h3>
                                <p>what they do</p>
                            </div>
                        </div>
                        <div id="partner_card_3" className="partner_card" style={{ backgroundImage: `url(/cms/images/partner_3.jpg)` }}>
                            {props.login === 'Peter' ? <UploadPhoto __parent_image_name={"partner_3"} /> : <noscript></noscript>}
                            <div>
                                <h3>partner name</h3>
                                <p>what they do</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default partners;