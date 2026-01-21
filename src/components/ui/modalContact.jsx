import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";

const ModalContact = ({
	isOpen,
	onClose,
	onSubmit,
	formspreeId = "mjkjkblq",
}) => {
	const { t } = useTranslation();
	const formRef = useRef(null);
	const [state, formspreeSubmit] = useForm(formspreeId);

	useEffect(() => {
		if (state.succeeded && formRef.current) {
			const data = Object.fromEntries(new FormData(formRef.current));
			onSubmit?.(data);
			formRef.current.reset();
		}
	}, [state.succeeded, onSubmit]);

	if (!isOpen) return null;

	const handleSubmit = (e) => {
		formspreeSubmit(e);
	};

	return (
		<div className="modal-contact fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 p-4">
			<div className="modal-contact__panel w-full max-w-lg rounded-2xl border border-black/10 bg-white p-6 text-black shadow-2xl">
				<div className="mb-4 flex items-center justify-between">
					<h4 className="text-xl font-bold text-black">
						{t("contact_form.title", "Contáctame")}
					</h4>
					<button
						type="button"
						onClick={onClose}
						aria-label={t("common.close", "Cerrar")}
						className="modal-contact__close inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-black/5 text-black transition hover:brightness-110"
					>
						<FaTimes />
					</button>
				</div>

				{state.succeeded ? (
					<div className="space-y-4">
						<p className="text-sm text-black/80">
							{t(
								"contact_form.success",
								"¡Gracias! Tu mensaje se envió correctamente."
							)}
						</p>
						<button
							type="button"
							onClick={onClose}
							className="modal-contact__primary inline-flex w-full items-center justify-center rounded-xl bg-[#F6339A] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
						>
							{t("common.ok", "Aceptar")}
						</button>
					</div>
				) : (
					<form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
						<input
							type="text"
							name="_gotcha"
							tabIndex="-1"
							autoComplete="off"
							className="hidden"
						/>
						<input type="hidden" name="_subject" value="Nuevo mensaje desde el Portfolio" />
						<input type="hidden" name="source" value="portfolio" />

						<div className="space-y-2">
							<label htmlFor="email" className="text-sm font-semibold text-black">
								{t("contact_form.email", "Correo electrónico")}
							</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="email@gmail.com"
								required
								className="modal-contact__input w-full rounded-xl border border-black/10 bg-white px-4 py-2 text-sm text-black outline-none transition focus:border-[#F6339A]"
							/>
							<ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500" />
						</div>

						<div className="space-y-2">
							<label htmlFor="phone" className="text-sm font-semibold text-black">
								{t("contact_form.phone", "Teléfono")}
							</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								placeholder="(123) 456-7890"
								className="modal-contact__input w-full rounded-xl border border-black/10 bg-white px-4 py-2 text-sm text-black outline-none transition focus:border-[#F6339A]"
							/>
							<ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-xs text-red-500" />
						</div>

						<div className="space-y-2">
							<label htmlFor="message" className="text-sm font-semibold text-black">
								{t("contact_form.message", "Mensaje")}
							</label>
							<textarea
								id="message"
								name="message"
								rows="5"
								placeholder={t("contact_form.message_placeholder", "Escribe tu mensaje aquí...")}
								required
								className="modal-contact__input w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-2 text-sm text-black outline-none transition focus:border-[#F6339A]"
							/>
							<ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500" />
						</div>

						<ValidationError errors={state.errors} className="text-xs text-red-500" />

						<button
							type="submit"
							disabled={state.submitting}
							className="modal-contact__primary inline-flex w-full items-center justify-center rounded-xl bg-[#F6339A] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-60"
						>
							{state.submitting
								? t("contact_form.sending", "Enviando…")
								: t("contact_form.send", "Enviar")}
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default ModalContact;
