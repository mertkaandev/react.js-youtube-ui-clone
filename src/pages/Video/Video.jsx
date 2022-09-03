import React from 'react';
import "./video.css";

import video from "../../assets/doja.mp4";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import SaveAltIcon from '@mui/icons-material/SaveAlt';

import SmallCard from "../../components/SmallCard/SmallCard.jsx";

const Video = () => {
  return (
    <div className='video'>

      <div className='videoContent'>

        <div className='videoWrapper'>
          <iframe
            width="100%"
            height="500"
            src={video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        
        <h1 className='videoTitle'>Central Cee - Doja (Directed by Cole Bennett)</h1>

        <div className='videoDetails'>

          <span className='videoInfo'>660,908 views • 1 day ago</span>

          <div className='videoButtons'>
            <div className='videoButton'>
              <ThumbUpOutlinedIcon />
              123 B
            </div>

            <div className='videoButton'>
              <ThumbDownOffAltOutlinedIcon />
              Disslike
            </div>

            <div className='videoButton'>
              <ReplyOutlinedIcon />
              Share
            </div>

            <div className='videoButton'>
              <SaveAltIcon /> Save
            </div>
          </div>
        </div>

        <hr className='Hr'></hr>

        <div className='channel'>
          <div className='channelInfo'>
            <img className='channelImg' src='https://raydarmagazine.com/wp-content/uploads/2022/08/Central-Cee.jpg' alt='' />

            <div className='channelDetails'>

              <span className='channelName'>
                Central Cee
              </span>

              <span className='channelCounter'>
                200K subscribers
              </span>

              <p className='channelDescription'>
                All rigths reserved.
              </p>

            </div>
          </div>
        </div>

        <hr className='Hr'></hr>

      </div>

      <div className='recommendation'>
         <SmallCard/>
         <SmallCard/>
         <SmallCard/>
         <SmallCard/>
         <SmallCard/>
         <SmallCard/>
         <SmallCard/>
         <SmallCard/>
         <SmallCard/>
         <SmallCard/>
         <SmallCard/>
         <SmallCard/>
  
      </div>

    </div>
  )
}

export default Video;