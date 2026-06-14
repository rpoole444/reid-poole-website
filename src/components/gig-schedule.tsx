const SCHEDULE_URL =
  process.env.NEXT_PUBLIC_GIG_SCHEDULE_URL ||
  "https://app.alpinegrooveguide.com/embed/artists/poole-and-the-gang?theme=light&limit=5";

export function GigSchedule() {
  return (
    <section className="gig-schedule" aria-labelledby="gig-schedule-title">
      <div className="gig-schedule-copy">
        <p className="section-label">Upcoming shows</p>
        <h2 id="gig-schedule-title">Find Reid on stage.</h2>
        <p>
          The live calendar below updates from Alpine Groove Guide as new gigs
          are approved.
        </p>
        <a
          className="text-link dark-link"
          href="https://app.alpinegrooveguide.com/artists/poole-and-the-gang"
          target="_blank"
          rel="noreferrer"
        >
          View the full artist profile <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="gig-schedule-frame">
        <iframe
          src={SCHEDULE_URL}
          title="Reid Poole upcoming shows"
          loading="lazy"
