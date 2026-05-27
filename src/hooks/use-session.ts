"use client";

import { useEffect, useState } from "react";

export function useSession(key: string) {
  const storageKey = `notice:${key}`;

  const [visible, setVisible] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);

    try {
      const keySet = localStorage.getItem(storageKey);
      setVisible(keySet !== "hidden");
    } catch {
      setVisible(true);
    }
  }, [storageKey]);

  const setItem = () => {
    try {
      localStorage.setItem(storageKey, "hidden");
    } catch {}

    setVisible(false);
  };

  return {
    visible,
    setItem, // call this function to set key into cache
    hydrated, //
  };
}
