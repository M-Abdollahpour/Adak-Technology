import { Fragment } from "react/jsx-runtime";
import Banner from "../banner";
import Partnership from "../partnership";
import Step from "../step";
import Service from "../service";
import Project from "../project";
import ProcessAdaK from "../processAdak";
import ArticleNews from "../articleNews";
import TrustComponies from "../trustCompnies";
import ConsultationCustomer from "../consultation";

const Main = () => {
  return (
    <Fragment>
      <div className="container mx-auto px-7 max-w-360">
        <section id="home">
          <Banner />
        </section>
        <section id="equipment">
          <Partnership />
        </section>
        <section id="solutions">
          <Step />
        </section>
        <section id="services">
          <Service />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="about">
          <ProcessAdaK />
        </section>
        <section id="articles">
          <ArticleNews />
        </section>
      </div>
      <TrustComponies />
      <div className="container mx-auto px-7 max-w-360">
        <section id="contact">
          <ConsultationCustomer />
        </section>
      </div>
    </Fragment>
  );
};
export default Main;
