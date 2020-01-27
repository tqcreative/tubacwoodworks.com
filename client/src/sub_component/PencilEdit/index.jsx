import React from 'react';
import './pencilEdit.css';

export default function index(props) {

    function editThisThing() {
        alert('pencil pressed');
    };

    return (
        <div className="pencil_edit_root">
            <ion-icon name="create" onClick={editThisThing}></ion-icon>
        </div>
    )
}
