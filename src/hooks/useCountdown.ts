import { useEffect, useRef, useState } from "react";

interface Time {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface Props {
  endDate: string;
}

const useCountdown = ({ endDate }: Props) => {
  const [timeLeft, setTimeLeft] = useState({days:0,hours:0,minutes:0,seconds:0} as Time);
  let interval = useRef<number | undefined>();
  const startTimer = () => {
    const countdownDate = Date.parse(endDate);

    interval.current = setInterval(() => {
      const now = Date.now();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return timeLeft;
};

export default useCountdown;
