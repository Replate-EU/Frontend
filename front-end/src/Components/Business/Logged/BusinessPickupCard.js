import React from "react";
import edit from "../../../icons/edit.png";
import close from "../../../icons/close.png";
import moment from 'moment';

export default function BusinessPickupCard({ pickup, update, remove }) {
  const updatedPickupInfo = {
    ...pickup
  };
  console.log(moment(Number(pickup.pickup_time)).format("MMM Do, YYYY, HH:mm"));
  
  return (
    <div className="pickups">
      <div className="business-card-container">
        <a onClick={() => update(updatedPickupInfo)}>
          <img src={edit} />
        </a>
        <a onClick={() => remove(pickup.id)}>
          <img src={close} />
        </a>
      </div>
      <h3>Type: {pickup.food_type}</h3>
      <h3>Quantity: {pickup.quantity * 1000} g</h3>
      <h3>
        Preferred pickup time:
        {moment(Number(pickup.pickup_time)).format("MMM Do, YYYY, HH:mm")}
      </h3>
    </div>
  );
}
