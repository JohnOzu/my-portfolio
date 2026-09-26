export default function SectionDivider() {
	return (
		<div className="max-w-[1180px] mx-auto px-8 relative z-[2]" aria-hidden="true">
			<div className="w-full border-t-2 border-ink/60 flex items-center justify-between">
				<span className="font-mono text-xs font-semibold text-ink opacity-80 -translate-y-1/2 -ml-1 select-none">
					+
				</span>
				<span className="font-mono text-xs font-semibold text-ink opacity-80 -translate-y-1/2 -mr-1 select-none">
					+
				</span>
			</div>
		</div>
	);
}
