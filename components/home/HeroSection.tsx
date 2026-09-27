export default function HeroSection() {
	return (
		<section className="min-h-[100svh] flex flex-col justify-center relative overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16">
			<span
				className="absolute top-28 left-8 font-mono text-[11px] text-ink-soft opacity-55 tracking-[0.02em] hidden lg:block pointer-events-none animate-settle-4"
				aria-hidden="true"
			>
				lat: student
				<br />
				lng: developer
			</span>
			<span
				className="absolute top-28 right-8 text-right hidden sm:block font-mono text-[11px] text-ink-soft opacity-55 tracking-[0.02em] pointer-events-none animate-settle-4"
				aria-hidden="true"
			>
				x: 04.21
				<br />
				y: 08.17
			</span>
			<span
				className="absolute bottom-10 right-8 text-right hidden sm:block font-mono text-[11px] text-ink-soft opacity-55 tracking-[0.02em] pointer-events-none animate-settle-4"
				aria-hidden="true"
			>
				[ 07.0707° N, 125.6113° E ]
			</span>

			<div className="max-w-[1180px] w-full mx-auto px-5 sm:px-8 relative z-[2]">
				<div className="font-mono text-xs text-accent mb-4 sm:mb-[22px] flex items-center gap-2.5 animate-settle-0">
					<span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
					Davao, Philippines — open to opportunities
				</div>
				<h1 className="font-display font-semibold text-[clamp(32px,8vw,84px)] leading-[1.04] tracking-[-0.015em] max-w-[22ch] animate-settle-1">
					Always curious,
					<br />
					<span className="whitespace-nowrap">constantly tinkering,</span>
					<br />
					always <span className="text-accent">creating</span>.
				</h1>
				<p className="mt-5 sm:mt-7 text-[15px] sm:text-[17px] leading-[1.6] text-ink-soft max-w-[48ch] text-justify animate-settle-2">
					I&apos;m John Lester, a web developer focused on building thoughtful,
					full-stack applications. I enjoy taking problems from idea to implementation — designing the backend,
					shaping the architecture, and bringing everything together into interfaces that feel simple and intuitive.
				</p>
				<div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 sm:mt-10 animate-settle-3">
					<a
						className="font-sans font-medium text-[13.5px] sm:text-[14.5px] px-5 sm:px-[26px] py-2.5 sm:py-[13px] rounded-xs border border-ink bg-ink text-bg transition-all duration-200 hover:bg-accent hover:border-accent hover:-translate-y-0.5 inline-block"
						href="#work"
					>
						View projects
					</a>
					<a
						className="font-sans font-medium text-[13.5px] sm:text-[14.5px] px-5 sm:px-[26px] py-2.5 sm:py-[13px] rounded-xs border border-line text-ink transition-all duration-200 hover:border-ink hover:-translate-y-0.5 inline-block"
						href="#about"
					>
						About me
					</a>
					<a
						className="font-sans font-medium text-[13.5px] sm:text-[14.5px] px-4 sm:px-[26px] py-2.5 sm:py-[13px] rounded-xs border border-line text-ink transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-0.5 inline-flex items-center gap-1.5"
						href="/resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>Resume</span>
						<span className="text-xs transition-transform duration-200" aria-hidden="true">
							↗
						</span>
					</a>
				</div>
				<div className="mt-12 sm:mt-16 font-mono text-xs text-ink-soft flex items-center gap-2.5 animate-settle-4">
					<div className="w-[1px] h-7 bg-gradient-to-b from-ink-soft to-transparent opacity-60" />
					Scroll to explore
				</div>
			</div>
		</section>
	);
}
