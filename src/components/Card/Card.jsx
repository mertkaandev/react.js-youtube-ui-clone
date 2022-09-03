import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

import videoimg from "../../assets/videoimg.jpg";
import channelimg from "../../assets/channelimg.jpg";

const Card = ({ video }) => {

  return (

    <div className="card">
      <Link to="video/1" style={{ textDecoration: "none", color: "inherit" }}>
        <img className="cardImg" src={videoimg} alt="" />

        <div className="cardDetails">

          <img className="cardDetailsChannelImg" src={channelimg} alt="" />

          <div className="cardDetailsTexts">

            <h1 className="cardDetailsTitle">Central Cee - Doja (Directed by Cole Bennett)</h1>
            <h2 className="cardDetailsChannelName">Central Cee</h2>
            <div className="cardDetailsInfo">
            660,908 views • 1 day ago
            </div>

          </div>

        </div>
      </Link>
    </div>
  )

};

export default Card;