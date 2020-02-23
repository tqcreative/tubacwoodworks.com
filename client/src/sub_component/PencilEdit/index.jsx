import React from 'react';
import './pencilEdit.css';

export default function index(props) {

    
    function updatedObjectWithNewText(pTag, h2Tag){
        // event.preventDefault();
        // theTextObject={props.theTextObj} theUpdateButton={theUpdateButton}
        //this.props.theTextObject;
        // get a copy of the text object we are storing in state.
        console.log(props.theTextObj);
		 let theTextObj = props.theTextObject;
		// add to the new object we just created.
		theTextObj.quoteTop.h2 = h2Tag;
        theTextObj.quoteTop.p = pTag;
        props.theUpdateButton(theTextObj);
    }
    
    function editThisThing() {
        let tagP = prompt("Update the Quote here by just typing in what you want it to say", "This was amazing!");
        let tagH2 = prompt("by", "Matthew");
        
        updatedObjectWithNewText(tagP, tagH2);

    };

    return (
        <div className="pencil_edit_root">
            <ion-icon name="create" onClick={editThisThing}></ion-icon>
        </div>
    )
}
