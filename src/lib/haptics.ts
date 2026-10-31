// Haptic feedback through the Vibration API (Android browsers; iOS Safari ignores it). Used only for
// outcomes the visitor is waiting on, fired on the same frame as the visual that reports them.

const play = (pattern: number | number[]) => {
  if (typeof navigator === "undefined" || !("vibrate" in navigator)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  navigator.vibrate(pattern);
};

/** One short, light tap: something was completed. */
export const hapticSuccess = () => play(12);

/** Two quick taps: something did not go through. */
export const hapticError = () => play([16, 60, 16]);
