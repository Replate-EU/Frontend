import React from 'react';
import edit from '../../../icons/edit.png'
import close from '../../../icons/edit.png'

export default function BusinessPickupCard({pickup, update, delete}) {
    return(
        <div className="pickups">
            <div>
                <a onClick={}><img src={edit}/></a>
                <a onClick={}><img src={close}/></a>
            </div>
            <h3>Address:</h3>
            <h3>Type: {props.pickup.food_type}</h3>
            <h3>Quantity: {props.pickup.quantity} g</h3>
            <h3>Preferred pickup time: {props.pickup.pickup_time}</h3>
             <h3>Brand: {props.pickup.business_id}</h3> {/* business_id.name */}
             <a className="button2" onClick={addToList}>ACCEPT</a>
        </div>
    )
}