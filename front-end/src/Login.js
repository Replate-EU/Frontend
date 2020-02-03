import React, { useState } from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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
    const [check, setCheck] = useState(true);

    const initialState = {
        
        username: '',
        contact_number: '',
        // email: '',
        password: '',
        user_type: false,
      }
      
    
      function handleSubmit(values, actions) {
          console.log(values);

          axios
          .get("https://replate-eu.herokuapp.com/")
          .then(res => {
              console.log(res)
          })
          .catch(err => {
              console.log(err)
          })
      }

      function handleCheck() {
        setCheck(!check);
      }

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

          {/* <label>Name</label>
            <Field
            type="text"
            id="name"
            name="name"
            className="input"/>
            <ErrorMessage name="name" component="div" className="error"/> */}

            <label>{check ? 'Username' : 'Company Name' }</label>
            <Field
            type="text"
            id="username"
            name="username"
            className="input"/>
            <ErrorMessage name="username" component="div" className="error"/>

            {/* <label>Phone</label>
            <Field
            type="tel"
            id="contact_number"
            name="contact_number"
            className="input"/>
            <ErrorMessage name="contact_number" component="div" className="error"/> */}

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
            
        <label>User Type: {check ? 'VOLUNTEER' : 'BUSINESS' }</label>
            <Field
            type="checkbox"
            id="user_type"
            name="user_type"
            className="input"
            onChange={handleCheck}
            />
            <ErrorMessage name="user_type" component="div" className="error"/>
            {/* <label>Repeat password</label>
            <Field
            type="password"
            id="repeat_password"
            name="repeat_password"
            className="input"/>
            <ErrorMessage name="repeat_password" component="div" className="error"/> */}
            <button type="submit">Continue</button>
            

          </Form>
        </Formik>
        </Column>
        </Container>
    )
}