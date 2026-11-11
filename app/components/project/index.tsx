import { useLanguage } from "~/hooks/useLanguage";
import Title from "../ui/title";
import { Carousel } from "antd";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router";

const projects = [
  {
    key: "wirelessNetwork",
    img: "/images/projects/photoone.svg",
    alt: "نت ورک",
    border: "border-[#AE531B]",
  },
  {
    key: "dataCenterNetwork",
    img: "/images/projects/phototwo.svg",
    alt: "دیتا سنتر",
    border: "border-[#0E1F36]",
  },
  {
    key: "voip",
    img: "/images/projects/photothree.svg",
    alt: "نت ورک",
    border: "border-[#AE531B]",
  },
] as const;
const slides = [...projects, ...projects];

const Project = () => {
  const { t, isPersian } = useLanguage();

  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-6">
      <Title title={t("project.title")} process={t("project.process")} />
      <div className="w-full min-w-0 max-w-360 overflow-hidden">
        <Carousel
          rtl={isPersian}
          dots={false}
          arrows
          infinite
          autoplay
          speed={1000}
          slidesToShow={3}
          responsive={[
            { breakpoint: 1079, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } },
          ]}
        >
          {slides.map((p, index) => (
            <div
              key={`${p.key}-${index}`}
              dir={isPersian ? "rtl" : "ltr"}
              className="px-3"
            >
              <div
                className={`mx-auto flex min-h-97.5 w-full max-w-103.5 flex-col items-center justify-around rounded-2xl border-3 py-4 ${p.border}`}
              >
                <div className="relative flex w-full flex-col items-center justify-center gap-2">
                  <span className="absolute right-15 top-0 rounded-full bg-[#D2621D] px-4 py-1 text-[18px] font-bold text-white  md:text-[22px]">
                    {t(`project.${p.key}.title`)}
                  </span>
                  <img className="h-auto max-w-full" src={p.img} alt={p.alt} />
                  <h3 className="self-start px-6 text-[20px] font-bold md:px-13 md:text-[23.5px]">
                    {t(`project.${p.key}.header`)}
                  </h3>
                  <p className="px-6 text-[14px] font-bold opacity-70 md:px-13 md:text-[16px]">
                    {t(`project.${p.key}.description`)}
                  </p>
                </div>
                <div className="flex w-full justify-between px-3 text-[15px] font-bold text-[#0E1F36]">
                  <span>{t(`project.${p.key}.customer`)}</span>
                  <span>{t(`project.${p.key}.year`)}</span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <Link to={"/"}>
        <div className="flex items-center justify-center gap-4 text-[18px] text-[#0E1F36] duration-200 hover:-translate-x-1 md:text-[23.5px]">
          <span>{t("project.showMore")}</span>
          {isPersian ? <FaAngleLeft /> : <FaAngleRight />}
        </div>
      </Link>
    </div>
  );
};
export default Project;
