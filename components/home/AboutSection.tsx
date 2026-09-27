import RevealOnScroll from "@/components/RevealOnScroll";

export default function AboutSection() {
	return (
		<section id="about" className="relative py-16 sm:py-[120px]">
			<RevealOnScroll className="max-w-[1180px] mx-auto px-5 sm:px-8 relative z-[2]">
				<div className="flex items-baseline justify-between mb-8 sm:mb-14 flex-wrap gap-4">
					<div>
						<span className="font-mono text-xs text-accent tracking-[0.03em]">
							01 — who I am
						</span>
						<h2 className="font-display font-semibold text-[clamp(26px,4vw,40px)] mt-2 tracking-[-0.01em]">
							A developer who reads the whole stack.
						</h2>
					</div>
					<span className="font-mono text-xs text-ink-soft opacity-60">
						[ bio_profile_v26 ]
					</span>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-16 items-start">
					<div className="space-y-4 sm:space-y-5 text-[15px] sm:text-[16.5px] leading-[1.7] sm:leading-[1.75] text-ink-soft">
						<p className="text-[16px] sm:text-lg font-medium text-ink leading-relaxed">
							I&apos;m a fourth-year Computer Science student at the University of Southeastern Philippines with a genuine enthusiasm for anything tech. My core focus is full-stack web development—building clean, reliable applications across TypeScript, React, Next.js, and C#.
						</p>
						<p>
							I started studying web dev in my second year out of curiosity and quickly transitioned into shipping production systems for campus operations. I also have hands-on experience in machine and deep learning using Python and TensorFlow. Always curious, constantly tinkering.
						</p>
					</div>
					<div className="p-5 sm:p-7 bg-paper border border-line-soft rounded-xs space-y-4 sm:space-y-5">
						<div className="font-mono text-xs text-accent uppercase tracking-wider">
							Profile Coordinates
						</div>
						<div className="space-y-3.5 sm:space-y-4 text-sm">
							<div>
								<span className="font-mono text-xs text-ink-soft block mb-1">Education</span>
								<span className="font-medium text-ink">B.S. in Computer Science (4th Year)</span>
								<span className="block text-ink-soft text-xs mt-0.5">
									University of Southeastern Philippines
								</span>
							</div>
							<div className="border-t border-line-soft pt-3">
								<span className="font-mono text-xs text-ink-soft block mb-1">Current Focus</span>
								<span className="font-medium text-ink">
									Full-Stack Web Development &amp; Machine Learning
								</span>
							</div>
							<div className="border-t border-line-soft pt-3">
								<span className="font-mono text-xs text-ink-soft block mb-1">Location / Status</span>
								<span className="font-medium text-ink">Davao City, Philippines — Open to roles</span>
							</div>
						</div>
					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
}
