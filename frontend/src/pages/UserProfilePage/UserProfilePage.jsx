// use views files to filter by each saved type
// button to change from "save for future" to "mark favorite," "save for current night," "mark complete"

// routes - user id in url

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import useAuth from "../../hooks/useAuth";
import DisplaySaveForFuture from "../../components/DisplaySaveForFuture/DisplaySaveForFuture";

const UserProfilePage = (props) => {
  const { userid } = useParams();
  const [user, token] = useAuth();
  const [userNPSDetail, setUserNPSDetail] = useState([]);

  useEffect(() => {
    fetchNPSDetails();
  }, [userid]);

  const fetchNPSDetails = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/nps/`, {
        headers: { Authorization: "Bearer " + token },
      });
      setUserNPSDetail(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Welcome, {user.first_name}!</h1>
      <h1>{user.username}!</h1>
      <h2>Here are your favorites:</h2>
      {userNPSDetail &&
        userNPSDetail.map((nps) => (
          <DisplaySaveForFuture key={nps.id.event_id} nps={nps} />
        ))}
    </div>
  );
};

export default UserProfilePage;


  /* // <div key={nps.id.id}>
        //   <li>{nps.title}</li>
        //   <li>{nps.description}</li>
        //   <li>{nps.type}</li>
        // </div>) */

