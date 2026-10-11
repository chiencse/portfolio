// Deterministic, made-up price series used by the technical-analysis diagrams.
export const PRICES: number[] = Array.from({ length: 120 }, (_, i) => {
  const trend = i < 70 ? 30 + 0.16 * i : 41.2 + 1.6 * Math.sin((i - 70) / 5);
  return +(trend + 2.2 * Math.sin(i / 5.5) + 0.9 * Math.sin(i * 1.3) + 0.5 * Math.sin(i * 2.9)).toFixed(2);
});

export function sma(values: number[], n: number): number[] {
  return values.map((_, i) => {
    const from = Math.max(0, i - n + 1);
    const win = values.slice(from, i + 1);
    return win.reduce((a, b) => a + b, 0) / win.length;
  });
}

/** Wilder's RSI. The first n values are padded with 50. */
export function rsi(values: number[], n = 14): number[] {
  const out = values.map(() => 50);
  let gain = 0;
  let loss = 0;
  for (let i = 1; i <= n; i++) {
    const d = values[i] - values[i - 1];
    gain += Math.max(d, 0);
    loss += Math.max(-d, 0);
  }
  gain /= n;
  loss /= n;
  for (let i = n + 1; i < values.length; i++) {
    const d = values[i] - values[i - 1];
    gain = (gain * (n - 1) + Math.max(d, 0)) / n;
    loss = (loss * (n - 1) + Math.max(-d, 0)) / n;
    out[i] = loss === 0 ? 100 : 100 - 100 / (1 + gain / loss);
  }
  return out;
}
