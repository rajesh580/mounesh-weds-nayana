import s from './TopVideo.module.css';

export default function TopVideo({ videoRef, onPlay, onPause }) {
  return (
    <section className={s.topVideoSection} id="video">
      <div className={s.inner}>
        <p className={s.eyebrow}>Our Story in Motion</p>
        <h2 className={s.title}>Mounesh &amp; Nayana</h2>

        <div className={s.playerCard}>
          <video
            ref={videoRef}
            className={s.videoElement}
            src="/videos/wedding_video.mp4"
            poster="/images/couple4.jpg"
            controls
            playsInline
            preload="auto"
            onPlay={onPlay}
            onPause={onPause}
            onEnded={onPause}
          />
        </div>

        <div className={s.scrollHint}>
          <span className={s.scrollLabel}>Scroll down for invitation</span>
          <div className={s.scrollChevron} />
        </div>
      </div>
    </section>
  );
}
