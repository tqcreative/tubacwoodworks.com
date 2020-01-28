import React from 'react';
import './pencilEdit.css';

export default function index(props) {

    
    function updatedObjectWithNewText(tagP) {
        // event.preventDefault();
        // theTextObject={props.theTextObj} theUpdateButton={theUpdateButton}
        //this.props.theTextObject;
        // get a copy of the text object we are storing in state.
        // console.log(props.theTextObj);
		 let theTextObj = props.theTextObject;
		// add to the new object we just created.
		theTextObj.hero.h2 = tagP;
        props.theUpdateButton(theTextObj);
    }
    
    function editThisThing() {
        let tagP = prompt("Brand Statment", "Tubac Woodworks Inc, building custom cabinetry, etertainment center, bookcases, desks, and a variety of other wood products for home, office, or business.");
        
        updatedObjectWithNewText(tagP);

    };

    return (
        <div className="pencil_edit_root">
            <ion-icon name="create" onClick={editThisThing}></ion-icon>
        </div>
    )
}
