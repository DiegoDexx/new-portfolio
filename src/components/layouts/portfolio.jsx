import { useState } from "react";
import SectionNav from "../ui/sectionNav";
import ProjectsList from "../ui/projectList";
import SkillsList from "../ui/skillList";

export default function Portfolio() {
  const [tab, setTab] = useState("projects");

  return (
    <section className="w-full py-12" id="portfolio">
      <div className="container-main">
        <SectionNav value={tab} onChange={setTab} />

       <div className="mt-6 w-full lg:w-[75%]">

          <div className="portfolio-panel p-6 sm:p-8 rounded-3xl">
            {tab === "projects" && <ProjectsList />}
            {tab === "skills" && <SkillsList />}

          </div>
        </div>
      </div>
    </section>
  );
}
