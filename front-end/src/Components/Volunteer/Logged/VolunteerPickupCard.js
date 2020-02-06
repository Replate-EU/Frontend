import React from 'react';


export default function VolunteerPickupCard(props) {
    console.log(props)

    function addToList() {
        //remove from available pickups
        // props.claimed_by = something
        //setState()
    }
    // console.log(props.data)
    return(
        <div className="pickups">
            <h3>Address:</h3>
            <h3>Type: {props.pickup.food_type}</h3>
            <h3>Quantity: {props.pickup.quantity} g</h3>
            <h3>Preferred pickup time: {props.pickup.pickup_time}</h3>
             <h3>Brand: {props.pickup.business_id}</h3> {/* business_id.name */}
             <a className="button2" onClick={addToList}>ACCEPT</a>
        </div>
    )
}   