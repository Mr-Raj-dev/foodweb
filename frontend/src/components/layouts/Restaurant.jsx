import React from "react";

export default function Restaurant() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          src="https://images.moneycontrol.com/static-mcnews/2022/11/Dominos-Pizza-653x435.jpg"
          alt="Dominos"
        />
        {/*heading and address*/}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Dominos Pizza</h5>
          <p className="rest_address">123 Street, place, City - 00000, State</p>
          {/* reviews and rating */}
          <div className="rating-outer">
            <div className="rating-inner"></div>
            <span id="no_of_reviews">(140 reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
