import { useLayoutEffect } from "react";
import { animate } from "animejs/animation";
import { stagger } from "animejs/utils";
import { createAnimatable } from "animejs/animatable";
import { createScope } from "animejs/scope";
import { createTimeline } from "animejs/timeline";
import { onScroll } from "animejs/events";

const OUT = "out(4)";
const clamp = (v, max) => Math.max(-max, Math.min(max, v));
const clean = (els) => () => els.forEach((el) => { el.style.removeProperty("opacity"); el.style.removeProperty("transform"); });

// All motion lives here. Initial hidden states are set by anime inside the scope only, so content stays visible without JS
// and under prefers-reduced-motion. Targets are marked with data-motion: reveal (children), item (self), fade (self, opacity only), line, progress.
export default function useMotion(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    const $$ = (sel, el = root) => [...el.querySelectorAll(sel)];
    const on = (el, type, fn) => { el.addEventListener(type, fn); return () => el.removeEventListener(type, fn); };

    const scope = createScope({ root: rootRef, mediaQueries: { reduce: "(prefers-reduced-motion: reduce)", fine: "(hover: hover) and (pointer: fine)" } }).add(({ matches }) => {
      if (matches.reduce) return;
      const off = [];

      // Hero intro; the h1 is animated by SplitFlapText, so it is not faded here.
      const [eyebrow, copy, actions, portrait, caption] = [".hero .eyebrow", ".hero-copy", ".hero-actions", ".portrait", ".hero-caption"].map((sel) => $$(sel)[0]);
      const rise = (y) => ({ y: [y, 0], opacity: [0, 1], delay: stagger(90) });
      createTimeline({ defaults: { ease: OUT, duration: 900 } })
        .add([eyebrow, copy, actions], rise(24), 0)
        .add(portrait, { clipPath: ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"], duration: 1100 }, 100)
        .add($$("img", portrait), { scale: [1.15, 1], duration: 1400 }, 100)
        .add([$$("span", portrait)[0], caption], rise(12), 800);

      // Scroll reveals, one-shot.
      $$("[data-motion]").forEach((el) => {
        const kind = el.dataset.motion;
        const targets = kind === "reveal" ? [...el.children].filter((c) => !c.dataset.motion) : kind === "item" || kind === "fade" ? [el] : [];
        if (!targets.length) return;
        animate(targets, {
          opacity: [0, 1],
          ...(kind !== "fade" && { y: [28, 0] }),
          duration: 800,
          ease: OUT,
          delay: stagger(70),
          onComplete: clean(targets),
          autoplay: onScroll({ target: el, enter: "bottom-=10% top", repeat: false, sync: "play complete" }),
        });
      });

      // Scroll-synced: timeline line draw + page progress bar.
      const line = $$("[data-motion=line]")[0];
      animate(line, { scaleY: [0, 1], ease: "linear", autoplay: onScroll({ target: line.parentElement, enter: "bottom-=10% top", leave: "bottom bottom", sync: true }) });
      animate($$("[data-motion=progress]")[0], { scaleX: [0, 1], ease: "linear", autoplay: onScroll({ target: root, enter: "top top", leave: "bottom bottom", sync: true }) });

      if (matches.fine) {
        // Portrait tilt + spotlight vars.
        const tilt = createAnimatable(portrait, { rotateX: 400, rotateY: 400, ease: "out(3)" });
        off.push(
          on(portrait, "pointermove", (e) => {
            const r = portrait.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
            tilt.rotateY((px - 0.5) * 12);
            tilt.rotateX((0.5 - py) * 12);
            portrait.style.setProperty("--mx", `${px * 100}%`);
            portrait.style.setProperty("--my", `${py * 100}%`);
          }),
          on(portrait, "pointerleave", () => { tilt.rotateX(0); tilt.rotateY(0); }),
        );

        // Magnetic primary CTA.
        const btn = $$(".hero-actions .primary-button")[0];
        const mag = createAnimatable(btn, { x: 300, y: 300, ease: "out(3)" });
        off.push(
          on(btn, "pointermove", (e) => {
            const r = btn.getBoundingClientRect();
            mag.x(clamp((e.clientX - r.left - r.width / 2) * 0.25, 8));
            mag.y(clamp((e.clientY - r.top - r.height / 2) * 0.25, 8));
          }),
          on(btn, "pointerleave", () => { mag.x(0); mag.y(0); }),
        );

        // Card spotlight: one delegated listener sets --mx/--my on the hovered card.
        off.push(on(root, "pointermove", (e) => {
          const card = e.target.closest?.(".project-card, .social-list a");
          if (!card) return;
          const r = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${e.clientX - r.left}px`);
          card.style.setProperty("--my", `${e.clientY - r.top}px`);
        }));
      }
      return () => off.forEach((f) => f());
    });
    return () => scope.revert();
  }, [rootRef]);
}
