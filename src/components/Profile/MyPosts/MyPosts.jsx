import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo(props => {
    console.log("render")
    let posts = props.postsData.map(post => <Post message={post.message} key={post.id} like={post.like}/>)

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.myPost}>My posts</h3>
            <AddNewPostFormRedux onSubmit={addNewPost}/>
            {posts}
        </div>
    )
});

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.posts}>
            <div>
                <Field component={Textarea}
                       name={"newPostText"}
                       placeholder={"Enter your message"}
                       validate={[required, maxLength10]}
                       className={styles.textarea}/>
            </div>
            <div>
                <button className={styles.button}>Add Post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;