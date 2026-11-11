import { Fragment } from "react";
import { useLanguage } from "~/hooks/useLanguage";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const items = [
  { key: "support", img: "/images/adak/adakone.svg", alt: "پشتیبانی" },
  { key: "team", img: "/images/adak/adaktwo.svg", alt: "تیم" },
  { key: "innovation", img: "/images/adak/adakthree.svg", alt: "نوآوری" },
  { key: "quality", img: "/images/adak/adakfour.svg", alt: "کیفیت" },
  { key: "pricing", img: "/images/adak/adakfive.svg", alt: "قیمت گذاری شفاف" },
] as const;

const ProcessAdaK = () => {
  const { t, isPersian } = useLanguage();
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-6 px-4">
      <h2 className="text-center text-[24px] font-bold md:text-[32px]">
        {t("whyAdak.title")}
      </h2>
      <div className="flex w-full flex-wrap items-center justify-center gap-6 xl:flex-nowrap xl:justify-between">
        {items.map((item, index) => (
          <Fragment key={item.key}>
            <div className="flex min-h-58.25 w-full max-w-55.5 flex-col items-center justify-around gap-4 rounded-2xl px-3 py-4 shadow-[-8px_-8px_12px_rgba(0,0,0,0.15),8px_8px_12px_rgba(0,0,0,0.15)] sm:w-55.5">
              <img
                className="h-auto max-w-full"
                src={item.img}
                alt={item.alt}
              />
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <h4 className="text-[20px] font-bold">
                  {t(`whyAdak.${item.key}.title`)}
                </h4>
                <p className="text-[14px] text-[#526585] md:text-[16px]">
                  {t(`whyAdak.${item.key}.description`)}
                </p>
              </div>
            </div>
            {index < items.length - 1 && (
              <div className="hidden text-2xl text-[#FA7D0C] xl:block">
                {isPersian ? <FaArrowRightLong /> : <FaArrowLeftLong />}
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
export default ProcessAdaK;
