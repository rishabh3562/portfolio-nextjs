import nodemailer from 'nodemailer';

export async function POST(req) {
    const { name, email, message } = await req.json();
    console.log("name in request body: " + name + " email in request body: " + email + " message in request body: " + message + ":")
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your preferred email service
        auth: {
            user: 'rough9445@gmail.com', // Replace with your email
            pass: `itsrough`, // Replace with your email password
        },
    });
    console.log("transporter: " + transporter)
    console.log(process.env.RECIPIENT_EMAIL)
    const mailOptions = {
        from: email,
        to: 'dubeyrishabh108@gmail.com', // Set your recipient email in the environment variables
        subject: `New message from ${name}`,
        text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
    };

    try {
        const response = await transporter.sendMail(mailOptions);
        console.log("response: ", response);
        return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
    } catch (error) {
        console.error("Error sending email: ", error);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
    }

}
