"use client";

import { FormEvent, useState } from "react";

const serviceOptions = [
  "Live performance",
  "Wedding music",
  "Corporate or private event",
  "Private lessons",
  "School or college teaching",
  "Artist development",
  "Creative event direction",
  "Music technology",
  "Other",
];

export function BookingForm({ defaultService = "" }: { defaultService?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const service = String(data.get("service") || "New inquiry");
    const name = String(data.get("name") || "");
    const lines = [
      `Name: ${name}`,
      `Email: ${data.get("email") || ""}`,
      `Phone: ${data.get("phone") || "Not provided"}`,
      `Service: ${service}`,
      `Preferred date: ${data.get("date") || "Flexible / not provided"}`,
      `Location: ${data.get("location") || "Not provided"}`,
      `Guest count: ${data.get("guests") || "Not provided"}`,
      `Budget: ${data.get("budget") || "Not provided"}`,
      `How they found Reid: ${data.get("referral") || "Not provided"}`,
      "",
      "Project details:",
      String(data.get("details") || ""),
    ];

    const subject = encodeURIComponent(`${service} inquiry from ${name}`);
    const body = encodeURIComponent(lines.join("\n"));
    setSubmitted(true);
    window.location.href = `mailto:poole.reid@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-field form-field-wide">
        <label htmlFor="service">What can I help with?</label>
        <select id="service" name="service" required defaultValue={defaultService}>
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="form-field">
        <label htmlFor="phone">Phone <span>optional</span></label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="form-field">
        <label htmlFor="date">Preferred date <span>optional</span></label>
        <input id="date" name="date" type="date" />
      </div>
      <div className="form-field">
        <label htmlFor="location">Location or venue</label>
        <input
          id="location"
          name="location"
          placeholder="City, venue, or online"
        />
      </div>
      <div className="form-field">
        <label htmlFor="guests">Estimated guests <span>optional</span></label>
        <input id="guests" name="guests" inputMode="numeric" placeholder="e.g. 120" />
      </div>
      <div className="form-field">
        <label htmlFor="budget">Working budget <span>optional</span></label>
        <select id="budget" name="budget" defaultValue="">
          <option value="">Select a range</option>
          <option>Under $500</option>
          <option>$500–$1,000</option>
          <option>$1,000–$2,500</option>
          <option>$2,500–$5,000</option>
          <option>$5,000+</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="referral">How did you find me? <span>optional</span></label>
        <input id="referral" name="referral" />
      </div>
      <div className="form-field form-field-wide">
        <label htmlFor="details">Tell me about the project</label>
        <textarea
          id="details"
          name="details"
          required
          rows={7}
          placeholder="What are you planning, what should it feel like, and what would make it a success?"
        />
      </div>

      <div className="form-submit form-field-wide">
        <button className="button button-primary" type="submit">
          Prepare inquiry <span aria-hidden="true">↗</span>
        </button>
        <p>
          This opens your email app with the details filled in. Nothing is sent
          until you review and send it.
        </p>
      </div>
      {submitted && (
        <p className="form-status form-field-wide" role="status">
          Your email app should open now. If it does not, email{" "}
          <a href="mailto:poole.reid@gmail.com">poole.reid@gmail.com</a>.
        </p>
      )}
    </form>
  );
}
