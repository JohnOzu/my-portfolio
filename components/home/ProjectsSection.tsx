import { projects } from "@/data/projects";
import ProjectSchematic from "@/components/ProjectSchematic";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function ProjectsSection() {
	return (
		<section id="work" className="relative py-16 sm:py-[120px]">
			<div className="max-w-[1180px] mx-auto px-5 sm:px-8 relative z-[2]">
				<RevealOnScroll>
					<div className="flex items-baseline justify-between mb-8 sm:mb-14 flex-wrap gap-4">
						<div>
							<span className="font-mono text-xs text-accent tracking-[0.03em]">
								03 — selected work
							</span>
							<h2 className="font-display font-semibold text-[clamp(26px,4vw,40px)] mt-2 tracking-[-0.01em]">
								A few things I&apos;ve built.
							</h2>
						</div>
						<span className="font-mono text-xs text-ink-soft opacity-60">
							[ curated_work_v26 ]
						</span>
					</div>
				</RevealOnScroll>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
					{projects.map((project, pIdx) => (
						<RevealOnScroll key={project.id} delay={pIdx * 75} className="h-full">
							<div className="group border border-line-soft bg-paper rounded-xs transition-[border-color,transform] duration-200 hover:border-accent hover:-translate-y-1 overflow-hidden flex flex-col h-full">
								{/* Visual Viewport */}
								<div className="bg-bg border-b border-line p-3.5 sm:p-6 flex flex-col justify-between relative min-h-[170px] sm:min-h-[250px] overflow-hidden">
									{/* Viewport Top Ledger */}
									<div className="flex items-center justify-between gap-2 z-10 mb-2.5 sm:mb-3">
										<div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
											<span className="font-mono text-[11px] sm:text-xs text-ink-soft tracking-wider whitespace-nowrap">
												{project.code}
											</span>
											<span className="hidden sm:inline text-line-soft text-xs">/</span>
											<span className="hidden sm:inline font-mono text-[11px] text-ink-soft/70 uppercase truncate">
												{project.subBadge}
											</span>
										</div>
										{project.isLive ? (
											<span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] sm:text-[11.5px] text-accent border border-accent/20 bg-accent-soft px-2 sm:px-2.5 py-0.5 rounded-full font-medium whitespace-nowrap shrink-0">
												<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
												{project.status}
											</span>
										) : (
											<span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] sm:text-[11.5px] text-ink-soft border border-line bg-paper px-2 sm:px-2.5 py-0.5 rounded-full font-medium whitespace-nowrap shrink-0">
												{project.status}
											</span>
										)}
									</div>

									{/* Center Visual: Custom Image or Fallback Vector Schematic */}
									<div className="my-auto flex items-center justify-center relative">
										{project.image ? (
											<div className="relative w-full h-[140px] sm:h-[210px] overflow-hidden border border-line rounded-xs">
												{/* eslint-disable-next-line @next/next/no-img-element */}
												<img
													src={project.image}
													alt={project.title}
													className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
												/>
											</div>
										) : (
											<ProjectSchematic schematic={project.schematic} />
										)}
									</div>
								</div>

								{/* Content Body */}
								<div className="p-4 sm:p-7 flex flex-col justify-between flex-1 bg-paper">
									<div>
										<div className="flex items-center justify-between text-xs font-mono text-ink-soft mb-2 sm:mb-2.5">
											<span className="uppercase tracking-wider text-[11px] sm:text-xs">
												{project.category}
											</span>
											<span className="text-accent font-medium text-[11.5px] sm:text-xs">
												{project.period}
											</span>
										</div>
										<h3 className="font-display font-semibold text-xl sm:text-2xl text-ink leading-snug mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-200">
											{project.title}
										</h3>
										<p className="text-[13.5px] sm:text-[14px] text-ink-soft leading-[1.6] sm:leading-[1.65] mb-4 sm:mb-5">
											{project.description}
										</p>

										{/* Tags */}
										<div className="flex gap-1.5 sm:gap-2 flex-wrap mb-4 sm:mb-6">
											{project.tags.map((tag) => (
												<span
													key={tag}
													className="text-[11px] sm:text-[11.5px] font-mono text-ink-soft border border-line px-2 sm:px-2.5 py-0.5 rounded-full"
												>
													{tag}
												</span>
											))}
										</div>
									</div>

									<div className="pt-3 sm:pt-4 border-t border-line flex items-center justify-end gap-4 sm:gap-5 text-[12.5px] sm:text-[13px]">
										{project.githubUrl && (
											<a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="group/link inline-flex items-center gap-1.5 text-xs font-mono text-ink-soft hover:text-accent transition-colors duration-200"
											>
												<svg
													className="w-3.5 h-3.5 fill-current transition-colors duration-200"
													viewBox="0 0 24 24"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
													/>
												</svg>
												<span>GitHub</span>
												<span
													className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
													aria-hidden="true"
												>
													↗
												</span>
											</a>
										)}
										{project.liveUrl && (
											<a
												href={project.liveUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="group/link inline-flex items-center gap-1.5 text-xs font-mono text-ink-soft hover:text-accent transition-colors duration-200"
											>
												<svg
													className="w-3.5 h-3.5 stroke-current fill-none"
													viewBox="0 0 24 24"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													aria-hidden="true"
												>
													<circle cx="12" cy="12" r="10" />
													<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
													<path d="M2 12h20" />
												</svg>
												<span>Website</span>
												<span
													className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
													aria-hidden="true"
												>
													↗
												</span>
											</a>
										)}
										{!project.githubUrl && !project.liveUrl && (
											<span className="text-xs font-mono text-ink-soft/60">
												Internal System
											</span>
										)}
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
