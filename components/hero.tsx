export default function Hero() {
  return (
    <div className='flex flex-col gap-10 items-center py-12 md:py-20 text-center'>
      <h1 className='text-4xl md:text-6xl font-bold'>
        AI Detection for Government Agencies
      </h1>
      <p className='text-xl md:text-2xl max-w-3xl text-foreground/80'>
        Protect your agency from unauthorized AI-generated content and ensure
        compliance with your AI usage policies.
      </p>
      <div className='flex flex-col sm:flex-row gap-4 mt-4'>
        <a
          href='#features'
          className='bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity'
        >
          Explore Features
        </a>
        <a
          href='#demo'
          className='border border-input px-6 py-3 rounded-md font-medium hover:bg-muted transition-colors'
        >
          Request Demo
        </a>
      </div>
    </div>
  );
}
