import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
	weight: ["500", "600", "700"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
	weight: ["400", "500"],
});

export const metadata: Metadata = {
	title: "John Lester — Web Developer",
	description:
		"Personal portfolio for John Lester, a fourth-year Computer Science student and web developer.",
	icons: {
		icon: "/favicon.svg",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#F5F6F3" },
		{ media: "(prefers-color-scheme: dark)", color: "#101214" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
		>
			<body className="bg-bg text-ink font-sans antialiased overflow-x-hidden relative selection:bg-accent-soft selection:text-ink focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[3px]">
				{children}
			</body>
		</html>
	);
}
