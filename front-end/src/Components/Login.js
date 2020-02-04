import React, { useState } from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axiosWithAuth from '../auth/axiosWithAuth';

const Container = styled.div`
display: flex;
`
const Column = styled.div`
display: flex;
flex-flow: column;
align-items: center;
width: 49%;
`

export default function Login() {
    const [type, setType] = useState(true);

    const history = useHistory();

    const initialState = {
        
        username: '',
        
        // email: '',
        password: '',
        // user_type: 'volunteer',
      }
      
    
      function handleSubmit(values, actions) {
          // console.log(values);
          if(!type) {
            values.user_type = 'business';
          }
          // console.log(values.user_type);
          
          axiosWithAuth()
          .post("https://replate-eu.herokuapp.com/api/auth/login", values)
          .then(res => {
              console.log(res.data.token) 
              //should work, we'll see when api is posted

              // history.push(`/${res.data.user_type}/dashboard`);
          })
          .catch(err => {
              console.log(err)
          })
      }

      // function handleType() {
      //   setType(!type);
      // }

    return(
        <Container>

        <Column>
          <h1>Login</h1>
          <p>Thanks for your interest</p>
        </Column>
        <Column>
        <p>Log to Your Account</p>
        <Formik
        onSubmit={handleSubmit}
        // validationSchema={validationSchema}
        initialValues={initialState}
        >
          <Form className="form">

            {/* <label>{type ? 'Username' : 'Company Name' }</label> */}
            <label>Username</label>
            <Field
            type="text"
            id="username"
            name="username"
            className="input"/>
            <ErrorMessage name="username" component="div" className="error"/>

            {/* <label>E-mail</label>
            <Field
            type="text"
            id="email"
            name="email"
            className="input"/>
            <ErrorMessage name="email" component="div" className="error"/> */}

            <label>Password</label>
            <Field
            type="password"
            id="password"
            name="password"
            className="input"/>
            <ErrorMessage name="password" component="div" className="error"/>
            
            {/* <label>Account type: </label>
            <button type="button" onClick={handleType}>{type ? 'VOLUNTEER' : 'BUSINESS' }</button> */}
            
            {/* <ErrorMessage name="user_type" component="div" className="error"/> */}
          
            <button type="submit">LOGIN</button>
            

          </Form>
        </Formik>
        </Column>
        </Container>
    )
}