import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../../../auth/axiosWithAuth';
import styled from 'styled-components';
import VolunteerPickupCard from './VolunteerPickupCard';

const Div = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-between;
`

export default function VolunteerPickups() {
    const [myPickups, setMyPickups] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/api/pickups/me')
            .then(res => {
                console.log(res.data)
                //setMyPickups(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        
    }, [])

    return(
        <div>
            {/* <Div>
                {myPickups.map(pickup => {
                    return(
                        <VolunteerPickupCard pickup={pickup}/>
                    )
                })}
            </Div>  */}
        </div>
    )
}