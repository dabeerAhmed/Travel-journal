import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`../images/${props.item.image}`} className="card-img" />
      <div className="card-info">
        <div className="card-loc">
          <span className="card-location">{props.item.location}</span>
          <a
            href={props.item.googleMapsUrl}
            className="card-map"
            target="_blank"
          >
            View on Google Maps
          </a>
        </div>
        <h1 className="card-title">{props.item.title}</h1>
        <span className="card-date">
          {props.item.startDate} - {props.item.endDate}
        </span>
        <p className="card-description">{props.item.description}</p>
      </div>
    </div>
  );
}
("");
