import { useCallback, useMemo, useState } from "react"

export function useLocalStorage<Value>(key:string, initialValue:Value) {
    const [state, setState] = useState<Value>(() => {
        const value = localStorage.getItem(key);
        if (!value) return initialValue;
        return JSON.parse(value) satisfies Value;
      });
    

  const setValue = useCallback(
    function createSetValue(value: Value) {
      if (typeof value === "function") {
        value = value(state);
      }
      localStorage.setItem(key, JSON.stringify(value));
      setState(value);
    },
    [key, state],
  );

  return useMemo(() => {
    return [state, setValue] as const;
  }, [state, setValue]);
}
