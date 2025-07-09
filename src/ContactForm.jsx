import { useState } from 'react';

function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const isComplete = form.name && form.email && form.message;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setStatus('');

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycby8qBWrMlQ-uJ3uItcoKy5_E38E9mUsOKv6m1bNQ4sG6sZHiVq1ymY8ZLhfbPGGgVW5Fg/exec', {
                method: 'POST',
                redirect: "follow",
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify(form),
            });
            if (response.ok) {
                setStatus('Thanks for contacting us!');
                setForm({ name: '', email: '', message: '' });
            } else {
                setStatus('Submission failed.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Something went wrong.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
            <h2>Contact</h2>
            <p>For help with custom software or open source development.</p>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                placeholder="How can we help you?"
                value={form.message}
                onChange={handleChange}
                required
            />
            <button type="submit" disabled={!isComplete || submitting}>
                Submit
            </button>
            {status && <p>{status}</p>}
        </form>
    );
}

export default ContactForm;