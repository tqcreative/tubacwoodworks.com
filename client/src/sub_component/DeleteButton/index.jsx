import React from 'react';
import './deleteButton.css';
import axios from 'axios';

// This component takes its a prop of the parents imageIndex and imageTable and then makes an axios call to the table and removes the item at that index.

// This needs to be a smart component so that it can store the file in state
function DeleteButton(props) {

    ////////////////////////
    // required props
    // props are passed to the delete button from the ImageCard component
    // imageIndexNumber
    // imageIsInTable
    ////////////////////////

    const deleteThisItemFromThisArray = () => {
        console.log(props);
    }

    return (
        <div className="delete_button_root">
            <button type="button" className="button" onClick={deleteThisItemFromThisArray}><ion-icon name="ios-trash"></ion-icon></button>
        </div>
    )
}

export default DeleteButton;
// Notes: This component is positioned absolute top right and requires ion icons.
// Notes: The server will name the photo after it's original upload name. And is not friendly to "." in the names.