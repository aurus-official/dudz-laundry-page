import "../styles/AboutSection.css";
import WMachine from "./../assets/washer.svg";
import Scale from "./../assets/scale.svg";
import Delivery from "./../assets/delivery-service.svg";

export default function AboutSection() {
    return (
        <>
            <div className="aboutsection-container">
                <div className="aboutsection-text-container">
                    <h1>Welcome to</h1>
                    <h1>Dudz Laundry Shop!</h1>
                    <div className="aboutsection-subtext-container">
                        <p>
                            In the heart of Silang, Cavite, a vibrant community
                            known for its rich history and
                        </p>
                        <p>
                            warm hospitality, our journey began in 2023. With a
                            vision to provide exceptional
                        </p>
                        <p>
                            laundry services, we opened our doors with a
                            commitment to quality and
                        </p>
                        <p>
                            customer satisfaction. From the very first day, we
                            poured our passion into
                        </p>
                        <p>
                            every load, ensuring that each garment was treated
                            with care and precision.
                        </p>
                    </div>
                </div>
                <div className="aboutsection-cards-container">
                    <div className="aboutsection-card-container">
                        <img
                            className="aboutsection-card-images"
                            src={WMachine}
                            alt="washing machine"
                        />
                        <h1 className="aboutsection-card-title">
                            Hygienic Guaranteed
                        </h1>
                        <h6 className="aboutsection-card-subtext">
                            A single washing machine per customer reduces the
                            need for switching goods.
                        </h6>
                    </div>
                    <div className="aboutsection-card-container">
                        <img
                            className="aboutsection-card-images"
                            src={Scale}
                            alt="washing machine"
                        />
                        <h1 className="aboutsection-card-title">
                            Accurate Calculation
                        </h1>
                        <h6 className="aboutsection-card-subtext">
                            To make it more accurate for payment after
                            completion, the goods will be calculated in
                            kilograms.
                        </h6>
                    </div>
                    <div className="aboutsection-card-container">
                        <img
                            className="aboutsection-card-images"
                            src={Delivery}
                            alt="washing machine"
                        />
                        <h1 className="aboutsection-card-title">
                            Delivery
                            <br />
                            Service
                        </h1>
                        <h6 className="aboutsection-card-subtext">
                            We offer a pick-up and drop-off services for no cost
                            at all.
                        </h6>
                    </div>
                </div>
            </div>
        </>
    );
}
