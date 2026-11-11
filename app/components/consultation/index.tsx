import { Link } from "react-router";
import { useLanguage } from "~/hooks/useLanguage";

const ConsultationCustomer = () => {
  const { t } = useLanguage();
  return (
    <div className="mt-15 flex min-h-30.5 flex-col items-center justify-between gap-4 rounded-2xl bg-[#123E72] px-6 py-6 text-center text-white md:flex-row md:px-10 md:text-start lg:px-20">
      <div className="text-[18px] md:text-[20px] lg:text-[24px]">
        <h3 className="font-bold">{t("consultation.title")}</h3>
        <p>{t("consultation.paragraph")}</p>
      </div>
      <a
        href="https://t.me/your_id"
        target="_blank"
        rel="noreferrer"
        className="flex h-11 w-full shrink-0 items-center justify-center rounded-full bg-[#FF680D] hover:bg-[#fb8840] duration-200 text-[18px] font-bold sm:w-58.5 md:text-[20px]"
      >
        {t("consultation.request")}
      </a>
    </div>
  );
};
export default ConsultationCustomer;
