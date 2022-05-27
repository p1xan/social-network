import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./components/hoc/withSuspense";
import Redirect from "react-router-dom/es/Redirect";

const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"));


class App extends React.Component {
    catchAllUnhandledErrors = (reason,promise) => {
        alert('some error')
       // console.error(promiseRejectionEvent)
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className="appWrapper">
                <HeaderContainer/>
                <div className="contentNavWrapper">
                    <Navbar/>
                    <div className="appWrapperContent">
                        <Switch>
                            <Route exact path="/" render={() => <Redirect to={"/profile"}/>}/>
                            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                            <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/login" render={() => <Login/>}/>
                            <Route path="/news"/>
                            <Route path="/music"/>
                            <Route path="/settings"/>
                            <Route path="*" render={() =><div>404 NOT FOUND</div>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJsApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default SamuraiJsApp;