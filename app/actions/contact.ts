"use server";

import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabase/server";

export async function submitContact(formData: FormData) {
  const fullname = (formData.get("fullname") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!fullname || !email || !message) {
    redirect("/?contact=error&reason=missing");
  }

  const { error } = await supabaseServer.from("contactus").insert({
    fullname,
    email,
    message,
  });

  if (error) {
    console.error("Contact insert error:", error);
    redirect("/?contact=error");
  }

  redirect("/?contact=success");
}
