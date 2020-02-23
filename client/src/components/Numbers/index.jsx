import React from 'react'
import './numbers.css';

function Numbers () {

    let todaysDate = new Date();
    let theYear = todaysDate.getFullYear();

    return (
        <div className="numbers_root">

            {/* left box */}
            <div className="left_box">
                <div>
                    <ion-icon className="ion-icon" name="cash"></ion-icon>
                    <p>Affordable</p>
                </div>
                <div>
                    <ion-icon className="ion-icon" name="calendar"></ion-icon>
                    {theYear > 2020 ? <p>Over 40 years <span>in the industry</span></p> : <p>39+ Years <span>in the industry</span></p>}
                </div>
            </div>

            {/* right box */}
            <div className="right_box">
                <div>
                    <ion-icon className="ion-icon" name="clipboard"></ion-icon>
                    <p>Licensed Bonded <span>Insured</span></p>
                </div>
                <div>
                    <ion-icon className="ion-icon" name="construct"></ion-icon>
                    <p>Custom</p>
                </div>
            </div>


        </div>
    )
}

export default Numbers;