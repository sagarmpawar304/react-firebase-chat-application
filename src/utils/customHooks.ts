import { useState, useCallback, useEffect } from 'react';

export function useModalState(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, open, close };
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const queryList = window.matchMedia(query);
    setMatches(queryList.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    queryList.addListener(listener);
    return () => {
      queryList.removeListener(listener);
    };
  }, [query]);

  return matches;
}
