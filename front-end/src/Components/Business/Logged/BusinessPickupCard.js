import React from 'react';
import edit from '../../../icons/edit.png'
import close from '../../../icons/close.png'

export default function BusinessPickupCard({pickup, update, delete}) {
    return(
        <div className="pickups">
            <div className="business-card-container">
                <a><img src={edit}/></a>
                <a ><img src={close}/></a>
            </div>
            <h3>Address:</h3>
            <p><h3>Type: </h3> {props.pickup.food_type}</p>
            <p><h3>Quantity: </h3> {props.pickup.quantity * 1000} g</p>
            <p><h3>Preferred pickup time: </h3> {props.pickup.pickup_time}</p>
            <p><h3>Brand: </h3> {props.pickup.business_id}</p> {/* business_id.name */}
        </div>
    )
}
