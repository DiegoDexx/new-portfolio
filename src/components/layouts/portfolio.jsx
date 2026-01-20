
import ProjectsList from "../ui/projectList";
import SkillsList from "../ui/skillList";
import ServiceList from "../ui/serviceList";

export default function Portfolio({tab}) {


  return (
    <section className=" flex justify-center w-full py-12 " id="portfolio">
 
       <div className=" w-full  lg:w-[95%] ">

          <div className="portfolio-panel p-6  sm:p-8 rounded-3xl">
            {tab === "projects" && <ProjectsList />}
            {tab === "skills" && <SkillsList />}
            {tab === "services" && <ServiceList />}
          </div>
        </div>
    
    </section>
  );
}
