const nodemailer = require("nodemailer");

const emailSender = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Please provide an email address",
            });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        // Send confirmation email to Pratik Raj Verma
        await transporter.sendMail({
            from: `${name}`,
            to: "erpratikrajverma@gmail.com",
            subject: "New Message Received",
            text: `New message from ${name} (${email}):\n\n${message}`,
            html: `
          <p>New message from ${name} (${email}):</p>
          <p>${message}</p>
        `,
        });

        const mailResponse = await transporter.sendMail({
            from: "Pratik Raj Verma",
            to: email,
            subject: "Thank You for Connecting!",
            text: `Dear ${name},

Thank you for reaching out through my portfolio website. I appreciate your interest and look forward to connecting with you.

 

Best regards,
Pratik Raj Verma
Mob: 7903209052`,

            html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out through my portfolio website. I appreciate your interest and look forward to connecting with you.</p>
     
        <p>Best regards,<br>
        Pratik Raj Verma<br>
        Mob: 7903209052</p>
      `,
        });

        res.status(200).json({
            success: true,
            message: "Email sent successfully",
            data: mailResponse,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Cannot send email",
            error: error.message,
        });
    }
};

module.exports = {emailSender};
