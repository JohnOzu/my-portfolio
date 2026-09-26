"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 40);
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleScrollTo = (
		e: React.MouseEvent<HTMLAnchorElement>,
		targetId: string
	) => {
		e.preventDefault();
		if (targetId === "top") {
			window.scrollTo({ top: 0, behavior: "smooth" });
			window.history.pushState(null, "", window.location.pathname);
			return;
		}

		const element = document.getElementById(targetId);
		if (element) {
			const navHeight = 76;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.scrollY - navHeight;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
			window.history.pushState(null, "", `#${targetId}`);
		}
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top,0px)] border-b transition-[background-color,border-color] duration-300 ${
				scrolled
					? "bg-bg/88 backdrop-blur-md border-line"
					: "border-transparent"
			}`}
		>
			<nav className="max-w-[1180px] mx-auto px-8 flex items-center justify-between h-[76px]">
				<a
					className="font-display font-semibold text-[17px] tracking-[0.01em] cursor-pointer"
					href="#top"
					onClick={(e) => handleScrollTo(e, "top")}
				>
					JL<span className="text-accent">.</span>DEV
				</a>
				<div className="flex items-center gap-9">
					<a
						href="#about"
						onClick={(e) => handleScrollTo(e, "about")}
						className="group relative text-sm text-ink-soft hover:text-ink py-1 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-accent after:transition-[width] after:duration-250 hover:after:w-full cursor-pointer"
					>
						<span className="font-mono text-[11px] text-ink-soft opacity-60 mr-1">
							01
						</span>
						About
					</a>
					<a
						href="#skills"
						onClick={(e) => handleScrollTo(e, "skills")}
						className="group relative text-sm text-ink-soft hover:text-ink py-1 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-accent after:transition-[width] after:duration-250 hover:after:w-full cursor-pointer"
					>
						<span className="font-mono text-[11px] text-ink-soft opacity-60 mr-1">
							02
						</span>
						Skills
					</a>
					<a
						href="#work"
						onClick={(e) => handleScrollTo(e, "work")}
						className="group relative text-sm text-ink-soft hover:text-ink py-1 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-accent after:transition-[width] after:duration-250 hover:after:w-full cursor-pointer"
					>
						<span className="font-mono text-[11px] text-ink-soft opacity-60 mr-1">
							03
						</span>
						Projects
					</a>
					<a
						href="#experience"
						onClick={(e) => handleScrollTo(e, "experience")}
						className="group relative text-sm text-ink-soft hover:text-ink py-1 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-accent after:transition-[width] after:duration-250 hover:after:w-full cursor-pointer"
					>
						<span className="font-mono text-[11px] text-ink-soft opacity-60 mr-1">
							04
						</span>
						Experience
					</a>
					<a
						href="#contact"
						onClick={(e) => handleScrollTo(e, "contact")}
						className="group relative text-sm text-ink-soft hover:text-ink py-1 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-accent after:transition-[width] after:duration-250 hover:after:w-full cursor-pointer"
					>
						<span className="font-mono text-[11px] text-ink-soft opacity-60 mr-1">
							05
						</span>
						Contact
					</a>
				</div>
			</nav>
		</header>
	);
}
