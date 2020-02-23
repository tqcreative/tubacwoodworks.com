import React from 'react'
import './numbers.css';

function Numbers () {
    return (
        <div className="numbers_root">

            {/* left box */}
            <div className="left_box">
                <div>
                    <ion-icon name="cash"></ion-icon>
                    <p>Afordable</p>
                </div>
                <div>
                    <ion-icon name="calendar"></ion-icon>
                    <p>39+ Years <span>in the industry</span></p>
                </div>
            </div>

            {/* right box */}
            <div className="right_box">
                <div>
                    <ion-icon name="clipboard"></ion-icon>
                    <p>Licensed Bonded <span>Insured</span></p>
                </div>
                <div>
                    <ion-icon name="construct"></ion-icon>
                    <p>Custom</p>
                </div>
            </div>


        </div>
    )
}

export default Numbers;