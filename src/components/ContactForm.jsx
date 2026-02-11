import { useState } from 'react';
import {
    Button,
    Form,
    InlineNotification,
    Stack,
    TextArea,
    TextInput,
} from '@carbon/react';
function ContactForm({ onSubmitSuccess = () => {}, onSubmitError = () => {} }) {
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState('');
    const [statusKind, setStatusKind] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formElement = e.currentTarget;
        if (submitting) return;

        setSubmitting(true);
        setStatus('');
        setStatusKind('');

        const formData = new FormData(formElement);
        const payload = {
            name: formData.get('name')?.toString().trim() ?? '',
            email: formData.get('email')?.toString().trim() ?? '',
            message: formData.get('message')?.toString().trim() ?? '',
        };

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycby8qBWrMlQ-uJ3uItcoKy5_E38E9mUsOKv6m1bNQ4sG6sZHiVq1ymY8ZLhfbPGGgVW5Fg/exec', {
                method: 'POST',
                redirect: 'follow',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Submission failed.');
            }

            setStatus('Thanks for contacting us!');
            setStatusKind('success');
            formElement.reset();
            onSubmitSuccess({ form: payload, response });
        } catch (error) {
            console.error(error);
            setStatus('Something went wrong.');
            setStatusKind('error');
            onSubmitError(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Stack gap={5}>
                <TextInput labelText="Name" id="name" name="name" required />
                <TextInput labelText="Email" id="email" name="email" type="email" required />
                <TextArea labelText="Message" id="message" name="message" required />
                <Button type="submit" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Submit'}
                </Button>
                {status && (
                    <InlineNotification
                        kind={statusKind}
                        title={statusKind === 'success' ? 'Success' : 'Error'}
                        subtitle={status}
                        lowContrast
                        hideCloseButton
                    />
                )}
            </Stack>
        </Form>
    );
}

export default ContactForm;