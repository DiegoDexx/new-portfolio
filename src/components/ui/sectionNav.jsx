import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function SectionNav({ value, onChange }) {
  const { t } = useTranslation();

  const tabs = useMemo(
    () => [
      { key: "projects", label: t("menuTitle1") }, // PROJECTS / PROYECTOS
      { key: "skills", label: t("menuTitle2") },   // SKILLS / HABILIDADES
      { key: "services", label: t("menuTitle5") }, // MY SERVICES / MIS SERVICIOS
    ],
    [t]
  );

  return (
    <div className="section-nav container-main my-8">
      <div className="flex items-center gap-10 border-b border-black/10 dark:border-white/10">
        {tabs.map((tab) => {
          const active = value === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onChange(tab.key)}
              className={`section-nav__tab ${active ? "is-active" : ""} py-3 pb-2 text-sm font-light cursor-pointer transition-all duration-300`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
