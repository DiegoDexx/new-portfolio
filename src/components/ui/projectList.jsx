import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    title: "ARISE WEBSITE",
    descKey: "proyects.description_1",
    image: "/images/projects/arise.jpg",
    href: "#",
  },
  {
    id: 2,
    title: "RENEWALS CORPORATIVE WEBSITE",
    descKey: "proyects.description_2",
    image: "/images/projects/renewals.jpg",
    href: "#",
  },
  {
    id: 3,
    title: "ORYON LABS CORPORATIVE WEBSITE",
    descKey: "proyects.description_3",
    image: "/images/projects/oryon.jpg",
    href: "https://oryonlabs.net",
  },
];

export default function ProjectsList() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      {projects.map((p) => (
        <article
          key={p.id}
          className="project-card rounded-3xl p-5 sm:p-6 flex flex-col md:flex-row gap-5 sm:gap-6"
        >
          <div className="project-card__media rounded-2xl overflow-hidden w-full md:w-[320px] shrink-0">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-[180px] md:h-[170px] object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-extrabold tracking-wide">
              {p.title}
            </h3>

            <p className="mt-2 text-sm sm:text-base opacity-85">
              {t(p.descKey)}
            </p>

            <div className="mt-4">
              <a
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={p.href.startsWith("http") ? "noreferrer" : undefined}
                className="project-btn inline-flex items-center justify-center px-6 py-2 rounded-xl text-sm font-semibold"
              >
                {t("viewMore")}
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
