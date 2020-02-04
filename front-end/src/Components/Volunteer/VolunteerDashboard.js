import React, { useEffect } from 'react';
import axios from 'axios';
import VolunteerPickupCard from './VolunteerPickupCard';
import styled from 'styled-components';

const Pickup = styled.div`
background: red;
width: 30%;
margin: 10px;
`

const Div = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-between;
`

export default function VolunteerDashboard() {

    const pickups = [
        {
            "id": 1,
            "food_type": "doughnuts",
            "pickup_time": 1580553507239,
            "quantity": 0.5,
            "completed": true,
            "business_id": 2,
            "claimed_by": 1
        },
        {
            "id": 2,
            "food_type": "fries",
            "pickup_time": 1580553507239,
            "quantity": 0.5,
            "completed": true,
            "business_id": 2,
            "claimed_by": 1
        },
        {
            "id": 3,
            "food_type": "chicken",
            "pickup_time": 1580553507239,
            "quantity": 0.5,
            "completed": false,
            "business_id": 2,
            "claimed_by": null
        },
        {
            "id": 4,
            "food_type": "watermelon",
            "pickup_time": 1580553507239,
            "quantity": 0.5,
            "completed": false,
            "business_id": 2,
            "claimed_by": null
        },
        {
            "id": 5,
            "food_type": "cookies",
            "pickup_time": 1580553507239,
            "quantity": 0.5,
            "completed": false,
            "business_id": 2,
            "claimed_by": null
        }
    ]

    return (
        <Div>
            {pickups.map(pickup => {
                return(
                    <Pickup>
                        <h2> </h2>
                        <p>type: {pickup.food_type}</p>
                        <p>quantity: {pickup.quantity}</p>
                        <p>Preferred pickup time:{pickup.pickup_time}</p>
                        <p>Business: {pickup.business_id}</p>
                    </Pickup>
                )
            })}
        </Div>
    )
}