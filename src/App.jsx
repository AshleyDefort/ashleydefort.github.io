import './App.css';
import Hero from './components/hero';
import NavBar from './components/navbar';
import SkillsSection from './components/skills';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <SkillsSection/>
    </div>
  );
}

export default App;
