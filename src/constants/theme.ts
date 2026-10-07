// Backwards-compatible theme entry point. The editable palette lives in
// src/theme/colors.ts so it is immediately discoverable by new developers.
export { COLORS } from '@/theme/colors';

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
} as const;

export const RADIUS = {
  sm: 12,
  md: 18,
  lg: 26,
  pill: 999,
} as const;
