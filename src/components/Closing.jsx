import s from './Closing.module.css';

export default function Closing() {
  return (
    <section className={s.closing}>
      <div className={s.bg} />
      <div className={s.content}>
        <p className={s.eyebrow}>With love &amp; gratitude</p>
        <p className={s.quote}>
          "May this day be the first of many beautiful chapters written together."
        </p>
        <p className={s.sig}>
          Mounesh <span className={s.amp}>&amp;</span> Nayana (Kaveri)
        </p>
      </div>
    </section>
  );
}
