import Hero from '@/components/hero';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <Hero />
      <main className='flex-1 flex flex-col gap-16 px-4 max-w-5xl w-full mx-auto'>
        {/* Features Section */}
        <section id='features' className='grid md:grid-cols-3 gap-8'>
          <div className='flex flex-col gap-3 p-6 border rounded-lg'>
            <h2 className='text-xl font-semibold'>AI Content Detection</h2>
            <p className='text-foreground/70'>
              Identify AI-generated content in documents submitted to government
              agencies with high accuracy.
            </p>
          </div>
          <div className='flex flex-col gap-3 p-6 border rounded-lg'>
            <h2 className='text-xl font-semibold'>Policy Compliance</h2>
            <p className='text-foreground/70'>
              Ensure contractors and partners adhere to your agency's AI usage
              guidelines and policies.
            </p>
          </div>
          <div className='flex flex-col gap-3 p-6 border rounded-lg'>
            <h2 className='text-xl font-semibold'>Secure Document Analysis</h2>
            <p className='text-foreground/70'>
              Process sensitive documents securely with our FISMA-compliant
              infrastructure.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className='flex flex-col gap-6'>
          <h2 className='text-3xl font-bold text-center'>How It Works</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='border rounded-lg p-6'>
              <ol className='list-decimal pl-5 space-y-4'>
                <li>Upload documents for analysis</li>
                <li>
                  Our AI detection system scans for patterns of AI-generated
                  content
                </li>
                <li>
                  Receive detailed reports highlighting potential AI content
                </li>
                <li>Make informed decisions based on your agency's policies</li>
              </ol>
            </div>
            <div className='flex items-center justify-center'>
              <div className='w-full h-60 bg-muted rounded-lg flex items-center justify-center'>
                [Diagram Placeholder]
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id='demo' className='flex flex-col gap-6 py-8'>
          <h2 className='text-3xl font-bold text-center'>Request a Demo</h2>
          <p className='text-center max-w-2xl mx-auto'>
            See how GovGuard AI can help your agency maintain document integrity
            and enforce AI usage policies.
          </p>
          <div className='flex justify-center mt-4'>
            <Button variant='default' size='lg' className='py-6'>
              <Link href='/contact' className='text-lg'>
                Contact Us
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
