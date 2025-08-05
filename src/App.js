import { p } from 'framer-motion/client';
import './App.css';
import About from './Componnents/About/About';
import Contact from './Componnents/Contact/Contact';
import Footer from './Componnents/Footer/Footer';
import Profile from './Componnents/Home/Profile';
import Resume from './Componnents/Resume/Resume';
import Stats from './Componnents/Stats/Stats';
import Certificat from './Componnents/Certificats/Certificat';
const nom = ["R","A","Z","A","F","I","M","A","N","D","I","M","B","Y"]
function App() {
  return (
    <div className="App">
      <div className="nomko">
        {nom.map((name, index)=>(
          <p>{name}</p>
        ))}
      </div>
      <Profile />
      <About />
      <Stats />
      <Resume />
      <Certificat />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
