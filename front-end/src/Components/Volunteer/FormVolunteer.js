import React from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage, label } from 'formik';
import * as Yup from 'yup';
import axiosWithAuth from '../../auth/axiosWithAuth';

const Container = styled.div`
display: flex;
`
const Column = styled.div`
display: flex;
flex-flow: column;
align-items: center;
width: 49%;
`

export default function FormBusiness() {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('please enter your name'),
        username: Yup.string().required('please enter your name'),
        contact_number: Yup.string().matches(phoneRegExp, 'phone number is not valid').required('please enter a phone number'),
        password: Yup.string().required('please enter a password'),
        repeat_password: Yup.string().oneOf([Yup.ref('password'), null], 'passwords must match')
      });

      const history = useHistory();
      const goToLogin = () => { 
        history.push("/login");
      }
    
      const initialState = {
        name: '',
        username: '',
        contact_number: '',
        // email: '',
        password: '',
        repeat_password: '',
      }
    
      function handleSubmit(values, actions) {
        // console.log(values);
        // console.log(actions);
        const allValues = {
          ...values,
          
          user_type: 'volunteer',
        }
        delete allValues.repeat_password;
        // console.log(allValues);

        axiosWithAuth()
        .post('/api/auth/register', allValues)
        .then(res => {
          console.log(res);
          goToLogin();
        })
        .catch(err => {
          console.log(err)
        })
        
    }
    
    return(
        <Container>

        <Column>
          <h1>Volunteer Sign up</h1>
          <p>Thanks for your interest</p>
        </Column>
        <Column>
        <p>Create Your Account</p>
        <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialState}
        >
          <Form className="form">
          <div>
          <label>Name
            <Field
            type="text"
            id="name"
            name="name"
            className="input"/>
            <ErrorMessage name="name" component="div" className="error"/>
            </label>
            </div>
            
            <div>
            <label>Username
            <Field
            type="text"
            id="username"
            name="username"
            className="input"/>
            <ErrorMessage name="username" component="div" className="error"/>
            </label>
            </div>

            <div>
            <label>Phone
            <Field
            type="tel"
            id="contact_number"
            name="contact_number"
            className="input"/>
            <ErrorMessage name="contact_number" component="div" className="error"/>
            </label>
            </div>

            {/* <label>E-mail</label>
            <Field
            type="text"
            id="email"
            name="email"
            className="input"/>
            <ErrorMessage name="email" component="div" className="error"/> */}
            <div>
            <label>Password
            <Field
            type="password"
            id="password"
            name="password"
            className="input"/>
            <ErrorMessage name="password" component="div" className="error"/>
            </label>
            </div>
            
            <div>
            <label>Repeat password
            <Field
            type="password"
            id="repeat_password"
            name="repeat_password"
            className="input"/>
            <ErrorMessage name="repeat_password" component="div" className="error"/>
            </label>
            </div>

            <button type="submit">Continue</button>

          </Form>
        </Formik>
        </Column>
        </Container>
    )
}
