"use client"; // Required for using client-side hooks
import { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { submitForm } from "./action";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner"; // Importing Sonner's toast function

// Define the initial state for the form
const initialState = {
  success: false,
  message: undefined,
  errors: {
    name: undefined,
    mobile: undefined,
    brief: undefined,
  },
};

export default function FormData({
  locale,
  type,
}: {
  locale: string;
  type: string;
}) {
  const [state, action, isPending] = useActionState(submitForm, initialState);

  // Show errors in the toaster using Sonner Toast
  useEffect(() => {
    if (state.errors) {
      Object.values(state.errors).forEach((error) => {
        if (error) {
          // Show error in toast
          toast.error(error); // Display error using Sonner toast
        }
      });
    }
  }, [state.errors]); // Trigger when errors change

  return (
    <Card className="w-full mx-auto shadow-lg p-6 rounded-xl border border-gray-200 bg-white">
      <CardContent>
        <form action={action} className="grid gap-6">
          {/* type  Field */}
          <Input id="type" name="type" type="hidden" defaultValue={type} />
          {/* Name Field */}
          <div className="grid gap-2">
            <Label htmlFor="name" className="font-semibold">
              {locale === "ar" ? "الاسم" : "Name"}
            </Label>
            <Input
              id="name"
              name="name"
              className={state.errors?.name ? "border-red-500" : ""}
            />
          </div>

          {/* Mobile Field */}
          <div className="grid gap-2">
            <Label htmlFor="mobile" className="font-semibold">
              {locale === "ar" ? "رقم الجوال" : "Mobile"}
            </Label>
            <Input
              id="mobile"
              name="mobile"
              type="tel"
              className={state.errors?.mobile ? "border-red-500" : ""}
            />
          </div>

          {/* Brief Description Field */}
          <div className="grid gap-2">
            <Label htmlFor="brief" className="font-semibold">
              {locale === "ar" ? "وصف مختصر" : "Brief"}
            </Label>
            <Textarea
              id="brief"
              name="brief"
              className={state.errors?.brief ? "border-red-500" : ""}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            {isPending
              ? locale === "ar"
                ? "جارٍ الإرسال..."
                : "Sending..."
              : locale === "ar"
              ? "ارسال"
              : "Send"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
