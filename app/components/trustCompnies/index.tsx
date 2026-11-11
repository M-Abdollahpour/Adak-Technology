import { useLanguage } from "~/hooks/useLanguage";
import Title from "../ui/title";

const TrustComponies = () => {
  const { t } = useLanguage();
  const items = [
    { id: 1, src: "/images/companies/one.png" },
    { id: 2, src: "/images/companies/five.png" },
    { id: 3, src: "/images/companies/three.png" },
    { id: 4, src: "/images/companies/four.png" },
    { id: 5, src: "/images/companies/five.png" },
    { id: 6, src: "/images/companies/one.png" },
    { id: 7, src: "/images/companies/three.png" },
  ];
  const loopItems = [...items, ...items];

  return (
    <div className="flex flex-col gap-6 justify-center items-center mt-10">
      <Title
        title={t("trustCompanies.title")}
        process={t("trustCompanies.process")}
      />
      <div dir="ltr" className="w-full relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white to-transparent"></div>
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white to-transparent"></div>
        <div className="logo-track">
          {loopItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="mx-8 flex shrink-0 items-center"
            >
              <img loading="lazy" src={item.src} alt="لوگوی کمپانی" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TrustComponies;
