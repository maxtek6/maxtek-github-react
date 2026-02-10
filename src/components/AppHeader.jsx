
import {
    Header,
    HeaderContainer,
    HeaderGlobalBar,
    HeaderGlobalAction,
    HeaderName,
    HeaderNavigation,
    HeaderMenuItem,
    SkipToContent,
} from '@carbon/react'
import { Moon, Sun } from '@carbon/icons-react';
import { useLocation, useNavigate } from 'react-router-dom'

const NAV_ITEMS = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
]

const AppHeader = ({ darkMode, setDarkMode }) => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <HeaderContainer
            render={() => (
                <Header aria-label="Maxtek">
                    <SkipToContent href="#main-content" />
                    <HeaderName
                        href="/"
                        prefix=""
                        onClick={(event) => {
                            event.preventDefault()
                            navigate('/')
                        }}
                    >
                        Maxtek
                    </HeaderName>
                    <HeaderNavigation aria-label="Main navigation">
                        {NAV_ITEMS.map((item) => (
                            <HeaderMenuItem
                                key={item.path}
                                isActive={location.pathname === item.path}
                                onClick={() => navigate(item.path)}
                            >
                                {item.label}
                            </HeaderMenuItem>
                        ))}
                    </HeaderNavigation>
                    <HeaderGlobalBar>
                        <HeaderGlobalAction
                            aria-label="Toggle dark mode"
                            onClick={() => setDarkMode(!darkMode)}
                            isActive={darkMode}
                        >
                            {darkMode ? <Moon /> : <Sun />}
                        </HeaderGlobalAction>
                    </HeaderGlobalBar>
                </Header>
            )}
        />
    )
}

export default AppHeader