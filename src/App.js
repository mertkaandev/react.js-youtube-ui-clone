import React from "react";
import "./app.css";
import Topbar from "./components/Topbar/Topbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

import Home from "./pages/Home/Home.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Video from "./pages/Video/Video.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="mainContainer">
      <BrowserRouter>
        <Topbar />
        <div className="mainWrapper">
          <Sidebar />
          <div className="wrapper">
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />}/>
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
