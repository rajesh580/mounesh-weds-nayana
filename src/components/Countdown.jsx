import { useState, useEffect } from 'react';
import s from './Countdown.module.css';

const WEDDING = new Date('2026-11-16T10:00:00+05:30');

function pad(n, digits = 2) {
  return String(Math.max(0, n)).padStart(digits, '0');
}

function getTimeLeft() {
  const diff = WEDDING - new Date();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
  return {
    days:  Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    mins:  Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    secs:  Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={s.countdown}>
      <p className={s.label}>The celebration begins in</p>
      <p className={s.heading}>Counting down to our special day</p>
      <div className={s.grid}>
        <div className={s.unit}>
          <span className={s.num}>{pad(time.days, 3)}</span>
          <span className={s.unitLabel}>Days</span>
        </div>
        <span className={s.sep}>:</span>
        <div className={s.unit}>
          <span className={s.num}>{pad(time.hours)}</span>
          <span className={s.unitLabel}>Hours</span>
        </div>
        <span className={s.sep}>:</span>
        <div className={s.unit}>
          <span className={s.num}>{pad(time.mins)}</span>
          <span className={s.unitLabel}>Minutes</span>
        </div>
        <span className={s.sep}>:</span>
        <div className={s.unit}>
          <span className={s.num}>{pad(time.secs)}</span>
          <span className={s.unitLabel}>Seconds</span>
        </div>
      </div>
    </section>
  );
}
