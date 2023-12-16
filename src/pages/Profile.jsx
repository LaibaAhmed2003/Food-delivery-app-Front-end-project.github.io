// Profile.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        console.log(authToken);
        const res = await axios.get("http://localhost:3000/users/profile", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        const data = res.data;
        setUserData(data);
      } catch (error) {
        console.log("Profile Fetch Error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Profile</h1>
      {userData ? (
        <div>
          <p>Email: {userData.email}</p>
          <p>Name: {userData.name}</p>
          {/* Display order details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
