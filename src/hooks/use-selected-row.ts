"use client";

import { useMemo, useState } from "react";

/** Keeps a selected id, defaulting to the first row whenever the list changes. */
export function useSelectedRow<T>(
  rows: T[],
  getId: (row: T) => string,
): [string | null, (id: string | null) => void, T | null] {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const resolvedId = useMemo(() => {
    if (rows.length === 0) return null;
    const stillVisible =
      selectedId !== null && rows.some((row) => getId(row) === selectedId);
    return stillVisible ? selectedId : getId(rows[0]);
  }, [rows, selectedId, getId]);

  const selected =
    rows.find((row) => getId(row) === resolvedId) ?? null;

  return [resolvedId, setSelectedId, selected];
}
