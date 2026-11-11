import { Fragment } from "react/jsx-runtime";
import Banner from "../banner";
import Partnership from "../partnership";
import Step from "../step";
import Service from "../service";
import Project from "../project";
import ProcessAdaK from "../processAdak";
import ArticleNews from "../articleNews";
import TrustComponies from "../trustCompnies";
import Consultation from "../consultation";
import ConsultationCustomer from "../consultation";

const Main = () => {
  return (
    <Fragment>
      <div className="container mx-auto px-7 max-w-360">
        <Banner />
        <Partnership />
        <Step />
        <Service />
        <Project />
        <ProcessAdaK />
        <ArticleNews />
      </div>
      <TrustComponies />
      <div className="container mx-auto px-7 max-w-360">
        <ConsultationCustomer />
      </div>
    </Fragment>
  );
};
export default Main;
