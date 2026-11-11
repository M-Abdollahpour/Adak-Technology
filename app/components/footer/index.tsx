import { useLanguage } from "~/hooks/useLanguage";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router";

const quickLinks = ["home", "services", "aboutUs", "contactUs"] as const;

const Footer = () => {
  const { t, isPersian } = useLanguage();
  return (
    <footer className="mt-11 overflow-hidden px-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
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
            <span className="block h-8 w-8 rounded-full bg-[#D7E2F2]"></span>
            <span className="block h-8 w-8 rounded-full bg-[#D7E2F2]"></span>
            <span className="block h-8 w-8 rounded-full bg-[#D7E2F2]"></span>
            <span className="block h-8 w-8 rounded-full bg-[#D7E2F2]"></span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-[20px] font-bold">
            {t("footer.quickAccess.title")}
          </h4>
          <div className="flex max-w-60 flex-col gap-1 text-[15px]">
            {quickLinks.map((item) => (
              <Link key={item} to={"/"}>
                <div className="flex items-center justify-between">
                  <span>{t(`footer.quickAccess.${item}`)}</span>
                  <span>{isPersian ? <FaAngleLeft /> : <FaAngleRight />}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
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
