import React from "react";
import dialogs from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const Dialogs = () => {
    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogsItem}>
                <div className={dialogs.dialog}>
                    <NavLink to="/dialogs/1">Dima</NavLink>
                </div>
                <div className={dialogs.dialog}>
                    <NavLink to="/dialogs/2">Pasha</NavLink>
                </div>
                <div className={dialogs.dialog}>
                    <NavLink to="/dialogs/3">Sergey</NavLink>
                </div>
            </div>
            <div className={dialogs.messages}>
                <div className={dialogs.message}>Hi</div>
                <div className={dialogs.message}>Hey</div>
                <div className={dialogs.message}>Ho</div>
            </div>
        </div>
    )
}

export default Dialogs;