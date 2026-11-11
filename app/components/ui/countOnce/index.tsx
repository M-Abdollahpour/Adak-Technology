import { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";

type Props = { end: number; format: (n: number) => string };

const CountOnce = ({ end, format }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const { start } = useCountUp({
    ref: ref as React.RefObject<HTMLElement>,
    end,
    duration: 2,
    startOnMount: false,
    formattingFn: format,
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        start();
        observer.disconnect();
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [start]);

  return <span ref={ref}>{format(0)}</span>;
};
export default CountOnce;
