import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import AboutPage from "../Components/About/About";
import Background from "../Assets/Banner_about.png";

function About() {
  return (
    <div className="about">
      <Header />
      <Banner img={Background} />
      <AboutPage />
      <Footer />
    </div>
  )
}

export default About;
