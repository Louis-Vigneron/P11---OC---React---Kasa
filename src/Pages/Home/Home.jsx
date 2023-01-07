import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Gallery from '../../Components/Gallery/Gallery';

function App() {
  return (
  <div>
  <header>
    <Header />
  </header>

  <main>
    <Banner />
    <div className='box'>
      <Gallery />
    </div>
  </main>
  </div>
  )
}

export default App;
