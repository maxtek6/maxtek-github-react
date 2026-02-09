import { useState } from 'react'
import { Theme } from '@carbon/react'
import AppHeader from './components/AppHeader'
import Projects from './content/Projects'
import Contact from './content/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <h1>About Me</h1>
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <h1>About Me</h1>
    }
  }

  return (
    <>
      <Theme theme="g100">
        <AppHeader
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <div className="app-content">
          {renderContent()}
        </div>
      </Theme>
    </>
  )
}

export default App
