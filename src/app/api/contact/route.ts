import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    // Check if API key is available
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Η υπηρεσία email δεν είναι διαθέσιμη αυτή τη στιγμή. Παρακαλώ καλέστε μας στο 94 300 800.' },
        { status: 503 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const body: ContactFormData = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Παρακαλώ συμπληρώστε όλα τα απαιτούμενα πεδία' },
        { status: 400 }
      )
    }

    // Email to admins
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #059669; margin: 0; font-size: 28px;">Clean Guard</h1>
            <p style="color: #6b7280; margin: 5px 0 0 0;">Νέο μήνυμα επικοινωνίας</p>
          </div>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #059669; margin-bottom: 25px;">
            <h2 style="color: #065f46; margin: 0 0 15px 0; font-size: 20px;">Στοιχεία Επικοινωνίας</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Όνομα:</td>
                <td style="padding: 8px 0; color: #1f2937;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Τηλέφωνο:</td>
                <td style="padding: 8px 0; color: #1f2937;">${phone || 'Δεν δόθηκε'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Υπηρεσία:</td>
                <td style="padding: 8px 0; color: #1f2937;">${service}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #fefefe; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">Μήνυμα:</h3>
            <p style="color: #1f2937; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              Αυτό το email στάλθηκε από τη φόρμα επικοινωνίας του ιστότοπου Clean Guard
            </p>
          </div>
        </div>
      </div>
    `

    // Email to customer (confirmation)
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #059669; margin: 0; font-size: 28px;">Clean Guard</h1>
            <p style="color: #6b7280; margin: 5px 0 0 0;">Επαγγελματικές Υπηρεσίες Απεντόμωσης</p>
          </div>
          
          <div style="background-color: #f0fdf4; padding: 25px; border-radius: 8px; text-align: center; margin-bottom: 25px;">
            <h2 style="color: #065f46; margin: 0 0 10px 0; font-size: 24px;">Ευχαριστούμε για την επικοινωνία!</h2>
            <p style="color: #047857; margin: 0; font-size: 16px;">Λάβαμε το μήνυμά σας και θα επικοινωνήσουμε μαζί σας σύντομα.</p>
          </div>
          
          <div style="margin-bottom: 25px;">
            <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">Τα στοιχεία που μας στείλατε:</h3>
            <div style="background-color: #fefefe; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Όνομα:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Τηλέφωνο:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${phone || 'Δεν δόθηκε'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Υπηρεσία:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${service}</td>
                </tr>
              </table>
              <div style="margin-top: 15px;">
                <strong style="color: #374151;">Μήνυμα:</strong>
                <p style="color: #1f2937; margin: 10px 0 0 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          </div>
          
          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; margin-bottom: 25px;">
            <h3 style="color: #065f46; margin: 0 0 15px 0; font-size: 18px;">Τι ακολουθεί;</h3>
            <ul style="color: #047857; margin: 0; padding-left: 20px; line-height: 1.6;">
              <li>Θα επικοινωνήσουμε μαζί σας εντός 24 ωρών</li>
              <li>Θα συζητήσουμε τις ανάγκες σας και θα προτείνουμε λύσεις</li>
              <li>Προσφέρουμε δωρεάν έλεγχο και προσφορά</li>
              <li>Εάν συμφωνήσετε, θα προγραμματίσουμε την υπηρεσία</li>
            </ul>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; text-align: center;">
            <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">Χρειάζεστε άμεση βοήθεια;</h3>
            <p style="color: #6b7280; margin: 0 0 15px 0;">Καλέστε μας στο:</p>
            <a href="tel:94300800" style="display: inline-block; background-color: #059669; color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: bold; font-size: 16px;">94 300 800</a>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0;">
              Clean Guard - Επαγγελματικές Υπηρεσίες Απεντόμωσης
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              Email: cgcpest@gmail.com | Τηλέφωνο: 94 300 800 | Κύπρος, Λευκωσία
            </p>
          </div>
        </div>
      </div>
    `

    // Send emails
    const adminEmails = ['akyriakouu@gmail.com', 'giorgosparmakles@gmail.com']
    
    console.log('Attempting to send emails...')
    console.log('API Key exists:', !!process.env.RESEND_API_KEY)
    console.log('API Key starts with re_:', process.env.RESEND_API_KEY?.startsWith('re_'))
    
    try {
      // Send to admins (one at a time to avoid rate limit)
      for (const adminEmail of adminEmails) {
        const result = await resend.emails.send({
          from: 'cleanguard@zeropoint-labs.com',
          to: adminEmail,
          subject: `Νέο μήνυμα από ${name} - ${service}`,
          html: adminEmailHtml,
        })
        console.log('Admin email result:', result)
        
        // Small delay to respect rate limits
        await new Promise(resolve => setTimeout(resolve, 600))
      }

      // Send confirmation to customer
      const customerResult = await resend.emails.send({
        from: 'cleanguard@zeropoint-labs.com',
        to: email,
        subject: 'Επιβεβαίωση μηνύματος - Clean Guard',
        html: customerEmailHtml,
      })
      console.log('Customer email result:', customerResult)
      
    } catch (emailError) {
      console.error('Email sending error:', emailError)
      throw emailError
    }

    return NextResponse.json(
      { message: 'Το μήνυμά σας στάλθηκε επιτυχώς!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Υπήρξε πρόβλημα με την αποστολή του μηνύματος. Παρακαλώ δοκιμάστε ξανά.' },
      { status: 500 }
    )
  }
}
