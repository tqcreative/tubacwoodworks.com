import React from 'react';
import './quote_two.css';
import UploadPhoto from '../../sub_component/UploadPhoto';
function QuoteTwo(props) {

    /*
        Next Step: Set so that the quote component can see how many quotes are being used on the page and fill its information based on that.
        Make an API call to fill quote from the database.
    */

    let uploadTool;
    
    ////////////////////
    // check for login
    // not yet secure, you can change the state from chrome tools.
    ////////////////////
    props.login === "Peter" ?
    uploadTool = <UploadPhoto __parent_id={thisId} __parent_image_name={backgroundImageName}/> :
    uploadTool = <noscript></noscript>

    //////////////
    // props / options
    // __id
    // backgroundImage
    //////////////

    //////////
    // Call variables for component
    //////////
    let thisId;
    let thisBackgroundImage;
    let backgroundImageName;

    /////////////
    // set variables based on props or default
    /////////////
    props.__id ?
    thisId = props.__id :
    thisId = null;

    props.backgroundImage ?
    thisBackgroundImage = props.backgroundImage :
    thisBackgroundImage = 'quote_1.jpg';

    // remove the .jpg from the background image.
    backgroundImageName = thisBackgroundImage.slice(0, thisBackgroundImage.indexOf('.jpg'));

    ////////////////////
    // whatever has the background should get the id
    ////////////////////

    // content fill from database
    let theH2 = props.textContent.h2;
    let theP = props.textContent.p;

    return (
        <div className="quote_two_root">
            {uploadTool}
            <div  id={thisId} className="background-img parallax" data-rellax-speed="-2" style={{backgroundImage: `url(https://bobwehadababyitsaboy.s3.eu-west-1.amazonaws.com/${thisBackgroundImage})`}}>
            </div>
            <div id="quote_2" className="quote_two">
                <ion-icon name="quote"></ion-icon>
                <p>
                    {theP}
                    <span>- "{theH2}"</span>
                </p>
            </div>
        </div>
    )
}

export default QuoteTwo;