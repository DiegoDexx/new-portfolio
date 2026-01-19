//import react-icon for each tecnology skill
import { useTranslation } from "react-i18next";
import { FaReact, FaJsSquare, FaLaravel, FaWordpress, FaAws } from "react-icons/fa";
import { SiTailwindcss, SiShopify, SiMysql, SiPhp, SiSpringboot } from "react-icons/si";    



const skills = [
  { name: "React", level: 100 },
  { name: "JavaScript", level: 100 },
  { name: "Tailwind CSS", level: 100 },
  { name: "Shopify", level: 100 },
  { name: "Laravel", level: 80 },
  { name: "WordPress", level: 80 },
  { name: "MySQL", level: 80 },
  { name: "PHP", level: 80 },
  { name: "Spring Boot", level: 80 },
  { name: "AWS", level: 80 },
];

export default function SkillsList() {
    const { t } = useTranslation();
  return (
    <div className="skills-wrap">
      <h3 className="text-2xl font-extrabold mb-6">{t("Technical Skills")}</h3>

      <div className="flex flex-col gap-5">
        {skills.map((s) => (
          <div key={s.name} className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-4">
            {s.name === "React" && <FaReact />}
            {s.name === "JavaScript" && <FaJsSquare />}
            {s.name === "Tailwind CSS" && <SiTailwindcss />}
            {s.name === "Shopify" && <SiShopify />}
            {s.name === "Laravel" && <FaLaravel />}
            {s.name === "WordPress" && <FaWordpress />}
            {s.name === "MySQL" && <SiMysql />}
            {s.name === "PHP" && <SiPhp />}
            {s.name === "Spring Boot" && <SiSpringboot />}
            {s.name === "AWS" && <FaAws />}
              <span className="font-semibold flex-1 ">{s.name}</span>
              <span className="text-sm opacity-70">{s.level}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-bar__fill"
                style={{ width: `${s.level}%` }}
                aria-label={`${s.name} ${s.level}%`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
