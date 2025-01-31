import "./../styles/ReviewSection.css";
import ReviewImage1 from "../assets/review-image1.jpg";
import ReviewImage2 from "../assets/review-image2.jpg";
import ReviewImage3 from "../assets/review-image3.jpg";

export default function ReviewSection() {
    return (
        <>
            <div className="reviewsection-container">
                <div className="reviewsection-text-container">
                    <h1>What our</h1>
                    <h1>Customers say!</h1>
                </div>
                <div className="reviewsection-reviews-container">
                    <div className="reviewsection-review-container">
                        <img
                            className="reviewsection-review-image"
                            src={ReviewImage1}
                            alt="#"
                        />
                        <div className="reviewsection-review-text">
                            <h3>Tyrese Terry Sytengco Vicente</h3>
                            <p>
                                The clothes were returned neat and in good
                                condition. The turnaround time was swift! There
                                were no problems with the delivery. Anyone
                                looking for competent, efficient, and amiable
                                service should definitely check out Dudz
                                Laundry!
                            </p>
                        </div>
                    </div>
                    <div className="reviewsection-review-container">
                        <img
                            className="reviewsection-review-image"
                            src={ReviewImage2}
                            alt="#"
                        />
                        <div className="reviewsection-review-text">
                            <h3>Eloisa Deborah Tio Mesías</h3>
                            <p>
                                I am all ready planning for my next pick up. I
                                am wearing clothes washed by this service today
                                and it was perfectly maintained. Not damaged, to
                                my specifications in detergent therefore I am
                                not itchy and it saved me so much time. Thank
                                you!
                            </p>
                        </div>
                    </div>
                    <div className="reviewsection-review-container">
                        <img
                            className="reviewsection-review-image"
                            src={ReviewImage3}
                            alt="#"
                        />
                        <div className="reviewsection-review-text">
                            <h3>Alexandre Tylor Lomondot Lontoc</h3>
                            <p>
                                This service is amazing. The laundry had a fresh
                                scent and appeared to have been thoroughly
                                cleaned. Not having to wash the laundry and fold
                                everything is a huge relief. Makes it possible
                                to spend more time with the children and take
                                care of other, more pressing issues.{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
