import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"


const App = () => {
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <div className="contentNavWrapper">
                    <Navbar/>
                    <div className="appWrapperContent">
                        <Route path="/profile" component={Profile}/>
                        <Route path="/dialogs" component={Dialogs}/>
                        <Route path="/news" />
                        <Route path="/music" />
                        <Route path="/settings" />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
