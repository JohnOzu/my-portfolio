import { skillCategories } from "@/data/skills";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function SkillsSection() {
	return (
		<section id="skills" className="relative py-16 sm:py-[120px]">
			<div className="max-w-[1180px] mx-auto px-5 sm:px-8 relative z-[2]">
				<RevealOnScroll>
					<div className="flex items-baseline justify-between mb-8 sm:mb-14 flex-wrap gap-4">
						<div>
							<span className="font-mono text-xs text-accent tracking-[0.03em]">
								02 — technical toolkit
							</span>
							<h2 className="font-display font-semibold text-[clamp(26px,4vw,40px)] mt-2 tracking-[-0.01em]">
								The tech stack I work with.
							</h2>
						</div>
						<span className="font-mono text-xs text-ink-soft opacity-60">
							[ core_stack_v26 ]
						</span>
					</div>
				</RevealOnScroll>

				<div className="flex flex-col border-t border-line-soft">
					{skillCategories.map((category, cIdx) => (
						<RevealOnScroll key={category.index} delay={cIdx * 60}>
							<div className="group py-4 sm:py-6 border-b border-line-soft transition-colors duration-200 hover:bg-paper/40 flex flex-col md:flex-row md:items-baseline justify-between gap-2.5 sm:gap-4">
								<div className="flex items-baseline gap-3 sm:gap-4 md:w-1/3">
									<span className="font-mono text-xs text-accent">
										{category.index}
									</span>
									<h3 className="font-display font-semibold text-lg sm:text-xl tracking-tight text-ink group-hover:text-accent transition-colors duration-200">
										{category.title}
									</h3>
								</div>
								<div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1 sm:gap-y-1.5 md:w-2/3 text-[13.5px] sm:text-[15px] text-ink-soft">
									{category.skills.map((skill, idx) => (
										<span key={skill} className="inline-flex items-center gap-2.5 sm:gap-3">
											<span>{skill}</span>
											{idx < category.skills.length - 1 && (
												<span className="opacity-30" aria-hidden="true">
													·
												</span>
											)}
										</span>
									))}
								</div>
							</div>
						</RevealOnScroll>
					))}
				</div>
			</div>
		</section>
	);
}
