import { useTranslation } from "react-i18next";

import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaRegBuilding,
} from "react-icons/fa6";
import { MdOutlineEngineering } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router";
import { scrollToSection } from "~/utils/scrollToSection";
const Banner = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage ?? i18n.language;
  const isPersian = language.startsWith("fa");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col gap-8  justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-[28px] lg:text-[36px] max-w-81 font-bold text-[#0d2440]">
            {t("banner.title")}
          </h1>
          <div className="flex gap-6 text-[16px]">
            <span className="opacity-70">{t("banner.titleLineOne")}</span>
            <span className="text-[#f2701f]">{t("banner.titleLineTwo")}</span>
          </div>
          <div className="text-[16px] opacity-70 max-w-106">
            <p>{t("banner.paragraph")}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 lg:gap-8 items-center justify-center lg:justify-start border-b border-[#142b4a] pb-10 cursor-pointer">
          <div className="border rounded-xl bg-[#142b4a] hover:bg-[#23364f] duration-200 text-white h-13.25 w-full md:w-55.75 flex justify-center items-center gap-2">
            <span>
              <a href="https://t.me/your_id" target="_blank" rel="noreferrer">
                {t("banner.requestConsultation")}
              </a>
            </span>
            <span>
              {isPersian ? <FaArrowLeftLong /> : <FaArrowRightLong />}
            </span>
          </div>
          <div className="border border-[#142b4a]/51 rounded-xl h-13.25 w-full md:w-38.75 flex justify-center items-center">
            <a
              href="#solutions"
              onClick={(e) => scrollToSection(e, "solutions")}
              className="border border-[#142b4a]/51 rounded-xl h-13.25 w-full md:w-55.75 flex justify-center items-center"
            >
              {t("banner.viewSolutions")}
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <img
          className="h-auto max-w-full object-contain animate-float-y"
          src="https://adakfan.ir/assets/adak-hero-B1qMsahv.png"
          alt="banner about structure"
        />
      </div>
      <div className="md:col-span-2 xl:-m-15">
        <div className="flex flex-col gap-8 flex-wrap sl:flex-row lg:justify-around items-start sl:items-center">
          <div className="flex gap-6 items-center">
            <div className="text-[#0e1f36]">
              <MdOutlineEngineering size={32} />
            </div>
            <div className="flex gap-3 items-center ">
              <span className="text-[#142b4a] text-3xl">
                +{t("banner.countOne")}
              </span>
              <div className="flex flex-col text-xl">
                <span className="text-[#0e1f36]">{t("banner.projects")}</span>
                <span className="text-[#6b7a90]">
                  {t("banner.designAndImplementation")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="text-[#0e1f36]">
              <FaRegBuilding size={32} />
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-[#142b4a] text-3xl">
                +{t("banner.countTwo")}
              </span>
              <div className="flex flex-col text-xl">
                <span className="text-[#0e1f36]">
                  {t("banner.organizations")}
                </span>
                <span className="text-[#6b7a90]">{t("banner.withAdak")}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="text-[#0e1f36]">
              <BiSupport size={32} />
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-[#142b4a] text-3xl">
                {t("banner.countThree")}
              </span>
              <div className="flex flex-col text-xl">
                <span className="text-[#0e1f36]">{t("banner.support")}</span>
                <span className="text-[#6b7a90]">
                  {t("banner.monitoringAndResponse")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
