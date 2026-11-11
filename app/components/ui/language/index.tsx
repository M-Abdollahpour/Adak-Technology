import { useLanguage } from "~/hooks/useLanguage";

const ToggleLanguage = () => {
  const { i18n, t } = useLanguage();
  return (
    <div className="flex justify-center items-center sm:gap-1 gap-2 sm:text-[12px]">
      <button
        className="cursor-pointer hover:text-gray-800 hover:bg-gray-200/50 duration-300 rounded-lg px-2 py-1"
        onClick={() => {
          void i18n.changeLanguage("en");
        }}
      >
        {t("menu.en")}
      </button>
      <span>|</span>
      <button
        className="cursor-pointer hover:text-gray-800 hover:bg-gray-200/50 duration-300 rounded-lg px-2 py-1"
        onClick={() => {
          void i18n.changeLanguage("fa");
        }}
      >
        {t("menu.fa")}
      </button>
    </div>
  );
};
export default ToggleLanguage;
