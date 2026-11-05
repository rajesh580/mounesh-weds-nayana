import s from './Venue.module.css';

export default function Venue({ mapsLink = 'https://maps.app.goo.gl/ZMc5EdcTQ67TXEww7' }) {
  // Google Maps embed centered on the exact location in Chitapur
  const embedUrl = 'https://maps.google.com/maps?q=16.178260,76.340721&hl=en&z=16&output=embed';

  return (
    <section className={s.venue} id="venue">
      <p className={s.eyebrow}>Where to Find Us</p>
      <h2 className={s.title}>Venue &amp; Location</h2>

      <div className={s.card}>
        <p className={s.venueName}>Chitapur</p>
        <p className={s.venueAddress}>
          Chitapur, Karnataka 584127
        </p>

        {/* Embedded Interactive Google Map */}
        <div className={s.mapWrapper}>
          <iframe
            className={s.mapIframe}
            title="Wedding Venue Location - Chitapur"
            src={embedUrl}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a
          className={s.mapBtn}
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          Get Directions on Google Maps
        </a>
      </div>
    </section>
  );
}
