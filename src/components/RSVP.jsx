import { useState } from 'react';
import s from './RSVP.module.css';

export default function RSVP() {
  const [open, setOpen]       = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm]       = useState({
    name: '', attendance: '', guests: '1', message: '',
  });

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className={s.section}>
      <p className={s.eyebrow}>Your Presence Matters</p>
      <h2 className={s.title}>Confirm Your Attendance</h2>
      <p className={s.sub}>
        To help us prepare for a joyful celebration, kindly let us know if you can join us.
      </p>

      <button className={s.waxBtn} onClick={() => setOpen(true)}>✉</button>
      <p className={s.cta}>Click to open your RSVP</p>

      {/* Modal */}
      <div className={`${s.backdrop} ${open ? s.open : ''}`} onClick={e => e.target === e.currentTarget && setOpen(false)}>
        <div className={s.box}>
          <button className={s.closeBtn} onClick={() => setOpen(false)}>✕</button>

          {!submitted ? (
            <>
              <h2 className={s.modalTitle}>Confirm Your Attendance</h2>
              <p className={s.modalSub}>We would be honoured to have you with us.</p>

              <form onSubmit={handleSubmit}>
                <div className={s.field}>
                  <label className={s.fieldLabel}>Your Full Name</label>
                  <input
                    className={s.input}
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={s.field}>
                  <label className={s.fieldLabel}>Will You Be Attending?</label>
                  <div className={s.radioGroup}>
                    {['Accepts with pleasure', 'Declines with regret'].map(opt => (
                      <label key={opt} className={s.radioOpt}>
                        <input
                          type="radio"
                          name="attendance"
                          value={opt}
                          checked={form.attendance === opt}
                          onChange={handleChange}
                          required
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className={s.field}>
                  <label className={s.fieldLabel}>Number of Guests Attending</label>
                  <select className={s.select} name="guests" value={form.guests} onChange={handleChange}>
                    {['1','2','3','4','5+'].map(n => (
                      <option key={n} value={n}>{n} {n === '1' ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div className={s.field}>
                  <label className={s.fieldLabel}>Message for the Couple (optional)</label>
                  <textarea
                    className={s.textarea}
                    name="message"
                    rows={3}
                    placeholder="Your blessings and wishes..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className={s.submitBtn}>Send My RSVP</button>
              </form>
            </>
          ) : (
            <div className={s.success}>
              <div className={s.successIcon}>✦</div>
              <h3>Thank You!</h3>
              <p>We've received your RSVP.<br />We look forward to celebrating with you.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
