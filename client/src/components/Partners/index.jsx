import React from 'react'
import './partners.css';

function partners() {

    // make an API call to get data from the database and fill out the cards

    return (
        <div className="partners_root">
            <div className="partners_items_go_here">
                {/* This is placeholder content while the app loads */}
                <div className="partners_deck">
                    <div id="partner_card_1" className="partner_card"></div>
                    <div id="partner_card_2" className="partner_card"></div>
                    <div id="partner_card_3" className="partner_card"></div>
                    <div id="partner_card_4" className="partner_card"></div>
                </div>
            </div>
        </div>
    )
}

export default partners;