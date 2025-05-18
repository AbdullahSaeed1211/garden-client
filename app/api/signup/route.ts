import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Send confirmation email to the user
    const userEmailData = await resend.emails.send({
      from: 'Sproutly Course <noreply@resend.abdullahsaeed.me>',
      to: email,
      subject: 'Welcome to Sproutly Urban Gardening Course!',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4CAF50;">Welcome to Sproutly, ${name}!</h2>
          <p>Thank you for signing up for our 6-Week Urban Garden Course!</p>
          <p>We're excited to have you join our community of urban gardeners. Our team will be in touch shortly with more details about the course, including:</p>
          <ul>
            <li>Your course login details</li>
            <li>Schedule for live sessions</li>
            <li>Information about the course materials</li>
            <li>How to prepare for your first session</li>
          </ul>
          <p>If you have any questions in the meantime, feel free to reply to this email.</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0; color: #666;">Happy Gardening!</p>
            <p style="margin: 5px 0 0; color: #666;">The Sproutly Team</p>
          </div>
        </div>
      `,
    });

    // Send notification to the owner/admin
    const ownerEmailData = await resend.emails.send({
      from: 'Sproutly Notifications <noreply@resend.abdullahsaeed.me>',
      to: process.env.ADMIN_EMAIL || 'owner@example.com', // Replace with actual admin email
      subject: 'New Course Signup',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4CAF50;">New Course Registration</h2>
          <p>A new user has signed up for the 6-Week Urban Garden Course:</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <p>Please reach out to the student with course details and next steps.</p>
        </div>
      `,
    });

    return NextResponse.json({ 
      success: true,
      message: 'Signup successful! Check your email for confirmation.'
    });
    
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Failed to process signup' },
      { status: 500 }
    );
  }
} 