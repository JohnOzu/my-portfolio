interface LogoProps {
	className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
	return (
		<span
			className={`inline-flex items-center select-none font-display font-semibold text-[19px] leading-none ${className}`}
		>
			<span className="font-mono text-ink font-semibold text-[17px] mr-1 opacity-75 transition-transform duration-200 group-hover:-translate-x-0.5">
				&lt;
			</span>
			<span className="text-accent font-bold tracking-tight">
				JL
			</span>
			<span className="font-mono text-ink font-semibold text-[17px] ml-1 opacity-75 transition-transform duration-200 group-hover:translate-x-0.5">
				&#125;
			</span>
		</span>
	);
}
