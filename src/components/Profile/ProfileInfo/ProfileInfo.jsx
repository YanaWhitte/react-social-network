import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/avatar.jpg"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

  let [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false)
    })
    console.log(formData);
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img className={s.userAvatar} src={profile.photos.large || userPhoto} alt="user avatar" />

        {editMode
          ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile} />
          : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => { setEditMode(true) }} />}

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
    <div>
      <p className={s.userFullName}><b>Full name:</b> {profile.fullName}</p>
    </div>
    <div>
      <p><b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}</p>
    </div>
    {profile.lookingForAJob &&
      <div>
        <p><b>My professional skills:</b> {profile.lookingForAJobDescription}</p>
      </div>
    }
    <div className={s.userDescriptionDiv}>
      <p><b>About me:</b> {profile.aboutMe}</p>
    </div>
    <div>
      <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}
    </div>
  </div>
}

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contacts}><b>{contactTitle}</b>: {contactValue}</div>
  )
}

export default ProfileInfo;
