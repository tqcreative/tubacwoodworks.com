import React from 'react'
import './partners.css';
import UploadPhoto from '../../sub_component/UploadPhoto';

function partners(props) {

    // make an API call to get data from the database and fill out the cards

    return (
        <div className="partners_root">
            <div className="partners_items_go_here">
                {/* This is placeholder content while the app loads */}
                <h2>Visit Our Partners</h2>
                <div className="partners_deck">
                    <div id="partner_card_1" className="partner_card" style={{backgroundImage: `url(/cms/images/partner_1.jpg)`}}>
                        {props.login === 'Peter' ? <UploadPhoto __parent_image_name={"partner_1"}/> : <noscript></noscript> }
                    </div>
                    <div id="partner_card_2" className="partner_card" style={{backgroundImage: `url(/cms/images/partner_2.jpg)`}}>
                        {props.login === 'Peter' ? <UploadPhoto __parent_image_name={"partner_2"}/> : <noscript></noscript> } 
                    </div>
                    <div id="partner_card_3" className="partner_card" style={{backgroundImage: `url(/cms/images/partner_3.jpg)`}}>
                        {props.login === 'Peter' ? <UploadPhoto __parent_image_name={"partner_3"}/> : <noscript></noscript> } 
                    </div>
                    <div id="partner_card_4" className="partner_card" style={{backgroundImage: `url(/cms/images/partner_4.jpg)`}}>
                        {props.login === 'Peter' ? <UploadPhoto __parent_image_name={"partner_4"}/> : <noscript></noscript> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default partners;