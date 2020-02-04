import React, { useEffect } from 'react';
import axios from 'axios';
import VolunteerPickupCard from './VolunteerPickupCard';
import styled from 'styled-components';

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
        <div>
           <Div>
                {pickups.map(pickup => {
                    return(
                        <VolunteerPickupCard pickup={pickup}/>
                    )
                })}
            </Div> 
        </div>
    )
}