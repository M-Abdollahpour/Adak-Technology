import Title from "../ui/title";
import { useLanguage } from "~/hooks/useLanguage";

const Step = () => {
  const { t } = useLanguage();
  const items = [
    {
      id: 1,
      title: t("step.needsAssessment"),
      description: t("step.needsAssessmentDescription"),
      num: t("step.numOne"),
      logo: "/images/icon/iconone.svg",
    },
    {
      id: 2,
      title: t("step.siteSurvey"),
      description: t("step.siteSurveyDescription"),
      num: t("step.numTwo"),
      logo: "/images/icon/icontwo.svg",
    },
    {
      id: 3,
      title: t("step.solutionDesign"),
      description: t("step.solutionDesignDescription"),
      num: t("step.numThree"),
      logo: "/images/icon/iconthree.svg",
    },
    {
      id: 4,
      title: t("step.implementation"),
      description: t("step.implementationDescription"),
      num: t("step.numFour"),
      logo: "/images/icon/iconfour.svg",
    },
    {
      id: 5,
      title: t("step.testingAndHandover"),
      description: t("step.testingAndHandoverDescription"),
      num: t("step.numFive"),
      logo: "/images/icon/iconfive.svg",
    },
    {
      id: 6,
      title: t("step.support"),
      description: t("step.supportDescription"),
      num: t("step.numSix"),
      logo: "/images/icon/iconsix.svg",
    },
  ];
  return (
    <div className="flex flex-col gap-6 justify-center items-center mt-10">
      <Title title={t("step.title")} process={t("step.process")} />

      <div className="grid grid-cols-1 ms:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-start justify-items-center gap-2 md:gap-6">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col gap-4 md:gap-6 items-center ${
              index % 2 === 0 ? "xl:mt-30" : ""
            }`}
          >
            <span className="text-[20px] relative font-bold shadow-[4px_4px_12px_rgba(0,0,0,0.2),-4px_-4px_12px_rgba(0,0,0,0.2)] rounded-full w-13.25 h-13.25 flex justify-center items-center">
              {item.num}
            </span>
            <div className="hover:border-[#FE8716] border-2 duration-200 border-transparent flex flex-col gap-10 items-center justify-start pt-5 rounded-xl h-60.75 w-51.5 shadow-[6px_6px_20px_3px_rgba(0,0,0,0.15),-6px_-6px_20px_3px_rgba(0,0,0,0.10)]">
              <div className="flex flex-col gap-2 justify-center items-center">
                <span>
                  <img src={item.logo} alt="" />
                </span>
                <h3 className="text-[16px]">{item.title}</h3>
              </div>
              <p className="text-[11px] font-bold opacity-70 text-center px-6">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex w-full items-center justify-center gap-7">
        <span className="inline-block h-0.5 w-1/3 bg-[#142B4A] opacity-65"></span>
        <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-[#142B4A] opacity-65"></span>
        <span className="inline-block h-0.5 w-1/3 bg-[#142B4A] opacity-65"></span>
      </div>
    </div>
  );
};
export default Step;
