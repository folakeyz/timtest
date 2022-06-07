import { Link } from "react-router-dom";
import Button from "./components/Button";
import TextBox from "./components/TextBox";
import Title from "./components/Title";

const ForgotPassword = () => {
  return (
    <div className="mainContainer">
      <div className="loginContainer">
        <Title name="Forgot Password" />
        <form>
          <TextBox name="Username" />
          <Button name="Forgot Password" />
          <div className="inputContainer bgNone">
            <span>
              Don't Have an Account? <Link to="/signup">Signup</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForgotPassword;
