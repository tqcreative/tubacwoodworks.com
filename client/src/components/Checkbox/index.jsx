import React from 'react'
import './checkbox.css';
import UploadPhoto from '../../sub_component/UploadPhoto';
import PencilEdit from '../../sub_component/PencilEdit';
import axios from 'axios';

function Checkbox(props) {

    // props required to publish
    let backgroundImageForCheckbox = 'check_1.jpg';
    let nameOfImage = 'check_1'
    let uploadPhotoElement;
    let thisId = props.__id;
    let slotOne = props.textContent.slotOne;
    let slotTwo = props.textContent.slotTwo;
    let slotThree = props.textContent.slotThree;

    // check for signed in
    props.login === 'Peter' ?
    uploadPhotoElement = <UploadPhoto __parent_id={thisId} __parent_image_name={nameOfImage}/> :
    uploadPhotoElement = <noscript></noscript>

    // check for pencil edit
    props.login === 'Peter' ?
    uploadPhotoElement = <PencilEdit /> :
    uploadPhotoElement = <noscript></noscript>

    return (
        <div id={thisId} className="checkbox_root" style={{ backgroundImage: `url(/cms/images/${backgroundImageForCheckbox})`}}>
            {uploadPhotoElement}
            <div className="checkbox_wrap">

                <div id="checkerbox_quote_1">
                    <h3>{slotOne}</h3>
                    <div><ion-icon name="checkbox-outline"></ion-icon></div>
                </div>

                <div id="checkerbox_quote_2">
                    <h3>{slotTwo}</h3>
                    <div><ion-icon name="checkbox-outline"></ion-icon></div>
                </div>

                <div id="checkerbox_quote_3">
                    <h3>{slotThree}</h3>
                    <div><ion-icon name="checkbox-outline"></ion-icon></div>
                </div>

            </div>
        </div>
    )
}

export default Checkbox;