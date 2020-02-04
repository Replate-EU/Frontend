import React from 'react';
import styled from 'styled-components';

const Pickup = styled.a`
background: red;
color: black;
width: 29%;
margin: 10px;
`

export default function VolunteerPickupCard(props) {
    console.log(props)

    function addToList() {
        //remove from available pickups
        // props.claimed_by = something
        //setState()
    }
    // console.log(props.data)
    return(
        <Pickup href="" onClick={addToList}>
            <h4>Address:</h4>
            <p>type: {props.pickup.food_type}</p>
            <p>quantity: {props.pickup.quantity}</p>
            <p>Preferred pickup time: {props.pickup.pickup_time}</p>
             <p>Business: {props.pickup.business_id}</p> {/* business_id.name */}
        </Pickup>
    )
}   