import { useEffect, useState } from "react";

export default function useCountdown(index: number, initialCountdown: number) {
  const [countdown, setCountdown] = useState<number>(initialCountdown);

  useEffect(() => {
    if (index === -1) {
      return;
    }

    const intervalId = setInterval(() => {
      setCountdown((count) => {
        console.log(count);
        return count - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [index]);

  useEffect(() => {
    if (countdown === -1) {
      setCountdown(initialCountdown);
    }
  }, [initialCountdown]);

  return countdown;
}
