import RevealOnScroll from "@/components/RevealOnScroll";

export default function ContactSection() {
	return (
		<section id="contact" className="relative py-16 sm:py-[120px]">
			<RevealOnScroll className="max-w-[1180px] mx-auto px-5 sm:px-8 relative z-[2] flex justify-between items-end flex-wrap gap-8 sm:gap-10">
				<div>
					<span className="font-mono text-xs text-accent tracking-[0.03em] block mb-2">
						05 — contact
					</span>
					<h2 className="font-display font-semibold text-[clamp(28px,7vw,56px)] max-w-[14ch] tracking-[-0.01em]">
						Let&apos;s build something.
					</h2>
				</div>
				<div className="flex flex-col gap-3.5 sm:gap-4 font-mono text-[13px] sm:text-sm">
					<a
						className="group inline-flex items-center gap-2.5 border-b border-line pb-0.5 transition-colors duration-200 w-fit hover:text-accent hover:border-accent"
						href="mailto:jlc628549@gmail.com"
					>
						<svg
							className="w-4 h-4 text-ink-soft group-hover:text-accent transition-colors duration-200"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.75"
							strokeLinecap="round"
							strokeLinejoin="round"
							aria-hidden="true"
						>
							<rect width="20" height="16" x="2" y="4" rx="2" />
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
						</svg>
						<span>jlc628549@gmail.com</span>
					</a>
					<a
						className="group inline-flex items-center gap-2.5 border-b border-line pb-0.5 transition-colors duration-200 w-fit hover:text-accent hover:border-accent"
						href="https://github.com/JohnOzu"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							className="w-4 h-4 fill-ink-soft group-hover:fill-accent transition-colors duration-200"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							/>
						</svg>
						<span>github.com/JohnOzu</span>
					</a>
					<a
						className="group inline-flex items-center gap-2.5 border-b border-line pb-0.5 transition-colors duration-200 w-fit hover:text-accent hover:border-accent"
						href="https://www.linkedin.com/in/john-lester-capote-95714825a/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							className="w-4 h-4 fill-ink-soft group-hover:fill-accent transition-colors duration-200"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
						</svg>
						<span>linkedin.com/johnlestercapote</span>
					</a>
					<a
						className="group inline-flex items-center gap-2.5 border-b border-line pb-0.5 transition-colors duration-200 w-fit hover:text-accent hover:border-accent"
						href="https://www.facebook.com/Fumei02"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							className="w-4 h-4 fill-ink-soft group-hover:fill-accent transition-colors duration-200"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
						</svg>
						<span>facebook.com/Fumei02</span>
					</a>
				</div>
			</RevealOnScroll>
		</section>
	);
}
