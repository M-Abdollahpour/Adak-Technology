import { useEffect, useRef } from "react";

const ScrollProgress = () => {
  const bar = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const update = () => {
      if (!bar.current) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
      bar.current.style.width = `${progress}%`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="absolute inset-x-0 top-0 h-1">
      <div ref={bar} className="h-full w-0 bg-[#F2701F]" />
    </div>
  );
};
export default ScrollProgress;
