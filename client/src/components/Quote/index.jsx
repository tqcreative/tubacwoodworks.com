import React from 'react'
import './quote.css';

function Quote() {
    return (
        <div className="quote_root">
            <div className="quote">
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

export default Quote;