import { useState } from 'react';
import { Modal } from '@carbon/react';
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
        <>
            <ContactForm
                onSubmitSuccess={handleSubmitSuccess}
                onSubmitError={handleSubmitError}
            />
            <Modal
                open={isModalOpen}
                modalHeading={modalHeading}
                primaryButtonText="Close"
                onRequestClose={handleCloseModal}
                onRequestSubmit={handleCloseModal}
            >
                <p>{modalMessage}</p>
            </Modal>
        </>
    );
}

export default Contact