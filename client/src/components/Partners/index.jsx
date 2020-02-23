import React from 'react'
import './partners.css';
import UploadPhoto from '../../sub_component/UploadPhoto';

function partners(props) {

    // make an API call to get data from the database and fill out the cards
let {partner_1, partner_2, partner_3, partner_text, login} = props.textContent;

login == 'Peter' ?
// console.log('logged in') : 
// console.log('not logged in');

    return (
        <div className="partners_root">
            <div className="partners_items_go_here">
                {/* This is placeholder content while the app loads */}
                <div id="partners_wrap" className="partners_deck" style={{ backgroundImage: `url(${partner_text.backgroundImage})` }}>

                    <div class="partner_pair">
                        <div id="partner_text" className="partner_card">
                            <h3>{partner_text.text}</h3>
                        </div>
                        <div id="partner_card_1" className="partner_card" style={{ backgroundImage: `url(${partner_1.picture})` }} onClick={() => {props.login === 'Peter' ? console.log('You must log out to click through to partner urls.') : window.open(partner_1.url) }}>
                            {props.login === 'Peter' ? <UploadPhoto __parent_image_name={"partner_1"} /> : <noscript></noscript>}
                            <div>
                                <h3>{partner_1.name}</h3>
                                <p>{partner_1.description}</p>
                            </div>
                        </div>
                    </div>

                    <div class="partner_pair">
                        <div id="partner_card_2" className="partner_card" style={{ backgroundImage: `url(${partner_2.picture})` }} onClick={() => {props.login === 'Peter' ? console.log('You must log out to click through to partner urls.') : window.open(partner_2.url) }}>
                            {props.login === 'Peter' ? <UploadPhoto __parent_image_name={"partner_2"} /> : <noscript></noscript>}
                            <div>
                            <h3>{partner_2.name}</h3>
                                <p>{partner_2.description}</p>
                            </div>
                        </div>
                        <div id="partner_card_3" className="partner_card" style={{ backgroundImage: `url(${partner_3.picture})` }} onClick={() => {props.login === 'Peter' ? console.log('You must log out to click through to partner urls.') : window.open(partner_3.url) }}>
                            {props.login === 'Peter' ? <UploadPhoto __parent_image_name={"partner_3"} /> : <noscript></noscript>}
                            <div>
                            <h3>{partner_3.name}</h3>
                                <p>{partner_3.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default partners;