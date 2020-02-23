import React from 'react';
import './layoutBasic.css';

export default function LayoutBasic(props) {
    
    //
    // This component is going to be handed 2 props
    // a title for the h2
    // and content for the paragraph
    // optional paragraph 2 and 3
    // prop names
    // h2Tag
    // pTag
    // pTag2
    // pTag3

    let titleProp;
    let paragraphProp;
    let paragraphProp2;
    let paragraphProp3;

    // check for title first
    props.h2Tag ?
    titleProp = props.h2Tag :
    titleProp = ``;

    // check for first paragraph 
    props.pTag  ?
    paragraphProp = props.pTag :
    paragraphProp = ``;

    // check for first paragraph 
    props.pTag2  ?
    paragraphProp2 = props.pTag2 :
    paragraphProp2 = ``;

    // check for first paragraph 
    props.pTag3  ?
    paragraphProp3 = props.pTag3 :
    paragraphProp3 = ``;

    // return the final product
    return (
        <div className="layout_basic_root">
            <div>
                <h2>{titleProp}</h2>
                <p>{paragraphProp}</p>
                <p>{paragraphProp2}</p>
                <p>{paragraphProp3}</p>
            </div>
        </div>
    )
}