import React from "react";
import "./herosmart.css";
import UploadPhoto from "../../sub_component/UploadPhoto";

function HeroSmart(props) {
  return (
    <div className="herosmart_root">
      <div
        className="parallax"
        data-rellax-speed="-10"
        style={{
          backgroundImage: `url(${props.backgroundName})`,
        }}
      ></div>
      <span>
        {props.login === "Peter" ? (
          <UploadPhoto __parent_image_name={props.backgroundName} />
        ) : (
          <noscript></noscript>
        )}
      </span>
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
      </div>
    </div>
  );
}

export default HeroSmart;
