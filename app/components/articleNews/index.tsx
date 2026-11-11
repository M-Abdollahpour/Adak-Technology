import { Link } from "react-router";
import { useLanguage } from "~/hooks/useLanguage";
import { FaAngleLeft, FaAngleRight, FaRegNewspaper } from "react-icons/fa6";

const articles = [{ id: 1 }, { id: 2 }, { id: 3 }];

const ArticleNews = () => {
  const { t, isPersian } = useLanguage();
  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-6">
      <h2 className="text-[25px] xl:text-[38px] text-[#0E1F36] font-bold">
        {t("news.title")}
      </h2>
      <div className="flex flex-wrap flex-col md:flex-row gap-6 xl:gap-3 justify-center xl:justify-between items-center w-full">
        {articles.map((article) => (
          <Link key={article.id} to={"/"} className="w-full max-w-106.75">
            <div className="relative flex w-full flex-col duration-200 hover:scale-102">
              <div className="relative">
                <div className="absolute inset-x-3 -top-2 h-12 rounded-t-[28px] bg-linear-to-b from-[#F2701F] to-transparent" />
                <div className="relative h-44.75 w-full overflow-hidden rounded-[28px]">
                  <img
                    loading="lazy"
                    className="absolute inset-0 z-0 h-full w-full object-cover"
                    src="/images/article/back.png"
                    alt=""
                  />
                  <img
                    loading="lazy"
                    className="absolute inset-0 z-10 h-full w-full object-cover"
                    src="/images/article/vector.png"
                    alt="مجازی سازی زیرساخت"
                  />
                </div>
              </div>
              <div className="relative -mt-8 flex min-h-44.75 flex-col items-center justify-center gap-3 rounded-b-2xl bg-white px-4 pb-10 pt-14 text-center shadow-[-8px_0px_12px_rgba(0,0,0,0.12),8px_8px_12px_rgba(0,0,0,0.12)]">
                <div className="flex items-center gap-3">
                  <FaRegNewspaper className="shrink-0 text-[28px] text-[#D2621D]" />
                  <h3 className="text-[17px] font-bold md:text-[22px]">
                    {t("news.item.title")}
                  </h3>
                </div>
                <p className="text-[14px] font-bold opacity-70 md:text-[17px]">
                  {t("news.item.description")}
                </p>
                <span className="absolute bottom-0 left-1/2 h-1.5 w-36 -translate-x-1/2 rounded-full bg-[#FA7D0C]" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <Link to={"/"}>
          <div className="flex items-center justify-center gap-4 text-[#0E1F36] text-[23.5px] hover:-translate-x-1 duration-200">
            <span>{t("news.showMore")}</span>
            {isPersian ? <FaAngleLeft /> : <FaAngleRight />}
          </div>
        </Link>
      </div>
    </div>
  );
};
export default ArticleNews;
