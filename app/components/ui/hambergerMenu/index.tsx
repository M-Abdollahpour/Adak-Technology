import { useState } from "react";
import { useLanguage } from "~/hooks/useLanguage";
import { scrollToSection } from "~/utils/scrollToSection";
import ToggleLanguage from "../language";

const menuItems = [
  { key: "home", target: "home" },
  { key: "services", target: "services" },
  { key: "articles", target: "articles" },
  { key: "solutions", target: "solutions" },
  { key: "equipment", target: "equipment" },
  { key: "projects", target: "projects" },
  { key: "aboutUs", target: "about" },
  { key: "contactUs", target: "contact" },
] as const;

const HambergerMenu = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const line =
    "absolute left-[7px] h-0.5 w-6 rounded-full bg-gray-600 transition-all duration-300";

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative h-10 w-10 cursor-pointer rounded-lg border border-gray-300/50"
      >
        <span
          className={`${line} ${isOpen ? "top-4.5 rotate-45" : "top-2.75"}`}
        ></span>
        <span
          className={`${line} top-4.5 ${isOpen ? "opacity-0 -translate-x-5" : "opacity-100"}`}
        ></span>
        <span
          className={`${line} ${isOpen ? "top-4.5 -rotate-45" : "top-6.25"}`}
        ></span>
      </button>

      <nav
        className={`fixed inset-x-0 top-20 h-[calc(100svh-5rem)] flex-col gap-3 overflow-y-auto bg-white px-7 py-5 text-[18px] ${isOpen ? "flex" : "hidden"}`}
      >
        <div className="self-end">
          <ToggleLanguage />
        </div>
        {menuItems.map((item) => (
          <div key={item.key} className="border-b border-gray-200/70 pb-3">
            <a
              href={`#${item.target}`}
              onClick={(e) => {
                scrollToSection(e, item.target);
                setIsOpen(false);
              }}
            >
              {t(`menu.${item.key}`)}
            </a>
          </div>
        ))}
      </nav>
    </div>
  );
};
export default HambergerMenu;
