import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6 p-5">
            <img src={imageURL}/>
        </div>
        <div className="col-6 p-5 mt-5">
            <h2>{productName}</h2>
            <p className="text-muted">{productDescription}</p>
            <a href={googlePlay}><img src="media/image/googlePlayBadge.svg"/></a>
            <a href={appStore}><img src="media/image/appstoreBadge.svg"/></a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
