export interface ExperienceItem {
	id: string;
	code: string;
	role: string;
	company: string;
	period: string;
	location: string;
	description: string;
	highlights: string[];
	technologies: string[];
}

export const experiences: ExperienceItem[] = [
	{
		id: "exprezoe-it-zoelution",
		code: "EXP // 01",
		role: "Full-Stack Web Developer Intern",
		company: "Exprezoe IT Zoelution",
		period: "Oct 2025 — Jan 2026",
		location: "Davao City, Philippines",
		description:
			"Assisted in the development and maintenance of full-stack web applications utilizing C#-based frameworks, implementing new features and resolving bugs across the frontend and backend.",
		highlights: [
			"Developed enterprise UI views and reporting components utilizing Blazor and DevExpress.",
			"Engineered high-performance data access layers and SQL queries utilizing C# and Dapper over MSSQL.",
			"Diagnosed and resolved bugs across full-stack modules to ensure smooth client operations.",
		],
		technologies: ["C#", "Blazor", "DevExpress", "MSSQL", "Dapper"],
	},
	{
		id: "usep-ojt",
		code: "EXP // 02",
		role: "Full-Stack Web Developer Intern",
		company: "University of Southeastern Philippines",
		period: "July 2026",
		location: "Davao City, Philippines",
		description:
			"Spearheaded full-stack engineering for the university vehicle booking and dispatch management system with a four-person development team.",
		highlights: [
			"Designed normalized relational schemas and data access layers using Prisma and MSSQL.",
			"Built reactive booking workflows and administrative dispatch dashboards in Next.js Turborepo.",
			"Integrated driver trip logging and real-time status pipelines engineered for campus-wide rollout.",
		],
		technologies: ["Next.js", "TypeScript", "Prisma", "MSSQL", "Tailwind CSS", "Git"],
	},
];
