export interface ProjectSpec {
	label: string;
	value: string;
}

export interface ProjectCoordinates {
	left: string;
	right: string;
}

export type ProjectSchematic =
	| "facility-booking"
	| "bioacoustics"
	| "kanban-tasks"
	| "fleet-tracking"
	| "court-booking";

export interface Project {
	id: string;
	code: string;
	subBadge: string;
	status: string;
	isLive?: boolean;
	category: string;
	period: string;
	title: string;
	description: string;
	specs: ProjectSpec[];
	tags: string[];
	footerCategory: string;
	actionText?: string;
	href?: string;
	liveUrl?: string;
	githubUrl?: string;
	coordinates: ProjectCoordinates;
	schematic: ProjectSchematic;
	image?: string;
}

export const projects: Project[] = [
	{
		id: "usep-ibs",
		code: "SYS // IBS-01",
		subBadge: "Facility Booking",
		status: "In QA",
		isLive: false,
		category: "Web Application",
		period: "Academic · 2025",
		title: "USeP - Integrated Booking System (IBS)",
		description:
			"A web-based facility booking system that streamlines reservation management, real-time scheduling, and administrative operations for university facilities.",
		specs: [
			{ label: "Architecture", value: "React · Express.js REST" },
			{ label: "Database & ORM", value: "MySQL · Sequelize" },
			{ label: "Role", value: "Full-Stack Developer" },
		],
		tags: [
			"TypeScript",
			"React",
			"Tailwind CSS",
			"Express.js",
			"Sequelize",
			"MySQL",
		],
		footerCategory: "Quality Assurance",
		coordinates: {
			left: "FACILITY MGMT // USEP",
			right: "RESERVATION ENGINE",
		},
		schematic: "facility-booking",
		image: "/projects/usepIBS.png",
	},
	{
		id: "bantai-bukid",
		code: "ML // BB-02",
		subBadge: "Bioacoustics CNN",
		status: "Deployed",
		isLive: true,
		category: "Machine Learning Web App",
		period: "Coursework · 2025",
		title: "BantAI Bukid",
		description:
			"Developed and deployed a web application that integrates a machine learning model to recognize and monitor Philippine Eagle vocalizations from acoustic recordings.",
		specs: [
			{ label: "Inference Backend", value: "Python · FastAPI · CNN" },
			{ label: "Frontend", value: "React · TypeScript" },
			{ label: "Focus", value: "Spectrogram Classification" },
		],
		tags: [
			"Python",
			"FastAPI",
			"TypeScript",
			"React",
			"Tailwind CSS",
			"Deep Learning",
		],
		footerCategory: "Live Web App",
		coordinates: {
			left: "SR: 44.1 kHz · FFT: 2048",
			right: "TARGET: PITHECOPHAGA JEFFERYI",
		},
		schematic: "bioacoustics",
		image: "/projects/bantAIBukid.png",
		liveUrl: "https://huggingface.co/spaces/JohnOzu/ph-eagle-sound-detector",
		githubUrl: "https://huggingface.co/spaces/JohnOzu/ph-eagle-sound-detector/tree/main",
	},
	{
		id: "katsu",
		code: "APP // KTS-03",
		subBadge: "Task Management",
		status: "Deployed",
		isLive: true,
		category: "Productivity App",
		period: "Personal · 2025",
		title: "Katsu",
		description:
			"Developed and deployed a collaborative task management app with shared team workspaces, real-time task tracking, progress meters, and deadline monitoring.",
		specs: [
			{ label: "Framework", value: "Next.js · React" },
			{ label: "Backend & DB", value: "Supabase (PostgreSQL)" },
			{ label: "Language", value: "TypeScript" },
		],
		tags: ["TypeScript", "Next.js", "React", "Supabase", "Tailwind CSS"],
		footerCategory: "Live Web App",
		coordinates: {
			left: "WORKSPACES // REALTIME",
			right: "SYNC: SUPABASE",
		},
		schematic: "kanban-tasks",
		image: "/projects/katsu.png",
		liveUrl: "https://katsu-qa-blond.vercel.app/",
		githubUrl: "https://github.com/JohnOzu/katsu",
	},
	{
		id: "trip-ticket-system",
		code: "SYS // TTS-04",
		subBadge: "Fleet Monorepo",
		status: "In Development",
		isLive: false,
		category: "Flagship Platform",
		period: "Work · 2026",
		title: "Trip Ticket System",
		description:
			"A university vehicle booking and real-time tracking platform built during my OJT with a four-person team, engineered for campus-wide administrative deployment. Features a reactive booking dashboard, dispatch workflow, and driver telematics.",
		specs: [
			{ label: "Architecture", value: "Next.js Turborepo" },
			{ label: "Database & ORM", value: "MSSQL · Prisma" },
			{ label: "Role", value: "Full-Stack Lead" },
		],
		tags: ["Next.js", "TypeScript", "Prisma", "MSSQL", "Tailwind CSS"],
		footerCategory: "Active Development",
		coordinates: {
			left: "DEP: USeP Obrero Campus",
			right: "GPS: 07°04'N 125°36'E",
		},
		schematic: "fleet-tracking",
		image: "/projects/usepTTS.png",
	},
	{
		id: "prestige-pbs",
		code: "WEB // PBS-05",
		subBadge: "Court Booking",
		status: "QA Deployment",
		isLive: true,
		category: "Booking Platform",
		period: "Client · 2025",
		title: "Prestige Pickleball Booking System (prestige-pbs)",
		description:
			"A pickleball court reservation platform allowing players to book courts seamlessly. Developed responsive client booking interfaces and connected administrative frontend UIs with backend services.",
		specs: [
			{ label: "Framework", value: "Next.js · TypeScript" },
			{ label: "Database & ORM", value: "Prisma · Supabase" },
			{ label: "Role", value: "Frontend & Admin Integration" },
		],
		tags: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma", "Supabase"],
		footerCategory: "Staging / QA",
		coordinates: {
			left: "COURT SCHEDULER // SLOTS",
			right: "PRISMA + SUPABASE",
		},
		schematic: "court-booking",
		image: "/projects/prestigePBS.png",
		liveUrl: "https://test.abacus.ph/",
	},
];
