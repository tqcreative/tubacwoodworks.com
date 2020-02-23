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
         
        switch (props.boxNumber) {
            case 1:
                theTextObj.portfolio.box_1.title = h2Tag;
                theTextObj.portfolio.box_1.description = pTag;
                break;
            case 2:
                theTextObj.portfolio.box_2.title = h2Tag;
                theTextObj.portfolio.box_2.description = pTag;
                break;
            case 3:
                theTextObj.portfolio.box_3.title = h2Tag;
                theTextObj.portfolio.box_3.description = pTag;
                break;
            case 4:
                theTextObj.portfolio.box_4.title = h2Tag;
                theTextObj.portfolio.box_4.description = pTag;
                break;
            case 5:
                theTextObj.portfolio.box_5.title = h2Tag;
                theTextObj.portfolio.box_5.description = pTag;
                break;
            case 6:
                theTextObj.portfolio.box_6.title = h2Tag;
                theTextObj.portfolio.box_6.description = pTag;
            break;
            default:
                break;
        }


		// add to the new object we just created.
		
        props.theUpdateButton(theTextObj);
    }
    
    function editThisThing() {
        let tagH2 = prompt("Title", "Place Holder");
        let tagP = prompt("Description of this box", "Fantastic woodworking tips and tricks. Find out more in our Pro Tips section.");
        
        updatedObjectWithNewText(tagP, tagH2);

    };

    return (
        <div className="pencil_edit_root">
            <ion-icon name="create" onClick={editThisThing}></ion-icon>
        </div>
    )
}
