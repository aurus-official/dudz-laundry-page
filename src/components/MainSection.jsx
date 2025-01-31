import "../styles/MainSection.css";
import MainSectionImage from "../assets/mainsectionimage.png";

export default function MainSection() {
    return (
        <div className="mainsection-container">
            <div className="mainsection-area1">
                <h1>Your</h1>
                <h1>Neighborhood</h1>
                <h1>Laundry</h1>
                <h1>Partner</h1>
                <input type="button" value="REQUEST PICKUP" />
            </div>
            <div className="mainsection-area2">
                <img
                    className="mainsection-image"
                    src={MainSectionImage}
                    alt="pic"
                />
            </div>
        </div>
    );
}
