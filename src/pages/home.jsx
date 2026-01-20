import { useState } from "react";
import NavBar from "../components/layouts/navbar";
import Profile from "../components/layouts/profile";
import Portfolio from "../components/layouts/portfolio";
import  SectionNav  from "../components/ui/sectionNav";
import ExperiencePanel from "../components/layouts/experience";
import Footer from "../components/layouts/footer";

function Home() {
      const [tab, setTab] = useState("projects");
  return (
    <>
      <NavBar />

      <section className="container-main pt-5 sm:pt-10">
        <Profile />
      </section>

      <section className="container-main my-10 sm:my-12">
        <div className="container-main">
            <SectionNav value={tab} onChange={setTab} />
        </div>
        <div className="grid grid-cols-12 gap-1 items-start">
          {/* Portfolio */}
          <div className="col-span-12 lg:col-span-9">
            <Portfolio tab={tab} />
          </div>

          {/* Experience */}
          <div className="col-span-12 lg:col-span-3">
            <ExperiencePanel />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
