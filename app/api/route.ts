import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { participants, locale } = await req.json();

  const translations = {
    en: {
      subject: "🎁 Your Secret Santa Assignment!",
      title: "Secret Santa Assignment",
      greeting: "Ho Ho Ho",
      assignmentText: "You are the Secret Santa for:",
      contact: "Contact:",
      wishlist: "Wishlist:",
      budget: "Budget Range:",
      footer: "Remember to keep it a secret and spread the joy!",
      plainTextIntro: "Hello",
      plainTextAssigned: "You have been assigned as Secret Santa for:",
      plainTextEmail: "Their email address is:",
      plainTextWishlist: "Their wishlist:",
      plainTextBudget: "Budget range:",
      plainTextClosing: "Happy gifting! 🎄🎅"
    },
    es: {
      subject: "🎁 ¡Tu asignación de Amigo Invisible!",
      title: "Asignación de Amigo Invisible",
      greeting: "¡Jo Jo Jo",
      assignmentText: "Eres el Amigo Invisible de:",
      contact: "Contacto:",
      wishlist: "Lista de deseos:",
      budget: "Rango de presupuesto:",
      footer: "¡Recuerda mantenerlo en secreto y difundir la alegría!",
      plainTextIntro: "Hola",
      plainTextAssigned: "Has sido asignado como Amigo Invisible para:",
      plainTextEmail: "Su dirección de correo electrónico es:",
      plainTextWishlist: "Su lista de deseos:",
      plainTextBudget: "Rango de presupuesto:",
      plainTextClosing: "¡Felices regalos! 🎄🎅"
    },
    cat: {
      subject: "🎁 La teva assignació d'Amic Invisible!",
      title: "Assignació d'Amic Invisible",
      greeting: "Ho Ho Ho",
      assignmentText: "Ets l'Amic Invisible de:",
      contact: "Contacte:",
      wishlist: "Llista de desitjos:",
      budget: "Rang de pressupost:",
      footer: "Recorda mantenir-ho en secret i difondre l'alegria!",
      plainTextIntro: "Hola",
      plainTextAssigned: "Has estat assignat com a Amic Invisible per a:",
      plainTextEmail: "La seva adreça de correu electrònic és:",
      plainTextWishlist: "La seva llista de desitjos:",
      plainTextBudget: "Rang de pressupost:",
      plainTextClosing: "Feliços regals! 🎄🎅"
    },
    it: {
      subject: "🎁 La tua Assegnazione Secret Santa!",
      title: "Assegnazione Secret Santa",
      greeting: "Ho Ho Ho",
      assignmentText: "Sei il Secret Santa per:",
      contact: "Contatto:",
      wishlist: "Lista dei desideri:",
      budget: "Range di budget:",
      footer: "Ricorda di mantenere il segreto e diffondere la gioia!",
      plainTextIntro: "Ciao",
      plainTextAssigned: "Sei stato assegnato come Secret Santa per:",
      plainTextEmail: "Il loro indirizzo email è:",
      plainTextWishlist: "La loro lista dei desideri:",
      plainTextBudget: "Range di budget:",
      plainTextClosing: "Buoni regali! 🎄🎅"
    },
    fr: {
      subject: "🎁 Votre Attribution Secret Santa !",
      title: "Attribution Secret Santa",
      greeting: "Ho Ho Ho",
      assignmentText: "Vous êtes le Secret Santa pour :",
      contact: "Contact :",
      wishlist: "Liste de souhaits :",
      budget: "Fourchette de budget :",
      footer: "N'oubliez pas de garder le secret et de partager la joie !",
      plainTextIntro: "Bonjour",
      plainTextAssigned: "Vous avez été désigné comme Secret Santa pour :",
      plainTextEmail: "Leur adresse email est :",
      plainTextWishlist: "Leur liste de souhaits :",
      plainTextBudget: "Fourchette de budget :",
      plainTextClosing: "Joyeux cadeaux ! 🎄🎅"
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  // Create assignments by shuffling participants
  const assignments = [];
  const shuffled = [...participants];
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
    for (const { giver, receiver } of assignments) {
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(to bottom right, #ff4444, #ff0000); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0;">🎄 ${t.title} 🎅</h1>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <p style="font-size: 18px; color: #333;">${t.greeting} ${giver.username}! 🎅</p>
            
            <div style="background: #f8f8f8; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="font-size: 16px; color: #333; margin: 0;">
                ${t.assignmentText}
                <br>
                <span style="font-size: 24px; font-weight: bold; color: #ff0000; display: block; margin: 10px 0;">
                  ${receiver.username}
                </span>
              </p>
            </div>

            <div style="margin: 20px 0;">
              <p style="color: #666; margin: 5px 0;">
                <strong>${t.contact}</strong> ${receiver.email}
              </p>
              
              ${receiver.wishlist ? `
                <div style="background: #fff3f3; padding: 15px; border-radius: 8px; margin: 10px 0;">
                  <p style="color: #666; margin: 0;">
                    <strong>${t.wishlist}</strong><br>
                    ${receiver.wishlist}
                  </p>
                </div>
              ` : ''}
              
              ${receiver.budget ? `
                <p style="color: #666; margin: 5px 0;">
                  <strong>${t.budget}</strong> ${receiver.budget}
                </p>
              ` : ''}
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #888; font-style: italic;">
                ${t.footer} 🎁✨
              </p>
            </div>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: '"Secret Santa Organizer" <' + process.env.EMAIL_USER + ">",
        to: giver.email,
        subject: t.subject,
        html: emailHtml,
        text: `${t.plainTextIntro} ${giver.username},\n\n${t.plainTextAssigned} ${receiver.username}\n${t.plainTextEmail} ${receiver.email}${receiver.wishlist ? '\n\n' + t.plainTextWishlist + ' ' + receiver.wishlist : ''}${receiver.budget ? '\n\n' + t.plainTextBudget + ' ' + receiver.budget : ''}\n\n${t.plainTextClosing}`,
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
