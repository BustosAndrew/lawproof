import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, message } = body;

    // Validate the input
    if (!name || !email || !organization || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    // In a real app, you would:
    // 1. Store the contact in your database
    // 2. Send notification emails
    // 3. Maybe connect to a CRM

    // For demo purposes, we'll just log the contact
    console.log('Contact submission:', { name, email, organization, message });

    // Return success
    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
