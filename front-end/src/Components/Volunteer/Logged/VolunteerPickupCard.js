import React from 'react';
import styled from 'styled-components';

const Pickup = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
background: white;
box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
color: rgba(31, 32, 65, 0.7);
width: 30%;
margin: 10px;
`
const Button = styled.a`
    background: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);
    border: 1px solid rgba(31, 32, 65, 0.5);
    border-radius: 22px;
    padding: 10px 100px;
    margin-bottom: 10px;
    font-weight: bold;
    color: white;
    cursor: pointer;
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
        <Pickup>
            <h3>Address:</h3>
            <h3>Type: {props.pickup.food_type}</h3>
            <h3>Quantity: {props.pickup.quantity} g</h3>
            <h3>Preferred pickup time: {props.pickup.pickup_time}</h3>
             <h3>Brand: {props.pickup.business_id}</h3> {/* business_id.name */}
             <Button onClick={addToList}>ACCEPT</Button>
        </Pickup>
    )
}   