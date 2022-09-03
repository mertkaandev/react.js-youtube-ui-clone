import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom"

import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HistoryIcon from '@mui/icons-material/History';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">

                <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
                <div className="sidebarWrapperItem">
                    <HomeIcon />
                    Home
                </div>
                </Link>

                
                <div className="sidebarWrapperItem">
                    <ExploreIcon />
                    Explore
                </div>
             
             
                <div className="sidebarWrapperItem">
                    <AppShortcutIcon />
                    Shorts
                </div>

                
                <div className="sidebarWrapperItem">
                    <SubscriptionsIcon />
                    Subscriptions
                </div>
               

                <hr className="sidebarHr"></hr>

                <div className="sidebarWrapperItem">
                    <LibraryBooksIcon />
                    Books
                </div>

                <div className="sidebarWrapperItem">
                    <HistoryIcon />
                    History
                </div>

                <hr className="sidebarHr"></hr>

                <Link to="/signin" style={{textDecoration:"none", color:"inherit"}}>
                <div className="sidebarSignIn">
                    <span className="sidebarSignInText">Sign in to like, share and comment videos.</span>
                    <button className="sidebarSignInButton">
                        <HomeIcon />
                        Sign In
                    </button>
                </div>
                </Link>

                <div className="sidebarWrapperItem">
                    <AudiotrackIcon />
                    Music
                </div>

                <div className="sidebarWrapperItem">
                    <SportsVolleyballIcon />
                    Sports
                </div>

                <div className="sidebarWrapperItem">
                    <SportsEsportsIcon />
                    Games
                </div>

                <div className="sidebarWrapperItem">
                    <LiveTvIcon />
                    Live
                </div>

                <hr className="sidebarHr"></hr>

                <div className="sidebarWrapperItemBold">
                    <ControlPointIcon />
                    Look at Channels
                </div>

                <hr className="sidebarHr"></hr>

                <span className="sidebarWrapperItemBold">Much More of Youtube</span>

                <div className="sidebarYoutubeSpecial">
                    <div className="sidebarYoutubeSpecialItem">
                        <YouTubeIcon style={{ color: "red" }} />
                        Youtube Premium
                    </div>

                    <div className="sidebarYoutubeSpecialItem">
                        <YouTubeIcon style={{ color: "red"}} />
                        Youtube Music
                    </div>

                    <div className="sidebarYoutubeSpecialItem">
                        <YouTubeIcon style={{ color: "red" }} />
                        Youtube Kids
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Sidebar;