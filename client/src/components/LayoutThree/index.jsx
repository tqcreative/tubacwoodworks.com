import React from 'react';
import UploadPhoto from '../../sub_component/UploadPhoto';
import './layoutThree.css';

export default function LayoutThree(props) {

    return (
        <div className="layout_three_root">
            <div className="image_wrap">    
                <div className="left">
                    <div className="image_1" style={{backgroundImage: `url(/cms/images/${props.image1}.jpg)`}}>
                    {
                            props.login === "Peter" ?
                            <UploadPhoto __parent_image_name={props.image1} />:
                            <noscript></noscript>
                        }
                    </div>
                </div>
                <div className="right">
                    <div className="img" style={{backgroundImage: `url(/cms/images/${props.image2}.jpg)`}}>
                        {
                            props.login === "Peter" ?
                            <UploadPhoto __parent_image_name={props.image2} />:
                            <noscript></noscript>
                        }
                        
                    </div>
                    <div className="img" style={{backgroundImage: `url(/cms/images/${props.image3}.jpg)`}}>
                    {
                            props.login === "Peter" ?
                            <UploadPhoto __parent_image_name={props.image3} />:
                            <noscript></noscript>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
