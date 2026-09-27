import { experiences } from "@/data/experience";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function ExperienceSection() {
	return (
		<section id="experience" className="relative py-16 sm:py-[120px]">
			<div className="max-w-[1180px] mx-auto px-5 sm:px-8 relative z-[2]">
				<RevealOnScroll>
					<div className="flex items-baseline justify-between mb-8 sm:mb-14 flex-wrap gap-4">
						<div>
							<span className="font-mono text-xs text-accent tracking-[0.03em]">
								04 — trajectory / experience
							</span>
							<h2 className="font-display font-semibold text-[clamp(26px,4vw,40px)] mt-2 tracking-[-0.01em]">
								Where I&apos;ve contributed &amp; built.
							</h2>
						</div>
						<span className="font-mono text-xs text-ink-soft opacity-60">
							[ timeline_log_v26 ]
						</span>
					</div>
				</RevealOnScroll>

				<div className="flex flex-col gap-4 sm:gap-6">
					{experiences.map((exp, eIdx) => (
						<RevealOnScroll key={exp.id} delay={eIdx * 80}>
							<div className="group p-5 sm:p-9 bg-paper border border-line-soft rounded-xs transition-[border-color,transform] duration-200 hover:border-accent hover:-translate-y-0.5">
								<div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
									{/* Meta Ledger: Left Column */}
									<div className="lg:col-span-4 flex flex-col gap-1.5 sm:gap-2">
										<div className="flex items-center gap-2">
											<span className="font-mono text-xs text-accent font-medium">
												{exp.code}
											</span>
											<span className="text-line-soft text-xs">/</span>
											<span className="font-mono text-xs text-ink-soft">
												{exp.location}
											</span>
										</div>
										<div className="font-mono text-xs sm:text-sm text-ink font-semibold">
											{exp.period}
										</div>
									</div>

									{/* Content Body: Right Column */}
									<div className="lg:col-span-8 flex flex-col justify-between">
										<div>
											<h3 className="font-display font-semibold text-xl sm:text-2xl text-ink leading-snug group-hover:text-accent transition-colors duration-200">
												{exp.role}
											</h3>
											<div className="font-mono text-[13px] sm:text-[13.5px] text-accent mt-1 mb-3 sm:mb-4">
												{exp.company}
											</div>
											<p className="text-[13.5px] sm:text-[14.5px] text-ink-soft leading-[1.6] sm:leading-[1.65] mb-4 sm:mb-5">
												{exp.description}
											</p>

											{/* Technical Highlights */}
											{exp.highlights && exp.highlights.length > 0 && (
												<ul className="flex flex-col gap-1.5 sm:gap-2 mb-4 sm:mb-6 border-l-2 border-line pl-3.5 sm:pl-4 text-[13px] sm:text-[13.5px] text-ink-soft">
													{exp.highlights.map((highlight, i) => (
														<li key={i} className="leading-[1.55] sm:leading-[1.6]">
															{highlight}
														</li>
													))}
												</ul>
											)}

											{/* Tech tags */}
											<div className="flex gap-1.5 sm:gap-2 flex-wrap">
												{exp.technologies.map((tech) => (
													<span
														key={tech}
														className="text-[11px] sm:text-[11.5px] font-mono text-ink-soft border border-line px-2 sm:px-2.5 py-0.5 rounded-full"
													>
														{tech}
													</span>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</RevealOnScroll>
					))}
				</div>
			</div>
		</section>
	);
}
