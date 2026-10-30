"use client";

import { useEffect, useState } from "react";

/** Keeps a selected id, defaulting to the first row whenever the list changes. */
export function useSelectedRow<T>(
  rows: T[],
  getId: (row: T) => string,
): [string | null, (id: string | null) => void, T | null] {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (rows.length === 0) {
      setSelectedId(null);
      return;
    }
    const stillVisible =
      selectedId !== null && rows.some((row) => getId(row) === selectedId);
    if (!stillVisible) setSelectedId(getId(rows[0]));
  }, [rows, selectedId, getId]);

  const selected =
    rows.find((row) => getId(row) === selectedId) ?? null;

  return [selectedId, setSelectedId, selected];
}
