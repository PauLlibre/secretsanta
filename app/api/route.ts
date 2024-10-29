import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { participants } = await req.json();

  // Create assignments by shuffling participants
  let assignments = [];
  let shuffled = [...participants];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Assign each person their secret santa recipient
  for (let i = 0; i < shuffled.length; i++) {
    assignments.push({
      giver: shuffled[i],
      receiver: shuffled[(i + 1) % shuffled.length],
    });
  }

  // Send emails with assignments
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    for (let { giver, receiver } of assignments) {
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(to bottom right, #ff4444, #ff0000); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0;">🎄 Secret Santa Assignment 🎅</h1>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <p style="font-size: 18px; color: #333;">Ho Ho Ho ${giver.username}! 🎅</p>
            
            <div style="background: #f8f8f8; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="font-size: 16px; color: #333; margin: 0;">
                You are the Secret Santa for:
                <br>
                <span style="font-size: 24px; font-weight: bold; color: #ff0000; display: block; margin: 10px 0;">
                  ${receiver.username}
                </span>
              </p>
            </div>

            <div style="margin: 20px 0;">
              <p style="color: #666; margin: 5px 0;">
                <strong>Contact:</strong> ${receiver.email}
              </p>
              
              ${receiver.wishlist ? `
                <div style="background: #fff3f3; padding: 15px; border-radius: 8px; margin: 10px 0;">
                  <p style="color: #666; margin: 0;">
                    <strong>Wishlist:</strong><br>
                    ${receiver.wishlist}
                  </p>
                </div>
              ` : ''}
              
              ${receiver.budget ? `
                <p style="color: #666; margin: 5px 0;">
                  <strong>Budget Range:</strong> ${receiver.budget}
                </p>
              ` : ''}
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #888; font-style: italic;">
                Remember to keep it a secret and spread the joy! 🎁✨
              </p>
            </div>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: '"Secret Santa Organizer" <' + process.env.EMAIL_USER + ">",
        to: giver.email,
        subject: "🎁 Your Secret Santa Assignment!",
        html: emailHtml,
        text: `Hello ${giver.username},\n\nYou have been assigned as Secret Santa for: ${receiver.username}\nTheir email address is: ${receiver.email}${receiver.wishlist ? '\n\nTheir wishlist: ' + receiver.wishlist : ''}${receiver.budget ? '\n\nBudget range: ' + receiver.budget : ''}\n\nHappy gifting! 🎄🎅`,
      });
    }

    return new Response(
      JSON.stringify({ message: "Emails sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error sending emails" }), {
      status: 500,
    });
  }
}
