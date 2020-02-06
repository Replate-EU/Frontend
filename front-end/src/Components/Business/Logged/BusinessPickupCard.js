import React, { useState } from "react";
import edit from "../../../icons/edit.png";
import close from "../../../icons/close.png";
import moment from "moment";

export default function BusinessPickupCard({ pickup, update, remove }) {
  const [editing, setEditing] = useState(false);
  const [pickupData, setPickupData] = useState(pickup);

  function handleChange(e) {
    setPickupData({
      ...pickupData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    update(pickupData);
    setEditing(false);
  }

  console.log(moment(Number(pickup.pickup_time)).format("MMM Do, YYYY, HH:mm"));
  if (editing) {
    return (
      <div className="card-container">
        <div className="card--button_container">
          <button
            className="card--button--edit"
            onClick={() => setEditing(!editing)}
          >
            <img src={edit} />
          </button>
          <button
            className="card--button--edit"
            onClick={() => remove(pickup.id)}
          >
            <img src={close} />
          </button>
        </div>
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <label htmlFor="">
            Type
            <input type="text" name="food_type" value={pickupData.food_type} />
          </label>
          <label htmlFor="">
            Quantity
            <input
              type="text"
              name="pickup_time"
              value={pickupData.pickup_time}
            />
          </label>
          <label htmlFor="">
            Pickup time
            <input type="text" name="quantity" value={pickupData.quantity} />
          </label>
          <button type="submit">Submit changes</button>
        </form>
      </div>
    );
  }
  return (
    <div className="card-container">
      <div className="card--button_container">
        <button
          className="card--button--edit"
          onClick={() => setEditing(!editing)}
        >
          <img src={edit} />
        </button>
        <button
          className="card--button--edit"
          onClick={() => remove(pickup.id)}
        >
          <img src={close} />
        </button>
      </div>
      <p className="data-row">
        <span className="data-label">Type:</span>
        <span className="data-value">{pickup.food_type}</span>
      </p>
      <p className="data-row">
        <span className="data-label">Quantity:</span>
        <span className="data-value">{pickup.quantity * 1000} g</span>
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
    </div>
  );
}
