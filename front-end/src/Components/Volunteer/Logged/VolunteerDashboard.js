import React, { useEffect, useState } from 'react';
import VolunteerPickupCard from './VolunteerPickupCard';
import styled from 'styled-components';
import axiosWithAuth from '../../../auth/axiosWithAuth';

const Div = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-between;
`

export default function VolunteerDashboard() {
    const [pickups, setPickups] = useState([]);


    //get info about how to make token percist
    useEffect(() => {
        axiosWithAuth()
            .get('/api/pickups')
            .then(res => {
                setPickups(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            // .post('/api/pickups/me')
        
    }, [])

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