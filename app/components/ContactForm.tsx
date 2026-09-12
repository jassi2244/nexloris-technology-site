"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";

const unavailableMessage = "We couldn't send your enquiry. Your details are still here. Please try again, or email us directly.";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const inFlight = useRef(false);

  useEffect(() => {
    const status = new URLSearchParams(window.location.search).get("form");
    if (status === "invalid") setError("Please check your name, email address and project details, then try again.");
    if (status === "config" || status === "error") setError(unavailableMessage);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    inFlight.current = true;
    setSending(true);
    setError("");
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
        redirect: "error",
      });
      const result = await response.json();
      if (response.ok && result.ok === true) {
        window.location.assign("/thank-you");
        return;
      }
      setError(result.code === "invalid"
        ? "Please check your name, email address and project details, then try again."
        : unavailableMessage);
    } catch {
      setError("We couldn't confirm whether your enquiry was sent. Your details are still here. Please check your connection or email us before retrying.");
    }
    inFlight.current = false;
    setSending(false);
  }

  return (
    <form className="contact-form" method="POST" action="/api/contact" onSubmit={submit} aria-busy={sending}>
      <p className="form-hint">Fields marked * are required.</p>
      <p className="hidden-field" aria-hidden="true">
        <label>Don&apos;t fill this out:<input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>
      <fieldset disabled={sending} className="form-fields">
        <div className="form-row">
          <label>Name *<input required name="name" type="text" autoComplete="name" maxLength={120} placeholder="Your name" /></label>
          <label>Email *<input required name="email" type="email" autoComplete="email" maxLength={180} placeholder="you@company.com" /></label>
        </div>
        <label>Company (optional)<input name="company" type="text" autoComplete="organization" maxLength={180} placeholder="Company or business name" /></label>
        <label>What do you need? (optional)
          <select name="service" defaultValue="">
            <option value="">Select a service</option>
            <option>Website Design &amp; Development</option>
            <option>Custom Software</option>
            <option>Web Application</option>
            <option>API / Integration</option>
            <option>SaaS / Digital Product</option>
            <option>AI-Enabled Solution</option>
            <option>E-commerce Solutions</option>
            <option>Maintenance &amp; Support</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label>Project details *<textarea required name="message" rows={5} maxLength={4000} placeholder="Tell us a little about the project, goals and timeline." /></label>
      </fieldset>
      <div className="form-feedback" aria-live="polite" aria-atomic="true">
        {error && <p className="form-error">{error} <a href="mailto:nexloristechnology@gmail.com">Email Nexloris</a></p>}
        {sending && <p className="form-hint">Sending your enquiry… Please keep this page open.</p>}
      </div>
      <button className="button submit-button" type="submit" disabled={sending}>
        {sending ? "Sending enquiry…" : "Send Project Enquiry"} <span aria-hidden="true">↗</span>
      </button>
      <small>By submitting, you are only sending a project enquiry. No spam, no mailing list.</small>
    </form>
  );
}
