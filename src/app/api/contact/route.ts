import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json(); // { name, email, message }

    // ⚡️ Yaha tum data ko DB/email me save kar sakte ho
    console.log("New Contact Message:", data);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
