"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) throw new Error("Unable to send");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.18em] text-neutral-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          required
          className="w-full border-0 border-b border-neutral-400 bg-transparent px-0 py-3 text-lg outline-none transition-colors focus:border-black"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.18em] text-neutral-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
          className="w-full border-0 border-b border-neutral-400 bg-transparent px-0 py-3 text-lg outline-none transition-colors focus:border-black"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.18em] text-neutral-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none border-0 border-b border-neutral-400 bg-transparent px-0 py-3 text-lg outline-none transition-colors focus:border-black"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-4 border-b border-black pb-1 text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {status === "sending" ? "Sending..." : "Send Message →"}
      </button>

      {status === "success" && (
        <p className="text-sm text-neutral-700" role="status">
          Thank you. Your message has been sent successfully.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
