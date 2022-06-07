import { Link } from "react-router-dom";
import Button from "./components/Button";
import TextBox from "./components/TextBox";
import Title from "./components/Title";
import MicrosoftLogin from "react-microsoft-login";
import { useState } from "react";

const Login = () => {
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //   Microsoft SSO
  const authHandler = (err, data, msal) => {
    if (err) {
      setMsg(err.message);
      sessionStorage.clear();
    }
    if (data) {
      const accessToken = data.accessToken;
      setName(data.account.name);
      setEmail(data.account.userName);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    setName("");
    setEmail("");
  };
  return (
    <div className="mainContainer">
      <div className="loginContainer">
        {name ? (
          <>
            <h1>Welcome {name}</h1>
            <p>{email}</p>
            <br />
            <button className="btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Title name="Login" />
            <MicrosoftLogin
              clientId="fef75ba3-3281-4d23-9f7b-b5df41c77caa"
              authCallback={authHandler}
            />
          </>
        )}

        {/* <form>
          <TextBox name="Username" />
          <TextBox name="Password" type="password" />

          <div className="inputContainer bgNone flex">
            <span>Remember Me</span>
            <Link to="/forgot-password">Forgot Password</Link>
          </div>
          <Button name="Login" color="yellow" />
          <div className="inputContainer bgNone">
            <span>
              Don't Have an Account? <Link to="/signup">Signup</Link>
            </span>
          </div>
        </form> */}
      </div>
    </div>
  );
};
export default Login;
