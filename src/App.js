import './App.css';
import Home from './Home/Home';
import OurBest from './OurBest/OurBest';
import Description from './Description/Description';
import Choose from './Choose/Choose';
import Customer from './Customer/Customer';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header/>
      <Home/>
      <OurBest />
      <Description />
      <Customer/>
      <Footer/>
    </div>
  );
}

export default App;
