import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center p-5">
        <h2>The Zerodha Universe</h2>
        <p className="text-muted p-2">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-5">
          <img
            src="media/image/goldenpiLogo.png"
            className="img-fluid w-50"
            alt="GoldenPi"
          />
        </div>

        <div className="col-4 p-5">
          <img
            src="media/image/sensibullLogo.svg"
            className="img-fluid w-50"
            alt="Sensibull"
          />
        </div>

        <div className="col-4 p-5">
          <img
            src="media/image/smallcaseLogo.png"
            className="img-fluid w-50"
            alt="Smallcase"
          />
        </div>
        <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up For Free
        </button>
      </div>
    </div>
  );
}

export default Universe;
