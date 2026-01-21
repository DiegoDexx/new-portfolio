import { useMemo } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";

const LoadingPage = () => {
	const { isDarkMode } = useDarkMode();

	const size = 160;
	const stroke = 8;
	const r = useMemo(() => (size - stroke) / 2, [size, stroke]);
	const circumference = useMemo(() => 2 * Math.PI * r, [r]);

	return (
		<div className="loading-page flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-white text-black dark:bg-[#0b1b3a] dark:text-white">
			<div className="relative" style={{ width: size, height: size }}>
				<div className="absolute inset-0 flex items-center justify-center">
					<img
						src={isDarkMode ? "/images/dark.png" : "/images/clear.png"}
						alt="Avatar"
						className="h-24 w-24 rounded-full object-cover shadow-lg"
						draggable="false"
					/>
				</div>

				<svg
					className="loading-ring absolute inset-0"
					width={size}
					height={size}
					viewBox={`0 0 ${size} ${size}`}
				>
					<circle
						className="loading-ring__bg"
						cx={size / 2}
						cy={size / 2}
						r={r}
						strokeWidth={stroke}
						fill="none"
					/>
					<circle
						className="loading-ring__progress"
						cx={size / 2}
						cy={size / 2}
						r={r}
						strokeWidth={stroke}
						fill="none"
						strokeDasharray={circumference}
						strokeDashoffset={circumference}
					/>
				</svg>
			</div>

			<p className="text-sm font-semibold tracking-[0.2em] text-black/70 dark:text-white/70">
				Diego Alejandro
			</p>
		</div>
	);
};

export default LoadingPage;
