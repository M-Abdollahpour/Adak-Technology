import { Fragment } from "react";

type TitleType = {
  title: string;
  process: string;
};

const Title = ({ title, process }: TitleType) => {
  return (
    <Fragment>
      <div className="flex items-center justify-center text-[#B75B22] tracking-tighter">
        <span className="h-0.5 w-3 bg-[#F2701F] rounded-full" />
        <span>{title}</span>
        <span className="h-0.5  w-3 bg-[#F2701F] rounded-full" />
      </div>
      <div className="text-[25px] text-center md:text-[32px] text-[#0E1F36] font-bold">
        {process}
      </div>
    </Fragment>
  );
};
export default Title;
