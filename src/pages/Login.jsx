import { Link } from "react-router-dom";
import "./Login.css";

/**
 * Component for the login page.
 * Login page is a mock up for user to login to their profile.
 * No authentication has been implemented at this stage.
 *
 * @returns {ReactNode} react element to render the detail page
 */
function Login() {
    return (
        <div className="login-page">
            <div className="left-balancer"></div>
            <div className="login-main">
                <h1 className="login-title">VibeGrow</h1>
                <div className="user-login">
                    <div className="account-div">
                        <label htmlFor="account">Account:</label>
                        <input type="text" id="account" name="account" />
                    </div>
                    <div className="password-div">
                        <label htmlFor="password">Password:</label>
                        <input type="text" id="password" name="password" />
                    </div>
                </div>
                <div className="button-div">
                    <Link to="/">
                        <button className="login-button">Login</button>
                    </Link>
                </div>
            </div>
            <div className="slash-container">
                <div className="login-slash"></div>
            </div>
        </div>
    );
}

export default Login;
