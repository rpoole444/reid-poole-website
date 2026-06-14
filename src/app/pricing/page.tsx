import Link from "next/link";

export const metadata = {
  title: "Band Pricing",
  description:
    "Estimated pricing for Reid Poole Music small groups, party bands, jazz ensembles, brass bands, weddings, festivals, and private events.",
};

const fullBandRows = [
  ["Quartet", "$900–$1,600+"],
  ["Quintet", "$1,100–$2,000+"],
  ["Sextet", "$1,300–$2,400+"],
  ["Septet / Larger Band", "$1,600–$3,000+"],
];

const brassRows = [
  ["Five-piece brass band", "Starting around $600"],
  ["Six-piece brass band", "Starting around $700"],
  ["Seven or eight-piece brass band", "Custom quote"],
];

const priceFactors = [
  "Number of musicians",
  "Length of performance",
  "Travel distance",
  "Setup and load-in requirements",
  "Sound system needs",
  "Ceremony or parade logistics",
  "Special song requests",
  "Rehearsal or arrangement needs",
  "Public, private, ticketed, or corporate format",
];

function PriceTable({
  rows,
  label,
}: {
  rows: string[][];
  label: string;
}) {
  return (
    <div className="price-table" role="table" aria-label={label}>
      {rows.map(([name, price]) => (
        <div className="price-row" role="row" key={name}>
          <span role="cell">{name}</span>
          <strong role="cell">{price}</strong>
        </div>
      ))}
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="interior-page pricing-page">
      <article className="interior-content pricing-content">
        <header className="pricing-hero">
          <div>
            <p className="eyebrow">Booking & estimated pricing</p>
            <h1>Find the right band for the room.</h1>
          </div>
          <div className="pricing-hero-note">
            <p>
              Every event is different. These estimates are useful starting
              points, not hard rules.
            </p>
            <Link className="button button-primary" href="/book?service=performance">
              Request a quote <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </header>

        <section className="pricing-principles" aria-label="Booking approach">
          <p>
            From intimate duo and trio settings to full New Orleans-style party
            bands and brass bands, lineups can be shaped around your event,
            vision, and budget.
          </p>
          <blockquote>
            Great music. Fair professional pay. A clear and easy booking
            process.
          </blockquote>
        </section>

        <div className="pricing-sections">
          <section className="price-package" id="small-group">
            <div className="price-package-heading">
              <span>01</span>
              <div>
                <p className="section-label">Intimate settings</p>
                <h2>Small group</h2>
              </div>
              <strong>$300–$1,200+</strong>
            </div>
            <div className="price-package-copy">
              <p>
                Solo, duo, or trio music for private parties, receptions,
                cocktail hours, restaurants, house concerts, and dinner music.
              </p>
              <p>
                Options can include trumpet and vocals, piano, guitar, organ
                trio, swing trio, New Orleans-style trio, or another combination
                selected for the event. A $50 booking fee may apply.
              </p>
            </div>
          </section>

          <section className="price-package" id="full-band">
            <div className="price-package-heading">
              <span>02</span>
              <div>
                <p className="section-label">Dancing & celebration</p>
                <h2>Full band</h2>
              </div>
              <strong>From $900</strong>
            </div>
            <div className="price-package-copy">
              <div>
                <p>
                  Flexible dance and party bands for weddings, festivals,
                  private events, and summer concert series.
                </p>
                <p>
                  Lineups may feature Poole and the Gang, Reid Poole and the
                  Night Owls, the Reid Poole Quintet, or a custom ensemble. A
                  $100 booking fee may apply to quartets and larger groups.
                </p>
              </div>
              <PriceTable rows={fullBandRows} label="Full band estimated pricing" />
            </div>
          </section>

          <section className="price-package" id="brass-band">
            <div className="price-package-heading">
              <span>03</span>
              <div>
                <p className="section-label">Second lines & parades</p>
                <h2>Brass band</h2>
              </div>
              <strong>$600–$3,000+</strong>
            </div>
            <div className="price-package-copy">
              <div>
                <p>
                  New Orleans-style brass band music for ceremonies, second
                  lines, parades, festivals, community events, and raucous
                  celebrations.
                </p>
                <p>
                  Six musicians is the preferred lineup. Five works well for
                  smaller events, while seven or eight creates a larger sound.
                  Full-event pricing depends on duration, travel, production,
                  and band size.
                </p>
              </div>
              <PriceTable rows={brassRows} label="Short brass band feature pricing" />
            </div>
          </section>
        </div>

        <section className="pricing-details">
          <div>
            <p className="section-label">How quotes are built</p>
            <h2>Professional rates, shaped to the event.</h2>
            <p>
              Private-event quotes generally use musician rates of
              $200–$400+ per player. Larger concerts, weddings, festivals, and
              high-production events may require higher rates.
            </p>
            <p>
              These numbers are not meant to scare anyone off. Share what you
              are planning and what you hope to spend, and we will see what is
              possible.
            </p>
          </div>
          <ul>
            {priceFactors.map((factor) => (
              <li key={factor}>{factor}</li>
            ))}
          </ul>
        </section>

        <section className="pricing-cta">
          <p className="section-label">Let&apos;s talk</p>
          <h2>Bring the date, place, vision, and budget. We&apos;ll build the lineup.</h2>
          <div>
            <Link className="button button-primary" href="/book?service=performance">
              Start a band inquiry <span aria-hidden="true">↗</span>
            </Link>
            <a className="text-link" href="mailto:poole.reid@gmail.com">
              Email Reid directly <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
