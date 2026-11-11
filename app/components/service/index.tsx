import { useLanguage } from "~/hooks/useLanguage";
import Title from "../ui/title";
import { Link } from "react-router";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const services = [
  {
    key: "network",
    img: "/images/network/photoone.png",
    alt: "شبکه و زیرساخت",
    tags: ["dataCenter", "virtualization", "support"],
  },
  {
    key: "security",
    img: "/images/network/phototwo.png",
    alt: "امنیت",
    tags: ["networkSecurity", "incidentMonitoring", "vulnerabilityAssessment"],
  },
  {
    key: "software",
    img: "/images/network/photothree.png",
    alt: "نرم افزار",
    tags: ["customDevelopment", "integration", "enterpriseSystems"],
  },
] as const;

const Service = () => {
  const { t, isPersian } = useLanguage();
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-6 px-4">
      <Title title={t("services.title")} process={t("services.process")} />
      <div className="flex flex-wrap flex-col md:flex-row gap-6 xl:gap-3 justify-center xl:justify-between items-center w-full">
        {services.map((s) => (
          <div
            key={s.key}
            className="mx-auto flex min-h-80 w-full max-w-109.25 flex-col items-center justify-center gap-5 rounded-2xl py-6 shadow-[-8px_-8px_0_rgba(0,0,0,0.1),5px_5px_12px_rgba(0,0,0,0.15)]"
          >
            <div className="flex w-full flex-col items-center gap-4 px-5 ms:flex-row md:px-10">
              <img
                loading="lazy"
                className="h-auto max-w-full shrink-0"
                src={s.img}
                alt={s.alt}
              />
              <div className="flex min-w-0 flex-col justify-center text-center sm:text-start">
                <h3 className="text-[19px] md:text-[23px]">
                  {t(`services.${s.key}.title`)}
                </h3>
                <p className="text-[14px] opacity-70 md:text-[16px]">
                  {t(`services.${s.key}.description`)}
                </p>
              </div>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-3 px-5 opacity-50">
              {s.tags.map((tag) => (
                <div
                  key={tag}
                  className="rounded-full cursor-pointer hover:bg-[#1e1e1e] hover:text-[#ffffff] duration-200 border px-5 py-1 text-[13px] md:text-[14px]"
                >
                  {t(`services.${s.key}.data.${tag}`)}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 self-end text-[18px] text-[#F2701F] duration-200 hover:-translate-x-1 me-6 md:me-16">
              <Link to={"/"}>{t("services.viewServicesPage")}</Link>
              {isPersian ? <FaArrowLeftLong /> : <FaArrowRightLong />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Service;
