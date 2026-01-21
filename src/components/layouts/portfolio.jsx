
import ProjectsList from "../ui/projectList";
import SkillsList from "../ui/skillList";
import ServiceList from "../ui/serviceList";

export default function Portfolio({tab}) {


  return (
    <section className="flex justify-center w-full py-5 sm:py-6" id="portfolio">
 
       <div className="w-full lg:w-[95%]">

          <div className="portfolio-panel p-5 sm:p-7 rounded-3xl">
            <div key={tab} className="portfolio-panel__content">
              {tab === "projects" && <ProjectsList />}
              {tab === "skills" && <SkillsList />}
              {tab === "services" && <ServiceList />}
            </div>
          </div>
        </div>
    
    </section>
  );
}
