import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, service, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Use Web3Forms (free, no SMTP needed, works on any hosting)
    // Sign up at https://web3forms.com to get your access key
    // Then add it as environment variable: WEB3FORMS_KEY
    const accessKey = process.env.WEB3FORMS_KEY;

    if (accessKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Project Inquiry from ${name}`,
          from_name: name,
          email: email,
          service: service || "Not specified",
          budget: budget || "Not specified",
          message: message,
          to: "abdurrehman5683@gmail.com",
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Failed to send email");
      }
    } else {
      // Fallback: log to console (visible in Hostinger Runtime logs)
      console.log("=== NEW CONTACT FORM SUBMISSION ===");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Service: ${service}`);
      console.log(`Budget: ${budget}`);
      console.log(`Message: ${message}`);
      console.log("===================================");
      console.warn(
        "WEB3FORMS_KEY not set. Go to https://web3forms.com, enter abdurrehman5683@gmail.com, " +
        "get your access key, and add it as WEB3FORMS_KEY in Hostinger Environment Variables."
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
