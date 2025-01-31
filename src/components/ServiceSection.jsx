import "./../styles/ServiceSection.css";
import Service1 from "./../assets/image1.svg";
import Service2 from "./../assets/image2.svg";
import Service3 from "./../assets/image3.svg";
import Service4 from "./../assets/image4.svg";

export default function ServiceSection() {
    return (
        <>
            <div className="servicesection-container">
                <div className="servicesection-text-container">
                    <h1>What we offer</h1>
                    <h6>
                        We are one of the most reliable laundromat in Silang,
                        Cavite
                    </h6>
                </div>
                <div>
                    <div className="servicesection-cards-container">
                        <div className="servicesection-card-container">
                            <img
                                className="servicesection-card-images"
                                src={Service1}
                                alt="washing machine"
                            />
                            <h1 className="servicesection-card-title">
                                Modern Washing
                            </h1>
                            <h6 className="servicesection-card-subtext">
                                Experience the convenience of modern laundry
                                with our state-of-the-art washing machine,
                                designed to simplify your clothing care routine.
                            </h6>
                        </div>
                        <div className="servicesection-card-container">
                            <img
                                className="servicesection-card-images"
                                src={Service2}
                                alt="washing machine"
                            />
                            <h1 className="servicesection-card-title">
                                Advanced Drying System
                            </h1>
                            <h6 className="servicesection-card-subtext">
                                With the efficiency of our innovative
                                clothesline, designed for the modern homemaker,
                                our services allow quick drying of clothes,
                                ensuring that your laundry routine is
                                streamlined and hassle-free.
                            </h6>
                        </div>
                        <div className="servicesection-card-container">
                            <img
                                className="servicesection-card-images"
                                src={Service3}
                                alt="washing machine"
                            />
                            <h1 className="servicesection-card-title">
                                Precise Folding
                            </h1>
                            <h6 className="servicesection-card-subtext">
                                Our commitment to perfection ensures that your
                                garments not only look immaculate but also stay
                                wrinkle-free and ready to wear.
                            </h6>
                        </div>
                        <div className="servicesection-card-container">
                            <img
                                className="servicesection-card-images"
                                src={Service4}
                                alt="washing machine"
                            />
                            <h1 className="servicesection-card-title">
                                Express Delivery
                            </h1>
                            <h6 className="servicesection-card-subtext">
                                Our quick and reliable delivery ensures that
                                your laundry needs are met without the hassle,
                                allowing you to focus on what truly matters.
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
