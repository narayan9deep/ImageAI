import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      {/* <div className = "container mx-auto"> */}
        <Navbar/>
        <Hero/>
      {/* </div> */}
    </div>
  );
}

export default App;
