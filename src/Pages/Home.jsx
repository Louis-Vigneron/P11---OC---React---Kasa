import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Gallery from '../Components/Gallery/Gallery';
import Footer from '../Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <div className='box'>
          <Gallery />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App;
