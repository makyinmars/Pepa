import { useState, useEffect, useRef } from "react";

export function useCountdown(index: number, initialCountdown: number) {
  const intervalRef = useRef<number>();
  const [countdown, setCountDown] = useState(initialCountdown);

  useEffect(() => {
    if (index === -1) {
      return;
    }

    intervalRef.current = window.setInterval(() => {
      setCountDown((count) => {
        return count - 1;
      });
    }, 1000);

    return cleanup;
  }, [index]);

  useEffect(() => {
    setCountDown(initialCountdown);
  }, [initialCountdown]);

  useEffect(() => {
    if (countdown === 0) {
      cleanup();
    }
  }, [countdown]);

  const cleanup = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };

  return countdown;
}
