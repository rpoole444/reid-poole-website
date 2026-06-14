import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Music", href: "/music" },
  { label: "Photos", href: "/photos" },
  { label: "Services", href: "/#services" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Reid Poole home">
        <span>RP</span>
        <strong>Reid Poole</strong>
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link href={item.href} key={item.label}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className="header-cta" href="/book">
        Book / inquire
      </Link>

      <details className="mobile-nav">
        <summary>
          <span>Menu</span>
          <i aria-hidden="true" />
        </summary>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
          <Link className="mobile-book-link" href="/book">
            Book / inquire <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </details>
    </header>
  );
}
