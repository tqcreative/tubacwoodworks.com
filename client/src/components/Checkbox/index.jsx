import React from 'react'
import './checkbox.css';
import UploadPhoto from '../../sub_component/UploadPhoto';

function Checkbox(props) {

    // props required to publish
    let backgroundImageForCheckbox = 'check_1.jpg';
    let nameOfImage = 'check_1'
    let uploadPhotoElement;
    let thisId = props.__id;

    // check for signed in
    props.login === 'Peter' ?
    uploadPhotoElement = <UploadPhoto __parent_id={thisId} __parent_image_name={nameOfImage}/> :
    uploadPhotoElement = <noscript></noscript>

    return (
        <div id={thisId} className="checkbox_root" style={{ backgroundImage: `url(/cms/images/${backgroundImageForCheckbox})`}}>
            {uploadPhotoElement}
            <div className="checkbox_wrap">

                <div id="checkerbox_quote_1">
                    <h3>trusted</h3>
                    <div></div>
                </div>

                <div id="checkerbox_quote_2">
                    <h3>quality</h3>
                    <div></div>
                </div>

                <div id="checkerbox_quote_3">
                    <h3>innovation</h3>
                    <div></div>
                </div>

            </div>
        </div>
    )
}

export default Checkbox;