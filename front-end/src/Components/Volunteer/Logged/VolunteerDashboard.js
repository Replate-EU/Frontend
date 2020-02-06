import React, { useEffect, useState } from "react";
import VolunteerPickupCard from "./VolunteerPickupCard";
import styled from "styled-components";
import axiosWithAuth from "../../../auth/axiosWithAuth";
import { connect } from "react-redux";
import {
  getAcceptedPickups,
  abandonPickup
} from "../../../state/actionCreators";


export function VolunteerDashboard({
  getAcceptedPickups,
  abandonPickup,
  acceptedPickups
}) {
  useEffect(() => {
    getAcceptedPickups();
  }, []);

  return (
    <div className="presentational-container">
        {acceptedPickups.map(pickup => {
          return (
            <VolunteerPickupCard
              pickup={pickup}
              key={pickup.id}
              handleAction={abandonPickup}
              sad={true}
            />
          );
        })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    acceptedPickups: state.acceptedPickups
  };
}

export default connect(mapStateToProps, { getAcceptedPickups, abandonPickup })(
  VolunteerDashboard
);
