import Logo from "../assets/logo.png";
import "../styles/Nav.css";

export default function Nav() {
    return (
        <>
            <div className="nav-container">
                <img className="nav-logo" src={Logo} alt="Logo" />
                <ul className="nav-list">
                    <li className="nav-services">SERVICES</li>
                    <li className="nav-reviews">REVIEWS</li>
                    <li className="nav-contactus">CONTACT US</li>
                </ul>
            </div>
        </>
    );
}
