import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <NavLink to={path} className={s.dialog} activeClassName={s.active}>
      {props.name}
    </NavLink>
  );
};

export default DialogItem;
