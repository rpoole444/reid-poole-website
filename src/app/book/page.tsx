import { BookingForm } from "@/components/booking-form";

export const metadata = {
  title: "Book Reid",
  description:
    "Request live music, lessons, artist mentorship, event direction, or music technology services from Reid Poole.",
};

export default function BookPage() {
  return (
    <main className="interior-page booking-page">
      <article className="interior-content booking-content">
        <div className="booking-intro">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h1>Tell me what you&apos;re building.</h1>
          </div>
          <div className="booking-aside">
            <p>
              Share what you know so far. Dates, budgets, and details can
              change; a strong starting point helps me respond with useful
              options.
            </p>
            <dl>
              <div>
                <dt>Based in</dt>
                <dd>Colorado Springs</dd>
              </div>
              <div>
                <dt>Available for</dt>
                <dd>Local and traveling work</dd>
              </div>
              <div>
                <dt>Direct email</dt>
                <dd>
                  <a href="mailto:poole.reid@gmail.com">poole.reid@gmail.com</a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <BookingForm />
      </article>
    </main>
  );
}
