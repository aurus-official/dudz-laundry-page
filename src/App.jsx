import "./styles/App.css";
import Nav from "./components/Nav.jsx";
import MainSection from "./components/MainSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ServiceSection from "./components/ServiceSection.jsx";
import ReviewSection from "./components/ReviewSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import FooterSection from "./components/FooterSection.jsx";

function App() {
    return (
        <>
            <Nav />
            <MainSection />
            <AboutSection />
            <ServiceSection />
            <ReviewSection />
            <ContactSection />
            <FooterSection />
        </>
    );
}

export default App;
