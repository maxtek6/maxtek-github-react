import { useState } from 'react';
import { Content, Modal, Grid, Column } from '@carbon/react';
import ContactForm from '../components/ContactForm';

function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalHeading, setModalHeading] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmitSuccess = () => {
        setModalHeading('Success');
        setModalMessage('thanks for contacting us');
        setIsModalOpen(true);
    };

    const handleSubmitError = (error) => {
        const message = error?.message ? `error: ${error.message}` : 'error: unknown error';
        setModalHeading('Error');
        setModalMessage(message);
        setIsModalOpen(true);
    };

    return (
        <Grid fullWidth>
            <Column
                sm={4}   // mobile: full width (4-column grid)
                md={8}   // tablet: full width
                lg={8}   // desktop: half width (2 columns total)
            >
                <h3>How can we help you?</h3>
                <p>Whether you are an open source developer looking for guidance, or a business seeking consulting services, we're here to assist you. We offer expertise in the following areas:</p>
                <ul>
                    <li>Backend development in C, C++, and Go</li>
                    <li>CMake build systems</li>
                    <li>CI/CD integration</li>
                    <li>Embedded systems</li>
                </ul>
            </Column>
            <Column
                sm={4}   // mobile: full width (4-column grid)
                md={8}   // tablet: full width
                lg={8}   // desktop: half width (2 columns total)
            >

                <ContactForm
                    onSubmitSuccess={handleSubmitSuccess}
                    onSubmitError={handleSubmitError}
                />
            </Column>
            <Modal
                open={isModalOpen}
                modalHeading={modalHeading}
                primaryButtonText="Close"
                onRequestClose={handleCloseModal}
                onRequestSubmit={handleCloseModal}
            >
                <p>{modalMessage}</p>
            </Modal>
        </Grid>
    );
}

export default Contact