import React, { useEffect } from 'react';
// import axios from 'axios';
import BusinessPickupCard from './VolunteerPickupCard';
import styled from 'styled-components';
import {Field, ErrorMessage, Form, Formik} from 'formik';
import axiosWithAuth from './auth/axiosWithAuth';
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
export default function BusinessDashboard() {
    function handleSubmit(values) {
        axiosWithAuth()
    .post("/api/auth/pickups", values)
    .then(res => {
      console.log(res);
      
    })
    .catch(err => {
      console.log(err)
    })
    }
    
    const initialState = {
        food_type: '',
        pickup_time: '',
        // email: '',
        quantity: '',
    }
    const pickups = [
        {
            "Type": 1,
            "Quantity": "",
            "pickup_time": 1580553507239,
            "Volunteer": "",
            "completed": true,
            
        },
        {
            "Type": 1,
            "Quantity": "",
            "pickup_time": 1580553507239,
            "Volunteer": "",
            "completed": true,
            
        },
        {"Type": 1,
        "Quantity": "",
        "pickup_time": 1580553507239,
        "Volunteer": "",
        "completed": true,
        
        },
        {
            "Type": 1,
            "Quantity": "",
            "pickup_time": 1580553507239,
            "Volunteer": "",
            "completed": true,
            
        }
    ]
    return (
        <div>
        <Formik
        onSubmit={handleSubmit}
        // validationSchema={validationSchema}
        initialValues={initialState}
        >
          <Form className="form">
            <label>Type</label>
            <Field
            type="text"
            id="food_type"
            name="food_type"
            className="input"/>
            <ErrorMessage name="food_type" component="div" className="error"/>
            <label>Preferred time</label>
            <Field
            type="text"
            id="pickup_time"
            name="pickup_time"
            className="input"/>
            <ErrorMessage name="pickup_time" component="div" className="error"/>
            {/* <label>E-mail</label>
            <Field
            type="text"
            id="email"
            name="email"
            className="input"/>
            <ErrorMessage name="email" component="div" className="error"/> */}
            <label>Quantity</label>
            <Field
            type="text"
            id="quantity"
            name="quantity"
            className="input"/>
            <ErrorMessage name="quantity" component="div" className="error"/>
            <button classname="submit" type="submit">create new pickup</button>
          </Form>
        </Formik>
   
    {/* <Div>
         {pickups.map(pickup => {
             return(
                 <BusinessPickupCard pickup={pickup}/>
             )
         })}
     </Div>  */}
 </div>
 
 )

        
}