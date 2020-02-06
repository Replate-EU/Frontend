import React, { useEffect, useState } from "react";
import VolunteerPickupCard from "./VolunteerPickupCard";
import styled from "styled-components";
import axiosWithAuth from "../../../auth/axiosWithAuth";
import { connect } from "react-redux";
import {
  getAcceptedPickups,
  abandonPickup
} from "../../../state/actionCreators";


const Div = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
`;

export function VolunteerDashboard({
  getAcceptedPickups,
  abandonPickup,
  acceptedPickups
}) {
  const [pickups, setPickups] = useState([]);

  //get info about how to make token percist
  useEffect(() => {
    getAcceptedPickups();
  }, []);

  return (
    <div>
      <Div>
        {acceptedPickups.map(pickup => {
          return (
            <VolunteerPickupCard
              pickup={pickup}
              key={pickup.id}
              abandonPickup={abandonPickup}
            />
          );
        })}
      </Div>
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

