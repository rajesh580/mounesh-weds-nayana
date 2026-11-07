import s from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={s.navbar}>
      <div className={s.container}>
        {/* Brand / Favicon Logo on the Nav Bar */}
        <a href="#video" className={s.brand} aria-label="Mounesh &amp; Nayana Wedding Invitation">
          <img
            src="/favicon.svg"
            alt="Mounesh &amp; Nayana Favicon Logo"
            className={s.faviconLogo}
            width="34"
            height="34"
          />
          <div className={s.brandText}>
            <span className={s.names}>Mounesh &amp; Nayana</span>
            <span className={s.date}>16 · 11 · 2026</span>
          </div>
        </a>

        {/* Navigation Quick Links */}
        <div className={s.links}>
          <a href="#video" className={s.link}>Video</a>
          <a href="#gallery" className={s.link}>Gallery</a>
          <a href="#events" className={s.link}>Events</a>
          <a href="#venue" className={s.venueBtn}>Venue &amp; Map</a>
        </div>
      </div>
    </nav>
  );
}
