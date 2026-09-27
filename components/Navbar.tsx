"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 40);
		};

		const handleResize = () => {
			if (window.innerWidth >= 640) {
				setIsMobileMenuOpen(false);
			}
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handleScrollTo = (
		e: React.MouseEvent<HTMLAnchorElement>,
		targetId: string
	) => {
		e.preventDefault();
		setIsMobileMenuOpen(false);
		if (targetId === "top") {
			window.scrollTo({ top: 0, behavior: "smooth" });
			window.history.pushState(null, "", window.location.pathname);
			return;
		}

		const element = document.getElementById(targetId);
		if (element) {
			const navHeight = 72;
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
				scrolled || isMobileMenuOpen
					? "bg-bg/92 backdrop-blur-md border-line"
					: "border-transparent"
			}`}
		>
			<nav className="max-w-[1180px] mx-auto px-5 sm:px-8 flex items-center justify-between h-[64px] sm:h-[76px]">
				<a
					className="flex items-center cursor-pointer group py-1"
					href="#top"
					onClick={(e) => handleScrollTo(e, "top")}
					aria-label="Home"
				>
					<Logo />
				</a>

				<div className="flex items-center gap-3 sm:gap-8">
					{/* Desktop Navigation Links */}
					<div className="hidden sm:flex items-center gap-6 sm:gap-8">
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

					<div className="hidden sm:block h-4 w-px bg-line" aria-hidden="true" />

					{/* Resume Link */}
					<a
						href="/resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="font-mono text-[11.5px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xs border border-line text-ink hover:border-accent hover:text-accent transition-colors duration-200 inline-flex items-center gap-1.5"
					>
						<span>Resume</span>
						<span className="text-[10px] opacity-70" aria-hidden="true">
							↗
						</span>
					</a>

					{/* Mobile Hamburger Toggle Button */}
					<button
						type="button"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="sm:hidden p-1.5 text-ink hover:text-accent transition-colors flex flex-col justify-center items-center gap-[5px] w-8 h-8 rounded-xs border border-line"
						aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
						aria-expanded={isMobileMenuOpen}
					>
						<span
							className={`w-4 h-[1.5px] bg-current transition-all duration-200 ${
								isMobileMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""
							}`}
						/>
						<span
							className={`w-4 h-[1.5px] bg-current transition-all duration-200 ${
								isMobileMenuOpen ? "opacity-0" : ""
							}`}
						/>
						<span
							className={`w-4 h-[1.5px] bg-current transition-all duration-200 ${
								isMobileMenuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
							}`}
						/>
					</button>
				</div>
			</nav>

			{/* Mobile Navigation Dropdown */}
			<div
				className={`sm:hidden border-t border-line bg-bg/95 backdrop-blur-md overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
					isMobileMenuOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
				}`}
			>
				<div className="px-5 py-4 flex flex-col gap-3 font-sans">
					<a
						href="#about"
						onClick={(e) => handleScrollTo(e, "about")}
						className="flex items-center gap-3 text-sm font-medium text-ink hover:text-accent py-1.5 transition-colors"
					>
						<span className="font-mono text-xs text-accent">01</span>
						About
					</a>
					<a
						href="#skills"
						onClick={(e) => handleScrollTo(e, "skills")}
						className="flex items-center gap-3 text-sm font-medium text-ink hover:text-accent py-1.5 transition-colors"
					>
						<span className="font-mono text-xs text-accent">02</span>
						Skills
					</a>
					<a
						href="#work"
						onClick={(e) => handleScrollTo(e, "work")}
						className="flex items-center gap-3 text-sm font-medium text-ink hover:text-accent py-1.5 transition-colors"
					>
						<span className="font-mono text-xs text-accent">03</span>
						Projects
					</a>
					<a
						href="#experience"
						onClick={(e) => handleScrollTo(e, "experience")}
						className="flex items-center gap-3 text-sm font-medium text-ink hover:text-accent py-1.5 transition-colors"
					>
						<span className="font-mono text-xs text-accent">04</span>
						Experience
					</a>
					<a
						href="#contact"
						onClick={(e) => handleScrollTo(e, "contact")}
						className="flex items-center gap-3 text-sm font-medium text-ink hover:text-accent py-1.5 transition-colors"
					>
						<span className="font-mono text-xs text-accent">05</span>
						Contact
					</a>
				</div>
			</div>
		</header>
	);
}
