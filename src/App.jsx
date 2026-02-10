import { Content, Theme } from '@carbon/react'
import {
    Navigate,
    Outlet,
    RouterProvider,
    createHashRouter,
} from 'react-router-dom'
import AppHeader from './components/AppHeader'
import AppContent from './components/AppContent'
import Home from './content/Home'
import Projects from './content/Projects'
import Contact from './content/Contact'
import { useState } from 'react'

const AppLayout = () => {
    const defaultDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const [darkMode, setDarkMode] = useState(defaultDarkMode);

    return (
        <Theme theme={darkMode ? 'g100' : 'g10'}>
            <AppHeader darkMode={darkMode} setDarkMode={setDarkMode} />
            <AppContent><Outlet /></AppContent>
        </Theme>
    );
};

const router = createHashRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'projects', element: <Projects /> },
            { path: 'contact', element: <Contact /> },
            { path: '*', element: <Navigate to="/" replace /> },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
