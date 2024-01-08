import './App.css';
import Hero from './components/hero';
import NavBar from './components/navbar';
import SkillsSection from './components/skills';
import ContactSection from './components/contact';
import ProjectsSection from './components/projects';  
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
      <footer className='footer'>
        <p>© 2024 Ashley Mercado Defort. All rights reserved</p>  
      </footer>
    </div>
  );
}

export default App;
