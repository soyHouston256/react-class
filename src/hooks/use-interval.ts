import { useEffect, useRef } from "react";

interface Callback {
  (): void;
}
export function useInterval(ms: number, callback: Callback) {
  const ref = useRef<Callback>();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  useEffect(
    function setupInterval() {
      const timerId = setInterval(() => ref.current?.(), ms);

      return function clearInterval() {
        window.clearInterval(timerId);
      };
    },
    [ms],
  );
}