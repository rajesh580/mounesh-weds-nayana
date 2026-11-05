import { useState, useEffect, useRef } from 'react';
import s from './Gallery.module.css';

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('[data-reveal]');
    if (!cards) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(24px)';
      card.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      obs.observe(card);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <section className={s.gallery} ref={ref}>
      <div className={s.inner}>
        <p className={s.eyebrow}>Our Moments</p>
        <h2 className={s.title}>Two Hearts, One Journey</h2>

        <div className={s.grid}>
          {/* 1. Featured Landscape: Green Garden Embrace (1280x853) */}
          <div
            className={s.featuredCard}
            data-reveal
            onClick={() => setActivePhoto('/images/couple4.jpg')}
          >
            <img
              src="/images/couple4.jpg"
              alt="Mounesh and Nayana smiling together"
              className={s.featuredImg}
            />
          </div>

          {/* 2. Pair: Temple Steps & Romantic Sparkler Night Shot */}
          <div className={s.pairRow}>
            {/* couple5: Sitting on stone steps */}
            <div
              className={s.portraitCard}
              data-reveal
              onClick={() => setActivePhoto('/images/couple5.jpg')}
            >
              <img
                src="/images/couple5.jpg"
                alt="Mounesh and Nayana at ancient temple"
                className={s.portraitImg}
              />
            </div>

            {/* New portrait: Mounesh in black suit & Nayana in red dress */}
            <div
              className={s.portraitCard}
              data-reveal
              onClick={() => setActivePhoto('/images/couple6.jpg')}
            >
              <img
                src="/images/couple6.jpg"
                alt="Mounesh and Nayana smiling together"
                className={s.portraitImg}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox popup for full view */}
      {activePhoto && (
        <div className={s.lightbox} onClick={() => setActivePhoto(null)}>
          <button
            className={s.lightboxClose}
            onClick={() => setActivePhoto(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={activePhoto}
            alt="Full view"
            className={s.lightboxImg}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
