import React from 'react';
import './deleteButton.css';
import axios from 'axios';

// This component takes its a prop of the parents imageIndex and imageTable and then makes an axios call to the table and removes the item at that index.

// This needs to be a smart component so that it can store the file in state
function DeleteButton(props) {

    ////////////////////////
    // required props
    // __parent_image_name
    ////////////////////////

    /////////////////////////////////
    // to collect the image's name we 
    // will grab it from the id being passed.
    /////////////////////////////////

    };

    return (
        <div className="upload_img_root">
            <input type="file" name={this.props.__parent_image_name} onChange={this.uploadFileHandler} />
            <button type="button" className="button" onClick={this.submitPhotoForUpload}><ion-icon name="ios-save"></ion-icon></button>
        </div>
    )
}

export default DeleteButton;
// Notes: This component is positioned absolute top right and requires ion icons.
// Notes: The server will name the photo after it's original upload name. And is not friendly to "." in the names.