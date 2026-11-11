import { useLanguage } from "~/hooks/useLanguage";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { scrollToSection } from "~/utils/scrollToSection";

const quickLinks = [
  { key: "home", target: "home" },
  { key: "services", target: "services" },
  { key: "aboutUs", target: "about" },
  { key: "contactUs", target: "contact" },
] as const;

const Footer = () => {
  const { t, isPersian } = useLanguage();
  return (
    <footer className="mt-11 overflow-hidden px-4">
      <div className="grid grid-cols-1 gap-4 ms:grid-cols-2 xl:grid-cols-3">
        <div className="flex flex-col gap-7">
          <div>
            <img
              className="h-14.5 w-auto object-contain"
              src="/images/brand/brand.svg"
              alt="لوگوی آداک فناوری"
            />
            <h4>{t("footer.about.title")}</h4>
            <p>{t("footer.about.tagline")}</p>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-4">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="block h-8 w-8 animate-wave rounded-full bg-[#D7E2F2]"
                  style={{ animationDelay: `${i * 0.15}s` }}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-[20px] font-bold">
            {t("footer.quickAccess.title")}
          </h4>
          <div className="flex max-w-60 flex-col gap-1 text-[15px]">
            {quickLinks.map((item) => (
              <a
                key={item.key}
                href={`#${item.target}`}
                onClick={(e) => scrollToSection(e, item.target)}
                className="cursor-pointer"
              >
                <div className="flex items-center justify-between gap-2 hover:text-[#F2701F] hover:font-bold duration-200">
                  <span>{t(`footer.quickAccess.${item.key}`)}</span>
                  <span>{isPersian ? <FaAngleLeft /> : <FaAngleRight />}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:col-span-1">
          <h4 className="text-[20px] font-bold">
            {t("footer.contactUs.title")}
          </h4>
          <div className="flex flex-col gap-2 text-[15px]">
            <div className="flex items-center gap-3">
              <BsTelephoneFill className="shrink-0" />
              <a href="tel:+982191592045">{t("footer.contactUs.tel")}</a>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineEmail className="shrink-0" />
              <a href="mailto:info@adakfan.ir">{t("footer.contactUs.email")}</a>
            </div>
            <div className="flex items-center gap-3">
              <IoLocationSharp className="shrink-0" />
              <address className="not-italic">
                {t("footer.contactUs.address")}
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="my-7 flex flex-col gap-2">
        <div className="w-full border border-[#0E1F36] opacity-45"></div>
        <div className="w-full border border-[#0E1F36] opacity-45"></div>
      </div>
      <div className="mb-7 text-center md:text-start">
        {t("footer.copyright")}
      </div>
    </footer>
  );
};
export default Footer;
