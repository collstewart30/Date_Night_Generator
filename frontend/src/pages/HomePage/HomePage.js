import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import "./HomePage.css";
import TicketmasterLogo from "../../logo/TicketmasterLogo.png";
import YelpLogo from "../../logo/YelpLogo.png";
import NPSLogo from "../../logo/NPSLogo.png";

const HomePage = () => {
  const [user, token] = useAuth();
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication

  return (
    <div>
      <h1>Welcome, {user.first_name}!</h1>
      <h2>Choose from the below options to start planning your date night:</h2>
      <div className="home-grid-container">
        <p>
          <Link to="/ticketmaster" className="Link"><img src={TicketmasterLogo} alt="Ticketmaster"/></Link>
        </p>
        <p>
          <Link to="/nps" className="Link"><img src={NPSLogo} alt="NPS"/></Link>
        </p>
        <p>
          <Link to="/yelp" className="Link"><img src={YelpLogo} alt="Yelp"/></Link>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
