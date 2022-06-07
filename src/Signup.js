import { Link } from "react-router-dom";
import Button from "./components/Button";
import TextBox from "./components/TextBox";
import Title from "./components/Title";
export const Signup = () => {
  return (
    <div className="mainContainer">
      <div className="loginContainer">
        <Title name="Register" />
        <form>
          <TextBox name="Username" />
          <TextBox name="Password" type="password" />
          <TextBox name="Confirm Password" type="password" />
          <div className="inputContainer bgNone flex">
            <span>Remember Me</span>
            <span>Forgot Password</span>
          </div>
          <Button name="Create Account" color="red" />
          <div className="inputContainer bgNone">
            <span>
              Already Have an Account? <Link to="/">Signin</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
