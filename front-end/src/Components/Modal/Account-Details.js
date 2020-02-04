import React, { useState } from "react";

export default function AccountDetails() {
  const [details, setDetails] = useState({
    username: "darragh1",
    user_type: "volunteer",
    contact_number: "123-456-7890"
  });
  return (
    <div className="account">
      <h2>Account Details</h2>
      <h3>Username: {details.username}</h3>
      <h3>Account Type: {details.user_type}</h3>
      <h3>Contact: {details.contact_number}</h3>
    </div>
  );
}
