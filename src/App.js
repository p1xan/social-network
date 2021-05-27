import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";



const App = (props) => {
    return (
        <div className="appWrapper">
            <Header/>
            <div className="contentNavWrapper">
                <Navbar />
                <div className="appWrapperContent">
                    <Route path="/profile" render={() => <Profile />}/>
                    <Route path="/dialogs" render={() => <DialogsContainer />}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/news"/>
                    <Route path="/music"/>
                    <Route path="/settings"/>
                </div>
            </div>
        </div>
    );
}

export default App;
