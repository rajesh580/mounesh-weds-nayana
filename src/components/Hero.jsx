import { useEffect, useRef } from 'react';
import s from './Hero.module.css';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('[data-reveal]');
    if (!els) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)';
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section className={s.hero} ref={ref}>
      <div className={s.bgCircle} />
      <div className={s.bgCircle} />

      <p className={s.eyebrow} data-reveal>With the blessings of the Almighty</p>

      <div className={s.ornament} data-reveal>✦</div>

      <h1 className={s.coupleName} data-reveal>
        Mounesh
        <span className={s.ampersand}>weds</span>
        Nayana
      </h1>
      <p className={s.subname} data-reveal>(Kaveri)</p>

      <div className={s.divider} data-reveal />

      <div className={s.dateBlock} data-reveal>
        <p className={s.date}>16 · November · 2026</p>
        <p className={s.timePlace}>Monday, 10:00 AM — Chitapur</p>
      </div>

      <p className={s.welcome} data-reveal>
        Dear Friends &amp; Family,<br />
        Join us for a blessed day of love, laughter, and new beginnings as we begin our forever together.
      </p>

      <div className={s.scrollHint}>
        <span className={s.scrollLabel}>Scroll</span>
        <div className={s.scrollLine} />
      </div>
    </section>
  );
}
