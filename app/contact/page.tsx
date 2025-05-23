import ContactForm from '@/components/contact-form';

export const metadata = {
  title: 'Contact Us | GovGuard AI',
  description:
    'Get in touch with our team for demos, pricing, and more information about GovGuard AI.',
};

export default function ContactPage() {
  return (
    <div className='max-w-3xl mx-auto w-full'>
      <div className='flex flex-col gap-6'>
        <h1 className='text-3xl md:text-4xl font-bold'>Contact Us</h1>
        <p className='text-lg text-foreground/80'>
          Have questions about GovGuard AI? Our team is ready to help your
          agency implement AI detection solutions.
        </p>

        <div className='grid md:grid-cols-2 gap-8 mt-6'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-semibold'>Get in Touch</h2>
            <p className='text-foreground/70'>
              Fill out the form and our team will get back to you within one
              business day.
            </p>

            <div className='mt-6 space-y-4'>
              <div className='flex gap-3 items-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='mt-1'
                >
                  <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                  <circle cx='12' cy='10' r='3'></circle>
                </svg>
                <div>
                  <h3 className='font-medium'>Address</h3>
                  <p className='text-sm text-foreground/70'>
                    1600 Pennsylvania Avenue, Washington, DC
                  </p>
                </div>
              </div>

              <div className='flex gap-3 items-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='mt-1'
                >
                  <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
                </svg>
                <div>
                  <h3 className='font-medium'>Phone</h3>
                  <p className='text-sm text-foreground/70'>(202) 555-0123</p>
                </div>
              </div>

              <div className='flex gap-3 items-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='mt-1'
                >
                  <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                  <polyline points='22,6 12,13 2,6'></polyline>
                </svg>
                <div>
                  <h3 className='font-medium'>Email</h3>
                  <p className='text-sm text-foreground/70'>
                    contact@govguardai.gov
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-card border rounded-lg p-6'>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
