import { createPortal } from "react-dom";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function ModalProyect({ project, isOpen, onClose }) {
	const { t } = useTranslation();

	if (!isOpen || !project) return null;

	const overview = project.overviewKey
		? t(project.overviewKey)
		: project.descKey
			? t(project.descKey)
			: project.overview;

	const techs = project.technologies || project.tech || [];

	return createPortal(
		<div
			className="project-modal fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 p-4"
			onMouseDown={(e) => {
				if (e.target === e.currentTarget) onClose?.();
			}}
		>
			<div className="project-modal__panel relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#11121f] text-white shadow-2xl ">
				<button
					type="button"
					onClick={onClose}
					aria-label={t("common.close", "Cerrar")}
					className="project-modal__close absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full 
                    border border-white/10 bg-black/40 text-white transition hover:bg-black/60 cursor-pointer"
				>
					<FaTimes />
				</button>

				{project.image && (
					<div className="project-modal__media">
						<img
							src={project.image}
							alt={project.title}
							className="h-56 w-full object-cover sm:h-72"
							loading="lazy"
						/>
					</div>
				)}

				<div className="project-modal__body space-y-6 p-5 sm:p-6">
					<h3 className="text-2xl font-semibold tracking-tight">
						{project.title}
					</h3>

					<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
						{project.role && (
							<div className="project-modal__meta rounded-xl border border-white/10 bg-white/5 p-4">
								<p className="text-xs uppercase tracking-wide text-white/60">
									{t("projectModal.role", "Role")}
								</p>
								<p className="mt-1 text-sm font-semibold text-white/90">
									{project.role}
								</p>
							</div>
						)}
						{project.duration && (
							<div className="project-modal__meta rounded-xl border border-white/10 bg-white/5 p-4">
								<p className="text-xs uppercase tracking-wide text-white/60">
									{t("projectModal.duration", "Duration")}
								</p>
								<p className="mt-1 text-sm font-semibold text-white/90">
									{project.duration}
								</p>
							</div>
						)}
					</div>

					{overview && (
						<div>
							<h4 className="text-sm font-semibold text-white/90">
								{t("projectModal.overview", "Project Overview")}
							</h4>
							<p className="mt-2 text-sm leading-relaxed text-white/70">
								{overview}
							</p>
						</div>
					)}

					{techs.length > 0 && (
						<div>
							<h4 className="text-sm font-semibold text-white/90">
								{t("projectModal.technologies", "Technologies Used")}
							</h4>
							<div className="mt-3 flex flex-wrap gap-2">
								{techs.map((tech) => (
									<span
										key={tech}
										className="project-modal__chip rounded-lg border border-[#F6339A]/40 bg-[#F6339A]/10 px-3 py-1 text-xs font-semibold text-[#F6339A]"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					)}

					{(project.liveUrl || project.githubUrl) && (
						<div className="border-t border-white/10 pt-4">
							<h4 className="text-sm font-semibold text-white/90">
								{t("projectModal.links", "Project Links")}
							</h4>
							<div className="mt-3 flex flex-col gap-3 sm:flex-row">
								{project.liveUrl && (
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noreferrer"
										className="project-modal__primary inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#F6339A] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
									>
										<FaExternalLinkAlt className="text-xs" />
										{t("projectModal.visit", "Visit Live Site")}
									</a>
								)}
								{project.githubUrl && (
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noreferrer"
										className="project-modal__secondary inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10"
									>
										<FaGithub />
										{t("projectModal.github", "View on GitHub")}
									</a>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>,
		document.body
	);
}
