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
      <Formik onSubmit={handleSubmit} initialValues={initialState}>
        <Form className="inner-form">
        <h1 className="card--title">New pickup</h1>
          <label className="form--label">
            <Field
              required
              type="text"
              id="food_type"
              name="food_type"
              className="form--input"
            />
            <span className="input--label">Type</span>
            <ErrorMessage name="food_type" component="div" className="error" />
          </label>
          <label className="form--label">
            <Field
              required
              type="text"
              id="pickup_time"
              name="pickup_time"
              className="form--input"
            />
            <ErrorMessage
              name="pickup_time"
              component="div"
              className="error"
            />
            <span className="input--label">Preferred time</span>
          </label>
          <label className="form--label">
            <Field
              required
              type="text"
              id="quantity"
              name="quantity"
              className="form--input"
            />
            <span className="input--label">Quantity</span>
            <ErrorMessage name="quantity" component="div" className="error" />
          </label>
          <button className="button-primary button-big"type="submit">create new pickup</button>
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
