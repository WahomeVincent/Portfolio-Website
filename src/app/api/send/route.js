// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  // console.log(email, subject, message);
   
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['vincentwahome100@gmail.com', email],
      subject: subject,
      react: (
        <>
          <p>{message}{email}</p>
        </>
      )
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
