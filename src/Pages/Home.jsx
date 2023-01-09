import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Gallery from '../Components/Gallery/Gallery';
import Footer from '../Components/Footer/Footer';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default Home;
