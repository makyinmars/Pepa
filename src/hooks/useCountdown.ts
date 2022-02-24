import { useState, useEffect, useRef } from "react";

export function useCountdown(index: number, initialCountdown: number = -1) {
  const intervalRef = useRef<number>();
  const [countdown, setCountdown] = useState<number>(initialCountdown);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    if (index === -1) {
      return;
    }

    if (isRunning && !intervalRef.current) {
      intervalRef.current = window.setInterval(() => {
        setCountdown((count) => {
          return count - 1;
        });
      }, 50);
    }

    return cleanup;
  }, [index, isRunning]);

  useEffect(() => {
    setCountdown(initialCountdown);
  }, [initialCountdown]);

  useEffect(() => {
    if (countdown === 0) {
      cleanup();
    }
  }, [countdown]);

  const cleanup = () => {
    if (intervalRef.current) {
      setIsRunning(false);
      window.clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };

  return {
    countdown,
    isRunning,
    stop: cleanup,
    start: (count?: number) => {
      setCountdown(count ?? initialCountdown);
      setIsRunning(true);
    },
  };
}
