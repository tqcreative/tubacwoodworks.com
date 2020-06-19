import React from "react";
import "./numbers.css";

function Numbers() {
  const startYear = 1981;
  const startMonth = 3;
  const todaysDate = new Date();
  const theYear = todaysDate.getFullYear();
  const theMonth = todaysDate.getMonth();

  const yearsInBusiness =
    theMonth >= startMonth ? 1 + theYear - startYear : theYear - startYear;

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
          <p>
            {yearsInBusiness}+ years <span>in the industry</span>
          </p>
        </div>
      </div>

      {/* right box */}
      <div className="right_box">
        <div title="ROC# 223133" onClick={() => {alert("ROC# 223133")}}>
          <ion-icon
            className="ion-icon"
            name="clipboard"
            title="ROC# 223133"
          ></ion-icon>
          <p title="ROC# 223133">
            Licensed Bonded <span>Insured</span>
          </p>
        </div>
        <div>
          <ion-icon className="ion-icon" name="construct"></ion-icon>
          <p>Custom</p>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
