import { useState } from "react";
import { useTranslation } from "react-i18next";
import ariseImage from "../../../public/projects_imgs/arisewebsite-reservas.webp";
import reformImage from "../../../public/projects_imgs/reformasitegrales.webp";
import oryonImage from "../../../public/projects_imgs/oryonLabs.webp";
import ModalProyect from "./modalProyect";


const projects = [
  {
    id: 1,
    title: "ARISE WEBSITE",
    descKey: "proyects.description_1",
    image: ariseImage,
    role: "Full-Stack Developer",
    duration: "3 months",
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS", "REST API"],
    liveUrl: "https://arisewebsite.com/",
    githubUrl: "https://github.com/DiegoDexx/AriseWebsite",
  },
  {
    id: 2,
    title: "RENEWALS CORPORATIVE WEBSITE",
    descKey: "proyects.description_2",
    image: reformImage,
    role: "Front-End Developer",
    duration: "6 weeks",
    technologies: ["React", "SEO", "Tailwind CSS"],
    liveUrl: "https://tusreformasintegrales.com/",
    githubUrl: "https://github.com/DiegoDexx/Web-decotech",
  },
  {
    id: 3,
    title: "ORYON LABS CORPORATIVE WEBSITE",
    descKey: "proyects.description_3",
    image: oryonImage,
    role: "Full-Stack Developer",
    duration: "3 months",
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS", "REST API"],
    liveUrl: "https://oryonlabs.net",
    githubUrl: "https://github.com/DiegoDexx/oryonLabsDB",
  },
];

export default function ProjectsList() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="w-full flex flex-col gap-6">
        {projects.map((p) => (
          <article
            key={p.id}
            className="project-card rounded-3xl p-5 sm:p-6 flex flex-col md:flex-row gap-5 sm:gap-6 hover:shadow-lg transition-shadow hover-scale"
          >
            <div className="project-card__media rounded-2xl overflow-hidden w-full md:w-[320px] shrink-0 aspect-[16/10] md:aspect-[16/9]">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-extrabold tracking-wide">
                {p.title}
              </h3>

              <p className="mt-2 text-sm sm:text-[15px] opacity-85">
                {t(p.descKey)}
              </p>

              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => handleOpenModal(p)}
                  className="project-btn inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-light cursor-pointer  hover-scale"
                >
                  {t("viewMore")}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <ModalProyect
        project={selectedProject}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
