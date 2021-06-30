import React, {useEffect, useState} from "react";

const ProfileStatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const handleFocus = (event) => {
        event.target.select()
    }

    const statusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateMode}>{props.status || "no status"}</span>
            </div>}
            {editMode &&
            <div>
                <input autoFocus={true}
                       onFocus={handleFocus}
                       onBlur={deactivateEditMode}
                       onChange={statusChange}
                       value={status}
                />
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHook;