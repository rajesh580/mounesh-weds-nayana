import { useEffect, useRef } from 'react';
import s from './Schedule.module.css';

const events = [
  { time: '9:30 AM',  title: 'Guest Arrival',       sub: 'Welcome drinks & gathering' },
  { time: '10:00 AM', title: 'Wedding Ceremony',     sub: 'Auspicious Muhurtham' },
  { time: '12:00 PM', title: 'Blessings & Rituals', sub: 'Traditional family blessings' },
  { time: '1:00 PM',  title: 'Wedding Feast',       sub: 'Grand lunch celebration' },
];

export default function Schedule() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(`.${s.row}`);
    if (!els) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add(s.visible);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className={s.schedule} id="events">
      <div className={s.inner}>
        <p className={s.eyebrow}>November 16, 2026</p>
        <h2 className={s.title}>Schedule of Events</h2>

        <div className={s.timeline} ref={ref}>
          {/* Continuous center spine */}
          <div className={s.centerSpine} />

          {events.map((ev, i) => {
            const isAlternate = i % 2 === 1; // 2nd & 4th events flipped
            return (
              <div
                key={i}
                className={`${s.row} ${isAlternate ? s.rowFlipped : s.rowStandard}`}
              >
                {/* Left Cell */}
                <div className={s.cellLeft}>
                  {isAlternate ? (
                    <div className={s.contentBlock}>
                      <span className={s.eventTitle}>{ev.title}</span>
                      {ev.sub && <span className={s.eventSub}>{ev.sub}</span>}
                    </div>
                  ) : (
                    <span className={s.timeTag}>{ev.time}</span>
                  )}
                </div>

                {/* Center Node (Dot) */}
                <div className={s.cellCenter}>
                  <div className={s.dot}>
                    <div className={s.dotCore} />
                  </div>
                </div>

                {/* Right Cell */}
                <div className={s.cellRight}>
                  {isAlternate ? (
                    <span className={s.timeTag}>{ev.time}</span>
                  ) : (
                    <div className={s.contentBlock}>
                      <span className={s.eventTitle}>{ev.title}</span>
                      {ev.sub && <span className={s.eventSub}>{ev.sub}</span>}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
