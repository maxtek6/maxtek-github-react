import ContactForm from './ContactForm';
import ProjectList from './ProjectList';
import maxtekLogo from './assets/logo.jpeg'
import './App.css'

function App() {

  return (
    <>
      <title>Maxtek Consulting</title>
      <div className="logo-container">
        <img src={maxtekLogo} className="logo" alt="Maxtek logo" />
        <h1>Maxtek Consulting</h1>
      </div>
      
      <div className="container">
      <div className="box">
        <h2>Services</h2>
        <p>We can provide expertise in the following areas:</p>
        <ul>
          <li>C, C++, and Go</li>
          <li>CMake build systems</li>
          <li>Linux kernel development</li>
          <li>Embedded systems</li>
          <li>Open source projects</li>
          <li>CI/CD integration</li>
        </ul>
      </div>
      <div className="box">
        <h2>Projects</h2>
        <p>Here are some of our active projects:</p>
        <ProjectList />
        <p>Check out our <a href="https://github.com/maxtek6">GitHub</a> for more projects.</p>
      </div>
      <div className="box">
        <ContactForm />
      </div>
    </div>
    </>
  )
}

export default App
