import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="container-main bg-white text-black/95 py-12 sm:py-14">
			<div className="container-main mx-auto">
				{/* Top grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-12 items-start">
					{/* Brand + description */}
					<div>
					     <a href="/" className="flex items-center gap-2 select-none" >
                            <h2 className="text-lg sm:text-xl font-extrabold tracking-wide">
                            <span>MY </span>
                            <span className="text-[#F6339A]">PORTFOLIO</span>
                            </h2>
                        </a>
						<p className="mt-4 text-base opacity-80 max-w-[500px]">
							Full-stack developer passionate about creating innovative web solutions.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg font-semibold">Quick Links</h4>
						<ul className="mt-4 space-y-3 text-base opacity-90">
							<li><a href="#home" className="hover:opacity-100">Home</a></li>
							<li><a href="#projects" className="hover:opacity-100">Projects</a></li>
							<li><a href="#skills" className="hover:opacity-100">Skills</a></li>
							<li><a href="#services" className="hover:opacity-100">Services</a></li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className="text-lg font-semibold">Services</h4>
						<ul className="mt-4 space-y-3 text-base opacity-90">
							<li>Web Development</li>
							<li>Full-Stack Development</li>
							<li>WordPress Development</li>
							<li>UI/UX Implementation</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="text-lg font-semibold">Contact</h4>
						<p className="mt-4 text-base opacity-90">diegoasen@gmail.com</p>

						<div className="mt-5 flex items-center gap-3">
							<a
								href="https://www.linkedin.com/"
								target="_blank"
								rel="noreferrer"
								aria-label="LinkedIn"
								className="p-3 rounded-xl bg-white/10 border border-white/10 text-white/90 hover:bg-white/20 transition"
							>
								<FaLinkedinIn />
							</a>
							<a
								href="https://github.com/"
								target="_blank"
								rel="noreferrer"
								aria-label="GitHub"
								className="p-3 rounded-xl bg-white/10 border border-white/10 text-white/90 hover:bg-white/20 transition"
							>
								<FaGithub />
							</a>
							<a
								href="mailto:diegoasen@gmail.com"
								aria-label="Email"
								className="p-3 rounded-xl bg-white/10 border border-white/10 text-white/90 hover:bg-white/20 transition"
							>
								<FaEnvelope />
							</a>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="mt-10 border-t border-white/10" />

				{/* Copyright */}
				<p className="text-center text-sm opacity-80 mt-6">
					© {year} Diego Alejandro. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

