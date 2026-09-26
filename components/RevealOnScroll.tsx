"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealOnScrollProps {
	children: ReactNode;
	className?: string;
	delay?: number;
}

export default function RevealOnScroll({
	children,
	className = "",
	delay = 0,
}: RevealOnScrollProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target);
				}
			},
			{
				threshold: 0.08,
				rootMargin: "0px 0px -30px 0px",
			}
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			style={{
				transitionDelay: isVisible ? `${delay}ms` : "0ms",
			}}
			className={`motion-safe:transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
				isVisible
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-3.5 motion-reduce:opacity-100 motion-reduce:translate-y-0"
			} ${className}`}
		>
			{children}
		</div>
	);
}
