import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../../../auth/axiosWithAuth';

export default function VolunteerPickups() {

    useEffect(() => {
        axiosWithAuth()
            .get('/api/pickups/me')
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        
    }, [])

    return(
        <div>
            {/* loop through https://replate-eu.herokuapp.com/api/pickups/me */}
        </div>
    )
}