import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"


const App = (props) => {
    return (
            <div className="appWrapper">
                <Header/>
                <div className="contentNavWrapper">
                    <Navbar sidebar={props.state.sidebar}/>
                    <div className="appWrapperContent">
                        <Route path="/profile" render={() => <Profile postsData={props.state.profilePage}/>}/>
                        <Route path="/dialogs" render={() => <Dialogs state={props.state.messagesPage}/>}/>
                        <Route path="/news"/>
                        <Route path="/music"/>
                        <Route path="/settings"/>
                    </div>
                </div>
            </div>
    );
}

export default App;
