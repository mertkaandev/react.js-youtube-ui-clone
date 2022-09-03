import React from "react";
import "./smallCard.css"
import {Link} from "react-router-dom";

import videoimg from "../../assets/videoimg.jpg";
import channelimg from "../../assets/channelimg.jpg";

const SmallCard = () => {

       return (
        
        <div className="smallCard">
            <Link to="/video/1" style={{textDecoration:"none", color:"inherit"}}>
            <img className="smallCardImg" src={videoimg} alt=""/>

            <div className="smallCardDetails">

                <img className="smallCardDetailsChannelImg" src={channelimg} alt=""/>

                <div className="smallCardDetailsTexts">

                   <h1 className="smallCardDetailsTitle">Central Cee - Doja</h1>
                   <h2 className="smallCardDetailsChannelName">Central Cee</h2>
                   <div className="smallCardDetailsInfo">
                   660,908 views • 1 day ago
                   </div>

                </div>

            </div>
            </Link>
        </div>
       )
    
};

export default SmallCard;