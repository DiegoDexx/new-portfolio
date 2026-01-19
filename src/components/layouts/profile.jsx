import { useTranslation } from "react-i18next";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Profile() {
  const { t } = useTranslation();

  const name = "Diego Alejandro";
  const email = "diegojspro@gmail.com";
  const avatarSrc = "/images/profile.jpg"; // <-- pon tu ruta real (public/...)

  return (
    <section className="container-main my-12">
      <div
        className="
          profile-card
          w-full
          rounded-3xl
          px-6 py-8
          sm:px-10 sm:py-10
          flex flex-col md:flex-row
          items-start md:items-center
          gap-6 md:gap-10
        "
      >
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="profile-avatar rounded-2xl overflow-hidden w-28 h-28 sm:w-32 sm:h-32">
            <img
              src={avatarSrc}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Online dot */}
          <span className="profile-online absolute -bottom-2 -right-2 w-6 h-6 rounded-full" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {name}
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed opacity-90">
            {t("intro")}
          </p>

          {/* Social/Mail */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <span className="text-sm font-semibold opacity-80">
              SOCIAL/MAIL:
            </span>

            <div className="flex flex-wrap items-center gap-3">
              <a
                className="social-chip inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>

              <a
                className="social-chip inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              <a
                className="social-chip inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm"
                href={`mailto:${email}`}
                aria-label="Email"
              >
                <FaEnvelope />
                <span className="truncate max-w-[220px] sm:max-w-[280px]">
                  {email}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
