import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Gallery from '../Components/Gallery/Gallery';
import Footer from '../Components/Footer/Footer';
import Background from '../Assets/Background_Banner.png'


function Home() {
  return (
    <div>
      <Header />
      <main>
        <Banner img={Background} title="Chez vous, partout et ailleurs" />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default Home;
