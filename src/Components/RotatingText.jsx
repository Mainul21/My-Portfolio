import { useLayoutEffect, useRef } from "react";
import { animate } from "animejs/animation";
import { stagger } from "animejs/utils";

const HOLD = 1700;

// Builds the phrase as nowrap word spans of char spans (spaces stay breakable) and returns the chars.
const fill = (el, text, suffix, maxWidth) => {
  el.style.maxWidth = `${maxWidth}px`;
  el.replaceChildren(...text.split(" ").flatMap((w, i) => {
    const word = document.createElement("span");
    word.className = "rt-word";
    word.append(...[...w].map((c) => Object.assign(document.createElement("span"), { className: "rt-ch", textContent: c })));
    return i ? [" ", word] : [word];
  }));
  el.lastChild.append(suffix); // static suffix lives in the last word so it never wraps alone
  return [...el.querySelectorAll(".rt-ch")];
};

// Heading: static prefix + a rotating accent word + static period. Pauses off-screen / in hidden tabs.
const RotatingText = ({ as: Tag = "h2", prefix, words, suffix = "." }) => {
  const root = useRef(null), wrap = useRef(null), word = useRef(null);

  const key = words.join();

  useLayoutEffect(() => {
    const [rootEl, wrapEl, wordEl, list] = [root.current, wrap.current, word.current, key.split(",")];
    const width = () => rootEl.clientWidth;
    let chars = fill(wordEl, list[0], suffix, width());
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let i = 0, timer, busy = false, dead = false, inView = false, anims = [];
    const run = (a) => (anims.push(a), a);
    const canRun = () => inView && !document.hidden;
    const schedule = () => { clearTimeout(timer); timer = canRun() && !busy && !dead ? setTimeout(step, HOLD) : undefined; };
    const step = async () => {
      busy = true;
      await run(animate(chars, { y: "-110%", opacity: 0, delay: stagger(18), duration: 260, ease: "in(2)" }));
      if (dead) return;
      const from = wrapEl.getBoundingClientRect().width;
      wrapEl.style.width = "";
      chars = fill(wordEl, list[(i = (i + 1) % list.length)], suffix, width());
      const to = wrapEl.getBoundingClientRect().width;
      run(animate(wrapEl, { width: [from, to], duration: 380, ease: "out(3)", onComplete: () => (wrapEl.style.width = "") }));
      await run(animate(chars, { y: ["100%", 0], opacity: [0, 1], delay: stagger(18), duration: 450, ease: "out(3)" }));
      if (dead) return;
      busy = false;
      schedule();
    };

    const io = new IntersectionObserver(([e]) => { inView = e.isIntersecting; schedule(); });
    io.observe(rootEl);
    document.addEventListener("visibilitychange", schedule);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", schedule);
      clearTimeout(timer);
      dead = true;
      anims.forEach((a) => a.revert());
      wrapEl.style.width = "";
      chars = fill(wordEl, list[0], suffix, width());
    };
  }, [key, suffix]);

  return (
    <Tag ref={root} className="rt">
      <span className="sr-only">{`${prefix} ${words[0]}${suffix}`}</span>
      <span aria-hidden="true">{prefix} <span ref={wrap} className="rt-wrap"><span ref={word} /></span></span>
    </Tag>
  );
};

export default RotatingText;
