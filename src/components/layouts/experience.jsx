import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

function TimelineItem({ title, company, date }) {
  return (
    <div className="relative pl-4 sm:pl-5">
      {/* vertical accent */}
      <span className="exp-line" aria-hidden="true" />

      <h4 className="font-extrabold text-base sm:text-lg">{title}</h4>

      <div className="mt-2 flex flex-col gap-1 text-xs sm:text-sm opacity-85">
        <div className="flex items-center gap-2">
          <span className="exp-icon">
            <FaBriefcase />
          </span>
          <span>{company}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="exp-icon">
            <FaCalendarAlt />
          </span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

export default function ExperiencePanel() {
  const { t } = useTranslation();
  const [tab, setTab] = useState("professional");

  // Ajusta estos datos a los tuyos (o llévalos a i18n si prefieres)
  const professionalItems = useMemo(
    () => [
      {
        title: t("experience.WordPress Developer"),
        company: "Sweet Code Chef",
        date: "March 2024 - June 2024",
      },
      {
        title: t("experience.Freelance Developer"),
        company: "Freelance",
        date: "February 2024 - Present",
      },
      {
        title: t("experience.Network Administrator"),
        company: "Inacom",
        date: "Nov 2024 - Present",
      },
    ],
    [t]
  );

  const otherItems = useMemo(
    () => [
      {
        title: t("experience.Computer Technician"),
        company: "Tech Store",
        date: "2023 - 2024",
      },
      {
        title: t("experience.Parking Attendant and Chauffeur"),
        company: "Parking Service",
        date: "2022 - 2023",
      },
    ],
    [t]
  );

  const items = tab === "professional" ? professionalItems : otherItems;

  return (
    <section
      className="flex justify-center w-full my-8 sm:my-10 lg:my-12 bg-white/10 dark:bg-white/5 border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)] transition"
      id="experience"
    >
      <div className="exp-card rounded-3xl p-5 sm:p-7 w-full max-w-[520px] lg:max-w-[420px]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setTab("professional")}
            className={`exp-tab text-xs sm:text-sm md:text-base ${tab === "professional" ? "is-active" : ""}`}
          >
            {t("menuTitle3")}
          </button>

          <button
            type="button"
            onClick={() => setTab("other")}
            className={`exp-tab text-xs sm:text-sm md:text-base ${tab === "other" ? "is-active" : ""}`}
          >
            {t("menuTitle4")}
          </button>
        </div>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 font-semibold opacity-90 text-sm sm:text-base">
          {tab === "professional" ? t("subtitle3") : t("subtitle4")}
        </p>

        {/* List */}
        <div className="mt-5 sm:mt-6 flex flex-col gap-6 sm:gap-8">
          {items.map((it, idx) => (
            <TimelineItem
              key={`${it.title}-${idx}`}
              title={it.title}
              company={it.company}
              date={it.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
