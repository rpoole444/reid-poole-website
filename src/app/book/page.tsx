import Link from "next/link";
import { BookingForm } from "@/components/booking-form";

export const metadata = {
  title: "Book Reid",
  description:
    "Request live music, lessons, artist mentorship, event direction, or music technology services from Reid Poole.",
};

const serviceDefaults: Record<string, string> = {
  performance: "Live performance",
  lessons: "Private lessons",
  technology: "Music technology",
  wedding: "Wedding music",
};

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string | string[] }>;
}) {
  const requestedService = (await searchParams).service;
  const serviceKey = Array.isArray(requestedService)
    ? requestedService[0]
    : requestedService;
  const defaultService = serviceKey ? serviceDefaults[serviceKey] || "" : "";

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
            <Link className="booking-pricing-link" href="/pricing">
              Review estimated band pricing <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <BookingForm defaultService={defaultService} />
      </article>
    </main>
  );
}
