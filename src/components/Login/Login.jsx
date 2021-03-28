import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"
import { required } from "../../utils/validators"
import { createField, Input } from "../common/FormsControls/FormsControls"
import s from "./Login.module.css"
import { login } from "./../../redux/auth-reducer"
import { Redirect } from "react-router"

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, { type: "password" })}
      <div className={s.rememberDiv}>
        {createField(null, "rememberMe", null, Input, { type: "checkbox" }, "rememberMe")}
        <label for="rememberMe">remember me</label>
      </div>
      {error && <div className={s.formSummeryError}>{error}</div>}
      <div>
        <button>Sign in</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"} />
  }

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login);