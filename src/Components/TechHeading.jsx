import { useLayoutEffect, useRef, useState } from "react";
import TechText from "./TechText";

const measure = document.createElement("canvas").getContext("2d");

// Greedy word wrap; CSS widens each TechText so its 90% fit area matches the heading width.
const wrap = (text, width) => {
  const lines = [];
  for (const word of text.split(" ")) {
    const line = lines.length ? `${lines[lines.length - 1]} ${word}` : word;
    if (lines.length && measure.measureText(line).width <= width) lines[lines.length - 1] = line;
    else lines.push(word);
  }
  return lines;
};

// Heading whose lines are interactive TechText canvases. Size, weight, font and spacing come from the heading's CSS.
// `accent` starts on a new line in the accent colour.
const TechHeading = ({ as: Tag = "h2", text, accent = "", className = "" }) => {
  const ref = useRef(null);
  const [layout, setLayout] = useState(null);

  useLayoutEffect(() => {
    const el = ref.current;
    const update = () => {
      const css = getComputedStyle(el);
      const size = parseFloat(css.fontSize);
      measure.font = `${css.fontWeight} ${size}px ${css.fontFamily}`;
      measure.letterSpacing = css.letterSpacing === "normal" ? "0px" : css.letterSpacing;
      const width = el.clientWidth * 0.99;
      const next = {
        size,
        weight: Number(css.fontWeight),
        family: css.fontFamily,
        spacing: (parseFloat(css.letterSpacing) || 0) / size,
        lines: [...wrap(text, width).map((t) => [t, false]), ...(accent ? wrap(accent, width).map((t) => [t, true]) : [])],
      };
      setLayout((prev) => (JSON.stringify(prev) === JSON.stringify(next) ? prev : next));
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    document.fonts?.ready.then(update);
    return () => observer.disconnect();
  }, [text, accent]);

  return (
    <Tag ref={ref} className={`tech-heading ${className}`.trim()} style={layout && { "--f": `${layout.size}px` }}>
      {layout?.lines.map(([line, isAccent], i) => (
        <TechText key={`${i}-${line}`} text={line} className={isAccent ? "accent" : ""} fontFamily={layout.family} fontWeight={layout.weight} fontSize={layout.size} letterSpacing={layout.spacing} align="left" sweep={false} />
      ))}
    </Tag>
  );
};

export default TechHeading;
