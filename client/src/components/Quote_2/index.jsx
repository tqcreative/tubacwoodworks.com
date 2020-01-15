import React from 'react'
import './quote_two.css';

function QuoteTwo() {

    /*
        Next Step: Set so that the quote component can see how many quotes are being used on the page and fill its information based on that.
        Make an API call to fill quote from the database.
    */

    return (
        <div className="quote_two_root">
            <div className="background-img parallax" data-rellax-speed="-2"></div>
            <div id="quote_2" className="quote_two">
                <ion-icon name="quote"></ion-icon>
                <p>
                    Tuboc Woodworks is the bee's knees. 
                    They did such an amazing job!
                    <span>- "Matthew"</span>
                </p>
            </div>
        </div>
    )
}

export default QuoteTwo;