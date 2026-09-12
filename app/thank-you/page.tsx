import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enquiry received | Nexloris Technology",
  robots: { index: false, follow: true },
};

export default function ThankYou() {
  return (
    <main className="thank-you-page">
      <div className="thank-you-card">
        <p className="eyebrow">ENQUIRY RECEIVED</p>
        <h1>Thanks for reaching out.</h1>
        <p>Your project enquiry has been submitted. Nexloris Technology will review it and get back to you shortly.</p>
        <Link className="button" href="/">Back to homepage</Link>
      </div>
    </main>
  );
}
