"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

type AnimatedBulletListProps = {
  items: string[];
  className?: string;
};

export default function AnimatedBulletList({ items, className }: AnimatedBulletListProps) {
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) {
      return;
    }

    const rows = Array.from(list.querySelectorAll<HTMLElement>("[data-bullet-row]"));
    const dots = Array.from(list.querySelectorAll<HTMLElement>("[data-bullet-dot]"));
    if (!rows.length) {
      return;
    }

    const runEnterAnimation = () => {
      animate(rows, {
        opacity: [0, 1],
        translateX: [-22, 0],
        duration: 560,
        delay: stagger(90),
        ease: "outExpo",
      });

      animate(dots, {
        scale: [0.4, 1.15, 1],
        rotate: ["-55deg", "0deg"],
        duration: 620,
        delay: stagger(90),
        ease: "outBack",
      });

      // Subtle continuous motion so bullets feel alive without being distracting.
      animate(dots, {
        scale: [1, 1.2, 1],
        opacity: [0.9, 1, 0.9],
        duration: 1800,
        delay: stagger(140),
        loop: true,
        ease: "inOutSine",
      });
    };

    const inViewportNow = () => {
      const rect = list.getBoundingClientRect();
      return rect.top < window.innerHeight - 40;
    };

    if (inViewportNow()) {
      runEnterAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        runEnterAnimation();
        observer.disconnect();
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  return (
    <ul
      ref={listRef}
      className={`mt-3 space-y-2 text-sm text-[var(--muted)] ${className ?? ""}`}
    >
      {items.map((item) => (
        <li
          key={item}
          data-bullet-row
          className="flex items-start gap-2 opacity-0"
        >
          <span
            data-bullet-dot
            className="mt-[0.42rem] h-2 w-2 shrink-0 rotate-45 rounded-[2px] border border-[var(--accent)] bg-[var(--accent)]/20"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
