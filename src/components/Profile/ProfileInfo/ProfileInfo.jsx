import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/avatar.jpg"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <p className={s.userFullName}>{profile.fullName}</p>
        <img className={s.userAvatar} src={profile.photos.large != null ? profile.photos.large : userPhoto} alt="user avatar" />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div className={s.userDescriptionDiv}>
          <p className={s.userDescription}>{profile.aboutMe}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
