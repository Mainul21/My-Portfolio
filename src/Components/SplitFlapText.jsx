import { useLayoutEffect, useRef } from "react";
import { createTimeline } from "animejs/timeline";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const STEP = 80, GAP = 50;
const rand = () => LETTERS[Math.floor(Math.random() * LETTERS.length)];

// Per-letter cell: the hidden final glyph sets the width, the overlay glyph flips through random letters (rotateX) then lands.
const Line = ({ text, className }) => (
  <span className={`flap-line ${className}`} aria-hidden="true">
    {text.split(" ").map((word, w) => (
      <span key={w}>
        {w > 0 && " "}
        <span className="flap-word">
          {[...word].map((ch, i) => (
            <span key={i} className="flap-cell"><span className="flap-ghost">{ch}</span><span className="flap-live" data-ch={ch}>{ch}</span></span>
          ))}
        </span>
      </span>
    ))}
  </span>
);

// Heading whose letters flip like a split-flap board once on load. Typography comes from the heading's CSS.
const SplitFlapText = ({ as: Tag = "h1", text, accent = "" }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const live = [...ref.current.querySelectorAll(".flap-live")];
    const reset = () => live.forEach((el) => { el.textContent = el.dataset.ch; el.style.opacity = ""; el.style.transform = ""; });
    live.forEach((el) => { el.textContent = ""; el.style.opacity = 0; });
    let alive = true, tl;
    document.fonts.ready.then(() => {
      if (!alive) return;
      tl = createTimeline({ defaults: { duration: STEP, ease: "out(2)" } });
      live.forEach((el, i) => {
        const flips = 6 + (i % 3);
        for (let s = 0; s <= flips; s++) {
          tl.add(el, { rotateX: [-90, 0], onBegin: () => { el.textContent = s === flips ? el.dataset.ch : rand(); el.style.opacity = 1; } }, i * GAP + s * STEP);
        }
      });
    });
    return () => { alive = false; tl?.revert(); reset(); };
  }, [text, accent]);

  return (
    <Tag ref={ref} className="flap">
      <span className="sr-only">{accent ? `${text} ${accent}` : text}</span>
      <Line text={text} />
      {accent && <Line text={accent} className="accent" />}
    </Tag>
  );
};

export default SplitFlapText;
