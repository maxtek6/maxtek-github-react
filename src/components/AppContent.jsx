import { Content } from '@carbon/react';

function AppContent({ children, ...props }) {
    return (
        <Content
            style={{
                display: 'flex',
                minHeight: 'calc(100vh - 3rem)',
            }}
            {...props}>
            {children}
        </Content>
    )
}

export default AppContent;