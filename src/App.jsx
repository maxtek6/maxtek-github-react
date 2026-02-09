import { useState } from 'react'
import { Header, HeaderName, HeaderNavigation, HeaderMenuItem, Theme } from '@carbon/react'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <h1>About Me</h1>
      case 'projects':
        return <h1>Projects</h1>
      case 'contact':
        return <h1>Contact</h1>
      default:
        return <h1>About Me</h1>
    }
  }

  return (
    <>
      <Theme theme="g100">
        <Header aria-label="maxtek">
          <HeaderName href="/" prefix="">
            maxtek
          </HeaderName>
          <HeaderNavigation aria-label="Main navigation">
            <HeaderMenuItem
              isActive={activeSection === 'about'}
              onClick={() => setActiveSection('about')}
            >
              About
            </HeaderMenuItem>
            <HeaderMenuItem
              isActive={activeSection === 'projects'}
              onClick={() => setActiveSection('projects')}
            >
              Projects
            </HeaderMenuItem>
            <HeaderMenuItem
              isActive={activeSection === 'contact'}
              onClick={() => setActiveSection('contact')}
            >
              Contact
            </HeaderMenuItem>
          </HeaderNavigation>
        </Header>
        <div style={{ padding: '2rem' }}>
          {renderContent()}
        </div>
      </Theme>
    </>
  )
}

export default App
