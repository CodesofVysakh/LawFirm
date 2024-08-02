import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import LawSection from "./components/LawSection/LawSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import OurTeamSection from "./components/OurTeamSection/OurTeamSection";
import FaqSection from "./components/FaqSection/FaqSection";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <LawSection />
            <TestimonialSection />
            <OurTeamSection />
            <FaqSection />
            <Newsletter />
            <Footer />
        </>
    );
}

export default App;
