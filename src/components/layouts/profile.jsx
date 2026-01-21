import { useTranslation } from "react-i18next";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import image from "../../../public/images/profile.jpg";

export default function Profile() {
  const { t } = useTranslation();

  const name = "Diego Alejandro";
  const email = "diegojspro@gmail.com";
  const avatarSrc = image; 

  return (
    <section className="container-main my-12">
<div
  className="
    w-full
    rounded-3xl
    px-6 py-8 sm:px-10 sm:py-10
    flex flex-col md:flex-row gap-6 md:gap-10

    bg-white/10 dark:bg-white/5
    border border-white/10
    shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)]
    transition
  " 
>

    {/* Avatar */}
    <div className="relative shrink-0 mx-auto">
      <div className="profile-avatar rounded-2xl overflow-hidden
                      w-32 h-32 sm:w-40 sm:h-40 lg:w-42 lg:h-42">
        <img
          src={avatarSrc}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Online dot */}
      <span
        className="
          profile-online
          absolute
          right-0 bottom-0 sm:bottom-8
          translate-x-1/4 translate-y-1/4
          w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7
          rounded-full
          z-10
          md:border-4 md:bottom-8 
        "
      />
    </div>


        {/* Content */}
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {name}
          </h1>

          <p className="mt-4 text-sm sm:text-lg leading-relaxed opacity-90">
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
