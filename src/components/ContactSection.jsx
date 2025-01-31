import "./../styles/ContactSection.css";

export default function ContactSection() {
    return (
        <>
            <div className="contactsection-container">
                <div className="contactsection-text-container">
                    <h1>Contact Us</h1>
                    <label>Name</label>
                    <input
                        className="contactsection-input"
                        type="text"
                        placeholder="Your Name"
                    />
                    <label>Message</label>
                    <textarea
                        className="contactsection-input"
                        type="text"
                        rows="6"
                        placeholder="Your Message"
                    />
                    <input
                        className="contactsection-button"
                        type="button"
                        value="SUBMIT"
                    />
                </div>
            </div>
        </>
    );
}
