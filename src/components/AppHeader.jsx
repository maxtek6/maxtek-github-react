
import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderNavigation,
    HeaderMenuItem,
    SkipToContent,
} from '@carbon/react'

const AppHeader = ({ activeSection, onSectionChange }) => (
    <HeaderContainer
        render={() => (
            <Header aria-label="Maxtek">
                <SkipToContent />
                <HeaderName href="/" prefix="">
                    Maxtek
                </HeaderName>
                <HeaderNavigation aria-label="Main navigation">
                    <HeaderMenuItem
                        isActive={activeSection === 'about'}
                        onClick={() => onSectionChange('about')}
                    >
                        About
                    </HeaderMenuItem>
                    <HeaderMenuItem
                        isActive={activeSection === 'projects'}
                        onClick={() => onSectionChange('projects')}
                    >
                        Projects
                    </HeaderMenuItem>
                    <HeaderMenuItem
                        isActive={activeSection === 'contact'}
                        onClick={() => onSectionChange('contact')}
                    >
                        Contact
                    </HeaderMenuItem>
                </HeaderNavigation>
            </Header>
        )}
    />
)

export default AppHeader