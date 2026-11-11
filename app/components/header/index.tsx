import { useEffect, useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useLanguage } from "~/hooks/useLanguage";
import { Link } from "react-router";
import HambergerMenu from "../ui/hambergerMenu";
import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import ToggleLanguage from "../ui/language";
import { FloatButton } from "antd";
export default function Header() {
  const { t, isPersian } = useLanguage();
  const header = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!header.current) return;
      header.current.style.background =
        window.scrollY >= 10
          ? "linear-gradient(to bottom, white calc(100% - 24px), rgba(255,255,255,0) 100%)"
          : "white";
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = isPersian ? "fa-IR" : "en";
    document.documentElement.dir = isPersian ? "rtl" : "ltr";
  }, [isPersian]);
  const menuItems = [
    "home",
    "services",
    "articles",
    "solutions",
    "equipment",
    "projects",
    "aboutUs",
    "contactUs",
  ] as const;
  return (
    <header
      ref={header}
      className="fixed left-0 top-0 right-0 z-50 w-full max-w-full"
    >
      <div className="relative mx-auto flex w-full max-w-360 h-20 lg:h-33.5 items-center justify-between gap-3 md:gap-7 lg:gap-15 px-4 lg:px-7">
        <div className="flex shrink-0 items-center gap-1 cursor-pointer">
          <img
            className="shrink-0 h-7 w-auto lg:h-auto"
            src="/images/brand/brand.svg"
            alt="لوگوی شرکت آداک"
          />
        </div>
        <nav
          className={`hidden md:text-[14px] lg:text-[15px] xl:text-[17px] md:gap-3 xl:gap-6  font-bold lg:flex items-center justify-center`}
        >
          {menuItems.map((item) => (
            <div
              key={item}
              className="group cursor-pointer relative pb-1 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-[#f2701f] after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
            >
              <Link to={"/"}>{t(`menu.${item}`)}</Link>
            </div>
          ))}
        </nav>
        <div
          className={`sl:flex shrink-0 hidden sm:text-[12px] md:text-[14px] xl:text-[20px] md:py-2 md:px-1 md:justify-center xl:justify-between items-center gap-2 font-bold rounded-[14px] xl:rounded-[18px] px-3 xl:pl-7.5 xl:pr-6.5 h-10  xl:h-13.25 md:w-45 xl:w-63.75 bg-[#142b4a] text-white cursor-pointer border-none hover:bg-[#1f3f69] duration-200`}
        >
          <span>{t("menu.requestConsultation")}</span>
          {isPersian ? <FaArrowLeftLong /> : <FaArrowRightLong />}
        </div>
        <HambergerMenu />
        <div className="hidden lg:block">
          <ToggleLanguage />
        </div>
      </div>
      <div>
        <FloatButton.Group
          trigger="click"
          type="primary"
          style={{ insetInlineEnd: 24 }}
          icon={<CustomerServiceOutlined />}
        >
          <FloatButton />
          <FloatButton icon={<CommentOutlined />} />
        </FloatButton.Group>
      </div>
    </header>
  );
}
