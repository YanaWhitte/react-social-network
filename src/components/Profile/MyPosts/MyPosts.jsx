import React from "react";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = React.memo((props) => {
  let postsElements =
    [...props.posts]
      .reverse()
      .map((p) => (
        <Post key={p.id} message={p.message} likesCount={p.likesCount} profile={props.profile} />
      ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };
  return (
    < div className={s.postsBlock} >
      <h3 className={s.headerPosts}>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div >
  );
});

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={"newPostText"} validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

export default MyPosts;
