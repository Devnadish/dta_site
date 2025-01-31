"use server";
import { z } from "zod";
import db from "@/lib/prisma";

const formSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters.")
    .max(50, "Name must not exceed 50 characters.")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces."),
  mobile: z
    .string()
    .regex(
      /^\d{10,15}$/,
      "Mobile number must be valid and between 10 to 15 digits."
    ),
  brief: z
    .string()
    .min(10, "Brief description must be at least 10 characters.")
    .max(500, "Brief description must not exceed 500 characters."),
});

async function sendWhatsAppMessage(message: string) {
  const apiKey = process.env.CALLMEBOT_API_KEY as string;
  const phone = process.env.CALLMEBOT_PHONE as string;
  const encodedMessage = encodeURIComponent(message);

  try {
    const response = await fetch(
      `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodedMessage}&apikey=${apiKey}`
    );

    if (!response.ok) {
      console.error("Failed to send WhatsApp message");
    }
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
  }
}

export async function submitForm(
  prevState: Record<string, any>,
  formData: FormData
) {
  try {
    const data = {
      name: formData.get("name")?.toString().trim() || "",
      mobile: formData.get("mobile")?.toString().trim() || "",
      brief: formData.get("brief")?.toString().trim() || "",
      type: formData.get("type")?.toString().trim() || "",
    };

    const result = formSchema.safeParse(data);
    if (!result.success) {
      return { success: false, errors: result.error.flatten().fieldErrors };
    }

    const request = { name: data.name, mobile: data.mobile, brief: data.brief };
    await db.expressQuery.create({ data: request });

    const message = `${data.type} :\nName: ${data.name}\nMobile: ${data.mobile}\nBrief: ${data.brief}`;
    await sendWhatsAppMessage(message);

    return {
      success: true,
      message: "Form submitted successfully! WhatsApp notification sent.",
    };
  } catch (error) {
    console.error("Error processing form:", error);
    return {
      success: false,
      message: "An error occurred while processing your request.",
    };
  }
}
