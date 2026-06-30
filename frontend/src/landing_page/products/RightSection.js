import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
}) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6 p-5" style={{marginTop:"110px"}}>
            <h2>{productName}</h2>
            <p className="text-muted">{productDescription}</p>
        </div>
        <div className="col-6">
            <img src={imageURL}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
