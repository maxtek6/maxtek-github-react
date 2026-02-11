import { useState } from 'react';
import { Modal, Grid, Column, UnorderedList, Layer, ListItem, Stack } from '@carbon/react';
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
            <Column sm={0} md={1} lg={2} xlg={2} max={2}/>
            <Column
                sm={4}
                md={4}
                lg={6}
                xlg={6}
                max={6}  // max width: full width (4-column grid)
            >
                <Stack>
                    <h3>How can we help you?</h3>
                    <p>Whether you are an open source developer looking for guidance, or a business seeking consulting services, we're here to assist you. We offer expertise in the following areas:</p>
                    <UnorderedList>
                        <ListItem>Backend development in C, C++, and Go</ListItem>
                        <ListItem>CMake build systems</ListItem>
                        <ListItem>CI/CD integration</ListItem>
                        <ListItem>Embedded systems</ListItem>
                    </UnorderedList>
                </Stack>
            </Column>
            <Column
                sm={4}
                md={4}
                lg={4}
                xlg={4}
                max={4}
            >
                <Layer>
                    <Layer>
                        <ContactForm
                            onSubmitSuccess={handleSubmitSuccess}
                            onSubmitError={handleSubmitError}
                        />
                    </Layer>
                </Layer>
            </Column>
            <Column sm={0} md={1} lg={2} xlg={2} max={2}/>
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