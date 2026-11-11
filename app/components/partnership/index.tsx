import { useTranslation } from "react-i18next";
import Title from "../ui/title";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";
const Partnership = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage ?? i18n.language;
  const isPersian = language.startsWith("fa");
  return (
    <div className="flex gap-6 flex-col justify-center items-center mt-10">
      <Title
        title={t("partnership.title")}
        process={t("partnership.process")}
      />
      <div className="flex flex-col flex-wrap justify-center md:flex-row gap-4">
        <div className="border-3 py-2 px-5 md:px-10 border-[#FE8716] rounded-[22px] flex flex-col sl:flex-row items-center gap-4 hover:scale-102 duration-200">
          <div>
            <img
              loading="lazy"
              src="/images/cardimage/cardone.png"
              alt="پروژه جدید"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#AE5603] text-[17px] md:text-[24px] font-bold">
              {t("partnership.newProject")}
            </span>
            <span className="text-[12px] md:text-[13px] w-36 opacity-68 font-bold">
              {t("partnership.newProjectDescription")}
            </span>
            <div className="flex justify-end">
              <Link to={"/"}>
                <span className="text-white cursor-pointer hover:-translate-x-1 duration-200 h-14.25 w-14.25 flex justify-center items-center bg-[#E7792D] rounded-full">
                  {isPersian ? <FaArrowLeftLong /> : <FaArrowRightLong />}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-3 py-2 px-5 md:px-10 border-[#182E50] rounded-[22px] flex flex-col sl:flex-row items-center gap-4 hover:scale-102 duration-200">
          <div>
            <img
              loading="lazy"
              className="max-w-full h-auto"
              src="/images/cardimage/cardtwo.png"
              alt="تأمین تجهیزات"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#122036] text-[17px] md:text-[24px] font-bold">
              {t("partnership.equipmentSupply")}
            </span>
            <span className="text-[12px] md:text-[13px] w-36 opacity-68 font-bold">
              {t("partnership.equipmentSupplyDescription")}
            </span>
            <div className="flex justify-end">
              <Link to={"/"}>
                <span className="text-white cursor-pointer hover:-translate-x-1 duration-200 h-14.25 w-14.25 flex justify-center items-center bg-[#274572] rounded-full">
                  {isPersian ? <FaArrowLeftLong /> : <FaArrowRightLong />}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-3 py-2 px-5 md:px-10 border-[#086444] rounded-[22px] flex flex-col sl:flex-row items-center gap-4 hover:scale-102 duration-200">
          <div>
            <img
              loading="lazy"
              className="max-w-full h-auto"
              src="/images/cardimage/cardthree.png"
              alt="پروژه جدید"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#074A32] text-[17px] md:text-[24px] font-bold">
              {t("partnership.newProject")}
            </span>
            <span className="text-[13px] w-36 opacity-68 font-bold">
              {t("partnership.newProjectDescription")}
            </span>
            <div className="flex justify-end">
              <Link to={"/"}>
                <span className="text-white cursor-pointer hover:-translate-x-1 duration-200 h-14.25 w-14.25 flex justify-center items-center bg-[#086444] rounded-full">
                  {isPersian ? <FaArrowLeftLong /> : <FaArrowRightLong />}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partnership;
