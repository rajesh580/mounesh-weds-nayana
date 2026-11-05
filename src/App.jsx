import { useState, useRef } from 'react';

import AudioButton       from './components/AudioButton';
import TopVideo          from './components/TopVideo';
import Hero              from './components/Hero';
import Countdown         from './components/Countdown';
import Gallery           from './components/Gallery';
import Schedule          from './components/Schedule';
import Venue             from './components/Venue';
import Closing           from './components/Closing';

import './index.css';

// Google Maps link provided
const MAPS_LINK = 'https://maps.app.goo.gl/soSMSbcXSrPFrJks5';

export default function App() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  // Floating button toggles video play/pause
  function togglePlayback() {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  }

  return (
    <>
      {/* Floating Play/Pause Button (Burgundy circle) */}
      <AudioButton
        playing={playing}
        visible={true}
        onToggle={togglePlayback}
      />

      {/* Main Invitation Page */}
      <main
        style={{
          minHeight: '100vh',
          background: '#F9F3E8',
        }}
      >
        {/* 1. TOP VIDEO: Plays automatically on top with sound */}
        <TopVideo
          videoRef={videoRef}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />

        {/* 2. Hero Welcome & Names */}
        <Hero />

        {/* 3. Couple Portrait Pair (Temple doorway & Garden pathway) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
            maxWidth: '620px',
            margin: '0 auto 40px',
            padding: '0 16px',
          }}
        >
          <div style={{ borderRadius: '4px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(100,65,20,0.1)' }}>
            <img
              src="/images/couple2.jpg"
              alt="Mounesh and Nayana at temple doorway"
              style={{
                width: '100%',
                aspectRatio: '2/3',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
          </div>
          <div style={{ borderRadius: '4px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(100,65,20,0.1)' }}>
            <img
              src="/images/couple3.jpg"
              alt="Mounesh and Nayana in traditional attire"
              style={{
                width: '100%',
                aspectRatio: '2/3',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* 4. Live Countdown */}
        <Countdown />

        {/* 5. Photo Gallery with Full Sparkler Photo & Lightbox */}
        <Gallery />

        {/* 6. Schedule of Events (Perfect 3-Column Timeline) */}
        <Schedule />

        {/* 7. Venue & Directions with Google Maps */}
        <Venue mapsLink={MAPS_LINK} />

        {/* 8. Romantic Closing */}
        <Closing />

        {/* Footer */}
        <footer
          style={{
            background: '#3A2A1A',
            padding: '44px 24px 110px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '10px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(200, 160, 100, 0.65)',
              maxWidth: '460px',
              margin: '0 auto',
              lineHeight: 1.8,
            }}
          >
            Mounesh weds Nayana
            <span
              style={{
                display: 'block',
                fontSize: '9px',
                letterSpacing: '0.24em',
                color: 'rgba(200, 160, 100, 0.45)',
                marginTop: '6px',
              }}
            >
              16 November 2026 — Chitapur
            </span>
          </p>
        </footer>
      </main>
    </>
  );
}
