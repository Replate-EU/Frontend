import React from "react";
import moment from "moment";

export default function VolunteerPickupCard({
  pickup,
  handleAction,
  sad,
  user_id
}) {
  const acceptedPickup = sad
    ? {
        ...pickup,
        claimed_by: null
      }
    : {
        ...pickup,
        claimed_by: user_id
      };
  return (
    <div className="card-container">
      <p className="card--title">Pickup</p>
      <p className="data-row">
        <span className="data-label">Type:</span>
        <span className="data-value">{pickup.food_type}</span>
      </p>
      <p className="data-row">
        <span className="data-label">Quantity:</span>
        <span className="data-value">{pickup.quantity * 1000}g</span>
      </p>
      <p className="data-row">
        <span className="data-label">Pickup time:</span>
        <span className="data-value">
          {moment(Number(pickup.pickup_time)).format("MMM Do, YYYY, HH:mm")}
        </span>
      </p>
      <p className="data-row">
        <span className="data-label">Accepted:</span>
        <span className="data-value">
          {pickup.claimed_by
            ? "Yes! We'll pick it up shortly!"
            : "No, but it will be soon!"}{" "}
        </span>
      </p>
      {sad ? (
        <button
          className="button-big button-danger"
          onClick={() => handleAction(acceptedPickup)}
        >
          Abandon
        </button>
      ) : (
        <button
          className="button-big button-secondary"
          onClick={() => handleAction(acceptedPickup)}
        >
          Accept
        </button>
      )}
    </div>
  );
}
