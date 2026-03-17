import { useState, useEffect } from "react";

/**
 * Breakpoint for desktop vs mobile (matches common responsive patterns in the app).
 * 768px and above = desktop; below = mobile.
 */
const DESKTOP_BREAKPOINT = 768;

/**
 * Returns true if viewport width is desktop (>= 768px).
 * Uses window.matchMedia for SSR-safe, reactive detection.
 */
export function isDesktop(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`).matches;
}

/**
 * Returns true if viewport width is mobile (< 768px).
 */
export function isMobile(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia(`(max-width: ${DESKTOP_BREAKPOINT - 1}px)`).matches;
}

/**
 * React hook that returns whether the viewport is desktop.
 * Updates on window resize.
 */
export function useIsDesktop(): boolean {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    const handler = () => setDesktop(mq.matches);
    setDesktop(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return desktop;
}
