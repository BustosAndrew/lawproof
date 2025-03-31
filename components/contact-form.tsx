'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real app, you would send this data to your API
      await fetch('/contact-api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', organization: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='space-y-2'>
        <label htmlFor='name' className='block text-sm font-medium'>
          Full Name
        </label>
        <input
          id='name'
          name='name'
          type='text'
          required
          value={formData.name}
          onChange={handleChange}
          className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
          placeholder='Jane Smith'
        />
      </div>

      <div className='space-y-2'>
        <label htmlFor='email' className='block text-sm font-medium'>
          Email Address
        </label>
        <input
          id='email'
          name='email'
          type='email'
          required
          value={formData.email}
          onChange={handleChange}
          className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
          placeholder='jane.smith@agency.gov'
        />
      </div>

      <div className='space-y-2'>
        <label htmlFor='organization' className='block text-sm font-medium'>
          Government Agency or Organization
        </label>
        <input
          id='organization'
          name='organization'
          type='text'
          required
          value={formData.organization}
          onChange={handleChange}
          className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
          placeholder='Department of ...'
        />
      </div>

      <div className='space-y-2'>
        <label htmlFor='message' className='block text-sm font-medium'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
          placeholder='Please describe your requirements...'
        />
      </div>

      <button
        type='submit'
        disabled={isSubmitting}
        className='w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed'
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitStatus === 'success' && (
        <div className='p-3 bg-green-100 text-green-800 rounded-md text-sm'>
          Thank you for your message! We'll be in touch soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className='p-3 bg-red-100 text-red-800 rounded-md text-sm'>
          There was an error sending your message. Please try again.
        </div>
      )}
    </form>
  );
}
