export const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  target: string,
) => {
  e.preventDefault();
  const el = document.getElementById(target);
  if (!el) return;
  const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;
  const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
  window.scrollTo({ top, behavior: "smooth" });
};
