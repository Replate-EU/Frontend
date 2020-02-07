import React, { useEffect } from "react";
// import axios from 'axios';
import BusinessPickupCard from "./BusinessPickupCard";
import styled from "styled-components";
import { Field, ErrorMessage, Form, Formik } from "formik";
import axiosWithAuth from "../../../auth/axiosWithAuth";
import { connect } from "react-redux";
import {
  getListedPickups,
  submitPickup,
  deletePickup,
  editPickup
} from "../../../state/actionCreators";

export function BusinessDashboard({
  listedPickups,
  getListedPickups,
  submitPickup,
  deletePickup,
  editPickup
}) {
  useEffect(() => {
    getListedPickups();
  }, []);

  function handleSubmit(values) {
    submitPickup(values);
  }

  const initialState = {
    food_type: "",
    pickup_time: "",
    quantity: ""
  };
  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        // validationSchema={validationSchema}
        initialValues={initialState}
      >
        <Form className="form">
          <div>
          <label>Type
          <Field
            type="text"
            id="food_type"
            name="food_type"
            className="input"/>
          <ErrorMessage name="food_type" component="div" className="error" />
          </label>
          </div>

          <div>
          <label>Preferred time
          <Field
            type="text"
            id="pickup_time"
            name="pickup_time"
            className="input" />
           <ErrorMessage name="pickup_time" component="div" className="error" />
           </label>
          </div>

          <div>
          <label>Quantity
          <Field type="text" id="quantity" name="quantity" className="input" />
          <ErrorMessage name="quantity" component="div" className="error" />
          </label>
          </div>
          <button type="submit">create new pickup</button>
        </Form>
      </Formik>

      <div className="presentational-container">
        {listedPickups.map(pickup => {
          return (
            <BusinessPickupCard
              pickup={pickup}
              update={editPickup}
              remove={deletePickup}
            />
          );
        })}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    listedPickups: state.listedPickups
  };
}

export default connect(mapStateToProps, {
  getListedPickups,
  submitPickup,
  deletePickup,
  editPickup
})(BusinessDashboard);
