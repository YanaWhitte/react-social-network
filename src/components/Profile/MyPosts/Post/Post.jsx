import s from "./Post.module.css";
import userPhoto from "../../../../assets/images/avatar.jpg"

const Post = (props) => {

  let imageSrc = userPhoto
  if (props.profile !== null && props.profile.photos.small !== null) {
    imageSrc = props.profile.photos.small
  }
  return (
    <div className={s.item}>
      <img className={s.userAvatar} src={imageSrc} alt="user avatar" />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
