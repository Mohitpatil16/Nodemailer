const nodemailer = require('nodemailer');

// Step 1: Configure the transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service (e.g., Outlook, Yahoo)
    auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-email-password', // Replace with your email password or app password
    },
});

// Step 2: Define the email options
const mailOptions = {
    from: 'your-email@gmail.com', // Sender's email
    to: 'recipient-email@example.com', // Receiver's email
    subject: 'Hello from Nodemailer!',
    text: 'This is a test email sent using Nodemailer.',
};

// Step 3: Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error occurred:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
