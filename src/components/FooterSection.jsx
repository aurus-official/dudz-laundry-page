import WhiteLogo from "./../assets/logowhite.svg";
import "./../styles/FooterSection.css";

export default function FooterSection() {
    return (
        <>
            <div className="footersection-container">
                <div className="footersection-first">
                    <img
                        className="footersection-image"
                        src={WhiteLogo}
                        alt=""
                    />
                    <div className="footersection-title-container">
                        <h1>Your</h1>
                        <h1>Neighborhood</h1>
                        <h1>Laundry</h1>
                        <h1>Partner.</h1>
                    </div>
                    <ul className="footersection-menu-container">
                        <p>MENU</p>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Reviews</a>
                        </li>
                        <li>
                            <a href="#">Contact us</a>
                        </li>
                    </ul>
                    <div className="footersection-socmed-container">
                        <p>SOCIAL MEDIA</p>
                    </div>
                </div>
                <div className="footersection-second">
                    <p>Ⓒ Copyright 2025 | Dudz Laundry Shop</p>
                </div>
            </div>
        </>
    );
}
