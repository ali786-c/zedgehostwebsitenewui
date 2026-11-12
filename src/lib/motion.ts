/**
 * Motion controller.
 *
 * Markup opts in with `data-reveal` (single element) or `data-reveal-group`
 * (its children stagger in). Nothing is hidden by CSS up front, so the
 * prerendered HTML and no-JS visitors always see every element: this module
 * only hides the elements that are still below the fold and reveals them with
 * one IntersectionObserver. Only transform/opacity animate.
 */

const STAGGER_MS = 70;
const MAX_STAGGER_STEPS = 6;
const REVEAL_CLASS = 'zh-reveal';
const VISIBLE_CLASS = 'is-revealed';

interface RevealTarget {
  element: HTMLElement;
  delay: number;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isBelowFold(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return rect.top > window.innerHeight * 0.92;
}

function collectTargets(): RevealTarget[] {
  const targets: RevealTarget[] = [];

  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    Array.from(group.children).forEach((child, index) => {
      if (!(child instanceof HTMLElement)) return;
      targets.push({ element: child, delay: Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS });
    });
  });

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
    targets.push({ element, delay: 0 });
  });

  return targets;
}

export function initMotion(): void {
  if (prefersReducedMotion()) return;
  if (typeof IntersectionObserver === 'undefined') return;

  const targets = collectTargets();
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        element.classList.add(VISIBLE_CLASS);
        observer.unobserve(element);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );

  for (const { element, delay } of targets) {
    // Anything already on screen keeps its static look: no flash of hidden
    // content between first paint and this module running.
    if (!isBelowFold(element)) continue;
    if (element.classList.contains(VISIBLE_CLASS)) continue;

    element.style.setProperty('--zh-reveal-delay', `${delay}ms`);
    element.classList.add(REVEAL_CLASS);
    observer.observe(element);
  }

  // Safety net: if the observer never fires (e.g. a zero-height section after a
  // late layout change), reveal after a short pause rather than leaving a gap.
  window.setTimeout(() => {
    document.querySelectorAll(`.${REVEAL_CLASS}:not(.${VISIBLE_CLASS})`).forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight) element.classList.add(VISIBLE_CLASS);
    });
  }, 2400);
}
