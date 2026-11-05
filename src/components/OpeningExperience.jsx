import { useState, useEffect } from 'react';
import s from './OpeningExperience.module.css';

export default function OpeningExperience({ onOpen, onComplete }) {
  // stages: 'envelope' -> 'curtains-closed' -> 'curtains-opening' -> 'done'
  const [stage, setStage] = useState('envelope');

  // Prevent background scrolling while the opening overlay is active
  useEffect(() => {
    if (stage !== 'done') {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [stage]);

  function handleEnvelopeClick() {
    if (stage !== 'envelope') return;

    // 1. Notify parent immediately to start video & audio
    if (onOpen) onOpen();

    // 2. Ensure page is scrolled to absolute top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // 3. Fade out envelope overlay
    setStage('curtains-closed');

    // 4. Trigger curtain sweep open right after paint
    setTimeout(() => {
      setStage('curtains-opening');
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 180);

    // 5. When curtains finish sweeping (~1.8s)
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (onComplete) onComplete();
      setStage('done');
    }, 2000);
  }

  if (stage === 'done') return null;

  return (
    <div className={s.container}>
      {/* ── STAGE 1: ENVELOPE OVERLAY ── */}
      <div
        className={`${s.envelopeScreen} ${
          stage !== 'envelope' ? s.envelopeOpening : ''
        }`}
        onClick={handleEnvelopeClick}
      >
        <div className={s.envelopeWrap}>
          <div className={s.envelopeCard}>
            <div className={s.waxSeal}>
              <span className={s.waxSealHeart}>♥</span>
            </div>
            <div className={s.coupleNameOnEnv}>Mounesh &amp; Nayana</div>
          </div>

          <div className={s.tapWrap}>
            <span className={s.tapLabel}>Tap to open</span>
            <div className={s.tapChevron} />
          </div>
        </div>
      </div>

      {/* ── STAGE 2: REAL THEATER VELVET CURTAINS ── */}
      <div
        className={`${s.curtainsStage} ${
          stage === 'curtains-opening' ? s.opening : ''
        }`}
      >
        {/* Soft proscenium shadow */}
        <div className={s.prosceniumShadow} />

        {/* Top pelmet brass valance */}
        <div className={s.pelmet}>
          <div className={s.pelmetInner} />
        </div>

        {/* Left Curtain Panel */}
        <div className={s.curtainLeft} />

        {/* Right Curtain Panel */}
        <div className={s.curtainRight} />

        {/* Center Stage Monogram */}
        <div className={s.stageCentre}>
          <div className={s.stageOrn}>✦</div>
          <h1 className={s.stageTitle}>
            Mounesh
            <span className={s.stageAmp}>weds</span>
            Nayana
          </h1>
          <p className={s.stageDate}>16 · November · 2026</p>
        </div>
      </div>
    </div>
  );
}
