/** Shared pastel accents — same set as hero trust avatars. */
export const ACCENT_TONES = [
  {
    key: "emerald",
    chip: "bg-emerald-200 text-emerald-900",
    soft: "bg-emerald-50",
    softSelected: "bg-emerald-100",
    dot: "bg-emerald-500",
    title: "text-emerald-800",
    index: "text-emerald-700",
    muted: "text-emerald-700/75",
  },
  {
    key: "sky",
    chip: "bg-sky-200 text-sky-900",
    soft: "bg-sky-50",
    softSelected: "bg-sky-100",
    dot: "bg-sky-500",
    title: "text-sky-800",
    index: "text-sky-700",
    muted: "text-sky-700/75",
  },
  {
    key: "amber",
    chip: "bg-amber-200 text-amber-900",
    soft: "bg-amber-50",
    softSelected: "bg-amber-100",
    dot: "bg-amber-500",
    title: "text-amber-800",
    index: "text-amber-700",
    muted: "text-amber-700/75",
  },
  {
    key: "rose",
    chip: "bg-rose-200 text-rose-900",
    soft: "bg-rose-50",
    softSelected: "bg-rose-100",
    dot: "bg-rose-500",
    title: "text-rose-800",
    index: "text-rose-700",
    muted: "text-rose-700/75",
  },
] as const;

export type AccentTone = (typeof ACCENT_TONES)[number];

export function accentToneAt(index: number): AccentTone {
  return ACCENT_TONES[index % ACCENT_TONES.length];
}
