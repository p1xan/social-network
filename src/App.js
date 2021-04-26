import React from "react";
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";


const App = () => {
    return (
        <div className="appWrapper">
            <Header/>
            <div className="contentNavWrapper">
                <Navbar/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
