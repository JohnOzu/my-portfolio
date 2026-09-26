export interface SkillCategory {
	index: string;
	title: string;
	skills: string[];
}

export const skillCategories: SkillCategory[] = [
	{
		index: "01",
		title: "Languages",
		skills: ["Java", "JavaScript", "TypeScript", "C#", "Python"],
	},
	{
		index: "02",
		title: "Frameworks",
		skills: [
			"JavaFX",
			"React",
			"Next.js",
			"Express.js",
			"ASP.NET Core",
			"Blazor",
			"Flask",
			"Tailwind CSS",
		],
	},
	{
		index: "03",
		title: "Databases",
		skills: ["PostgreSQL", "MySQL", "MSSQL", "Supabase"],
	},
	{
		index: "04",
		title: "ORMs & Modeling",
		skills: ["Prisma", "Drizzle", "Dapper", "Sequelize"],
	},
	{
		index: "05",
		title: "Cloud & DevOps",
		skills: [
			"Git & GitHub",
			"GitHub Actions",
			"Docker",
			"AWS (EC2, Lambda)",
			"Vercel",
			"Linux",
			"PM2",
		],
	},
];
