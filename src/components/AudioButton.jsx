import s from './AudioButton.module.css';

export default function AudioButton({ playing, visible, onToggle }) {
  return (
    <button
      className={`${s.btn} ${!visible ? s.hidden : ''}`}
      onClick={onToggle}
      aria-label="Toggle music"
    >
      {playing ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <rect x="6" y="5" width="4" height="14" rx="1"/>
          <rect x="14" y="5" width="4" height="14" rx="1"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <polygon points="5,3 19,12 5,21"/>
        </svg>
      )}
    </button>
  );
}
