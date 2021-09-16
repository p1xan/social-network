import React from "react";
import styles from "./FormControls.module.css"
import {Field} from "redux-form";

export const Textarea = ({input, meta:{touched,error}, ...props}) => {

    let hasError = touched && error

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Input = ({input, meta:{touched,error}, ...props}) => {

    let hasError = touched && error

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
               component={component}
               validate={validators}
               {...props}/> {text}
    </div>
)