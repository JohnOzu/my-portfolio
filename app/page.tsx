import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import SkillsSection from "@/components/home/SkillsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";
import SectionDivider from "@/components/home/SectionDivider";

export default function Home() {
	return (
		<>
			{/* FULL-PAGE CARTESIAN DRAFTING GRID */}
			<div
				className="fixed inset-0 pointer-events-none z-0 opacity-60 bg-[linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px),linear-gradient(to_right,var(--line-soft)_1px,transparent_1px),linear-gradient(to_bottom,var(--line-soft)_1px,transparent_1px)] bg-[size:180px_180px,180px_180px,45px_45px,45px_45px]"
				aria-hidden="true"
			/>
			<Navbar />

			<main id="top">
				<HeroSection />

				{/* CONTENT CANVAS */}
				<div className="relative z-[2]">
					{/* PROGRESSIVE FROSTED BLUR TRANSITION (RAMPS FROM CRISP TO SOFT BLUR OVER 260PX) */}
					<div
						className="absolute inset-0 pointer-events-none -z-10 backdrop-blur-[3px] bg-bg/45 [mask-image:linear-gradient(to_bottom,transparent_0px,black_260px,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0px,black_260px,black_100%)]"
						aria-hidden="true"
					/>

					<SectionDivider />
					<AboutSection />
					<SectionDivider />
					<SkillsSection />
					<SectionDivider />
					<ProjectsSection />
					<SectionDivider />
					<ExperienceSection />
					<SectionDivider />
					<ContactSection />
					<SectionDivider />
					<Footer />
				</div>
			</main>
		</>
	);
}
