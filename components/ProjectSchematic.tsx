import { ProjectSchematic as SchematicType } from "@/data/projects";

interface ProjectSchematicProps {
	schematic: SchematicType;
}

export default function ProjectSchematic({ schematic }: ProjectSchematicProps) {
	switch (schematic) {
		case "facility-booking":
			return (
				<svg
					viewBox="0 0 380 180"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-full max-w-[340px] h-auto drop-shadow-sm"
					aria-hidden="true"
				>
					{/* Outer Frame */}
					<rect
						x="10"
						y="10"
						width="360"
						height="160"
						rx="2"
						className="fill-paper stroke-line"
						strokeWidth="1.2"
					/>
					{/* Header bar */}
					<line
						x1="10"
						y1="40"
						x2="370"
						y2="40"
						className="stroke-line"
						strokeWidth="1"
					/>
					<circle cx="26" cy="25" r="3" className="fill-line" />
					<circle cx="38" cy="25" r="3" className="fill-line" />
					<circle cx="50" cy="25" r="3" className="fill-line" />
					<line
						x1="75"
						y1="25"
						x2="160"
						y2="25"
						className="stroke-line"
						strokeWidth="1.4"
					/>

					{/* Time column dividers */}
					<line
						x1="100"
						y1="40"
						x2="100"
						y2="170"
						className="stroke-line-soft"
						strokeWidth="0.8"
					/>
					<line
						x1="190"
						y1="40"
						x2="190"
						y2="170"
						className="stroke-line-soft"
						strokeWidth="0.8"
					/>
					<line
						x1="280"
						y1="40"
						x2="280"
						y2="170"
						className="stroke-line-soft"
						strokeWidth="0.8"
					/>

					{/* Venue Row 1 */}
					<rect
						x="20"
						y="52"
						width="65"
						height="28"
						rx="1.5"
						className="fill-bg stroke-line"
						strokeWidth="0.8"
					/>
					<line
						x1="28"
						y1="66"
						x2="70"
						y2="66"
						className="stroke-ink"
						strokeWidth="1.4"
					/>

					{/* Reserved block row 1 */}
					<rect
						x="110"
						y="52"
						width="155"
						height="28"
						rx="1.5"
						className="fill-accent-soft stroke-accent"
						strokeWidth="1.2"
					/>
					<line
						x1="122"
						y1="66"
						x2="220"
						y2="66"
						className="stroke-accent"
						strokeWidth="1.4"
					/>

					{/* Venue Row 2 */}
					<rect
						x="20"
						y="90"
						width="65"
						height="28"
						rx="1.5"
						className="fill-bg stroke-line"
						strokeWidth="0.8"
					/>
					<line
						x1="28"
						y1="104"
						x2="65"
						y2="104"
						className="stroke-ink"
						strokeWidth="1.4"
					/>

					{/* Reserved block row 2 */}
					<rect
						x="200"
						y="90"
						width="155"
						height="28"
						rx="1.5"
						className="fill-paper stroke-accent"
						strokeWidth="1.2"
						strokeDasharray="4 2"
					/>
					<line
						x1="212"
						y1="104"
						x2="295"
						y2="104"
						className="stroke-accent"
						strokeWidth="1.4"
					/>

					{/* Venue Row 3 */}
					<rect
						x="20"
						y="128"
						width="65"
						height="28"
						rx="1.5"
						className="fill-bg stroke-line"
						strokeWidth="0.8"
					/>
					<line
						x1="28"
						y1="142"
						x2="72"
						y2="142"
						className="stroke-ink"
						strokeWidth="1.4"
					/>

					{/* Reserved block row 3 */}
					<rect
						x="110"
						y="128"
						width="70"
						height="28"
						rx="1.5"
						className="fill-accent-soft stroke-accent"
						strokeWidth="1.2"
					/>
					<line
						x1="120"
						y1="142"
						x2="165"
						y2="142"
						className="stroke-accent"
						strokeWidth="1.4"
					/>
				</svg>
			);

		case "bioacoustics":
			return (
				<svg
					viewBox="0 0 380 160"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-full max-w-[320px] h-auto drop-shadow-sm"
					aria-hidden="true"
				>
					<rect
						x="10"
						y="10"
						width="360"
						height="140"
						rx="2"
						className="fill-paper stroke-line"
						strokeWidth="1"
					/>
					<g className="opacity-75">
						{[
							{ x: 30, h1: 30, h2: 60 },
							{ x: 45, h1: 45, h2: 75 },
							{ x: 60, h1: 25, h2: 50 },
							{ x: 75, h1: 55, h2: 95 },
							{ x: 90, h1: 40, h2: 70 },
							{ x: 105, h1: 65, h2: 110 },
							{ x: 120, h1: 85, h2: 125 },
							{ x: 135, h1: 70, h2: 105 },
							{ x: 150, h1: 45, h2: 80 },
							{ x: 165, h1: 90, h2: 130 },
							{ x: 180, h1: 80, h2: 115 },
							{ x: 195, h1: 60, h2: 90 },
							{ x: 210, h1: 40, h2: 70 },
							{ x: 225, h1: 75, h2: 105 },
							{ x: 240, h1: 95, h2: 135 },
							{ x: 255, h1: 70, h2: 100 },
							{ x: 270, h1: 50, h2: 80 },
							{ x: 285, h1: 35, h2: 60 },
							{ x: 300, h1: 55, h2: 85 },
							{ x: 315, h1: 40, h2: 65 },
							{ x: 330, h1: 25, h2: 45 },
						].map((bar, i) => (
							<line
								key={i}
								x1={bar.x}
								y1={140 - bar.h1}
								x2={bar.x}
								y2={140 - bar.h2}
								className="stroke-line"
								strokeWidth="2.5"
							/>
						))}
					</g>
					<rect
						x="100"
						y="24"
						width="95"
						height="112"
						rx="1.5"
						className="stroke-accent fill-accent-soft/40"
						strokeWidth="1.5"
						strokeDasharray="4 2"
					/>
					<text
						x="105"
						y="40"
						className="fill-accent font-mono text-[9px] font-semibold tracking-wider"
					>
						CALL DETECTED: 94.2%
					</text>
					<path
						d="M 20 80 Q 50 80, 70 65 T 110 50 T 130 95 T 150 40 T 170 110 T 190 70 T 230 65 T 260 90 T 300 80 T 360 80"
						className="stroke-ink transition-colors duration-200 group-hover:stroke-accent"
						strokeWidth="1.6"
					/>
					<circle
						cx="150"
						cy="40"
						r="3.5"
						className="fill-paper stroke-accent"
						strokeWidth="2"
					/>
				</svg>
			);

		case "kanban-tasks":
			return (
				<svg
					viewBox="0 0 380 180"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-full max-w-[340px] h-auto drop-shadow-sm"
					aria-hidden="true"
				>
					{/* Outer App Frame */}
					<rect
						x="10"
						y="10"
						width="360"
						height="160"
						rx="2"
						className="fill-paper stroke-line"
						strokeWidth="1.2"
					/>
					<line
						x1="10"
						y1="38"
						x2="370"
						y2="38"
						className="stroke-line"
						strokeWidth="1"
					/>
					<circle cx="26" cy="24" r="3" className="fill-line" />
					<circle cx="38" cy="24" r="3" className="fill-line" />
					<circle cx="50" cy="24" r="3" className="fill-line" />
					<line
						x1="75"
						y1="24"
						x2="150"
						y2="24"
						className="stroke-line"
						strokeWidth="1.4"
					/>

					{/* Column 1: Backlog / To Do */}
					<rect
						x="25"
						y="50"
						width="95"
						height="105"
						rx="1.5"
						className="fill-bg stroke-line"
						strokeWidth="0.8"
					/>
					<line
						x1="35"
						y1="62"
						x2="75"
						y2="62"
						className="stroke-ink"
						strokeWidth="1.4"
					/>
					{/* Card in Col 1 */}
					<rect
						x="33"
						y="74"
						width="79"
						height="32"
						rx="1"
						className="fill-paper stroke-line"
						strokeWidth="0.8"
					/>
					<line
						x1="41"
						y1="86"
						x2="85"
						y2="86"
						className="stroke-ink-soft"
						strokeWidth="1.2"
					/>
					<line
						x1="41"
						y1="94"
						x2="65"
						y2="94"
						className="stroke-line"
						strokeWidth="1"
					/>

					{/* Column 2: In Progress */}
					<rect
						x="142"
						y="50"
						width="95"
						height="105"
						rx="1.5"
						className="fill-bg stroke-accent/20"
						strokeWidth="0.8"
					/>
					<line
						x1="152"
						y1="62"
						x2="205"
						y2="62"
						className="stroke-accent"
						strokeWidth="1.4"
					/>
					{/* Active Card in Col 2 */}
					<rect
						x="150"
						y="74"
						width="79"
						height="42"
						rx="1"
						className="fill-paper stroke-accent"
						strokeWidth="1.2"
					/>
					<line
						x1="158"
						y1="86"
						x2="210"
						y2="86"
						className="stroke-ink"
						strokeWidth="1.4"
					/>
					<line
						x1="158"
						y1="96"
						x2="195"
						y2="96"
						className="stroke-accent"
						strokeWidth="1.2"
					/>
					<circle
						cx="214"
						cy="104"
						r="4"
						className="fill-accent stroke-paper"
						strokeWidth="1"
					/>

					{/* Column 3: Done */}
					<rect
						x="260"
						y="50"
						width="95"
						height="105"
						rx="1.5"
						className="fill-bg stroke-line"
						strokeWidth="0.8"
					/>
					<line
						x1="270"
						y1="62"
						x2="310"
						y2="62"
						className="stroke-ink"
						strokeWidth="1.4"
					/>
					{/* Completed Card */}
					<rect
						x="268"
						y="74"
						width="79"
						height="32"
						rx="1"
						className="fill-paper stroke-line"
						strokeWidth="0.8"
					/>
					<line
						x1="276"
						y1="86"
						x2="320"
						y2="86"
						className="stroke-ink-soft"
						strokeWidth="1.2"
					/>
					<line
						x1="276"
						y1="94"
						x2="300"
						y2="94"
						className="stroke-line"
						strokeWidth="1"
					/>
				</svg>
			);

		case "fleet-tracking":
			return (
				<svg
					viewBox="0 0 420 200"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-full max-w-[340px] h-auto drop-shadow-sm"
					aria-hidden="true"
				>
					<defs>
						<pattern
							id="fleet-grid-2col"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<path
								d="M 20 0 L 0 0 0 20"
								fill="none"
								className="stroke-line"
								strokeWidth="0.8"
							/>
						</pattern>
					</defs>
					<rect
						x="10"
						y="10"
						width="400"
						height="180"
						rx="2"
						fill="url(#fleet-grid-2col)"
						className="stroke-line"
						strokeWidth="1"
					/>
					<rect
						x="35"
						y="30"
						width="350"
						height="140"
						rx="2"
						className="fill-paper stroke-line"
						strokeWidth="1.2"
					/>
					<line
						x1="35"
						y1="56"
						x2="385"
						y2="56"
						className="stroke-line"
						strokeWidth="1"
					/>
					<circle cx="52" cy="43" r="3.5" className="fill-line" />
					<circle cx="64" cy="43" r="3.5" className="fill-line" />
					<circle cx="76" cy="43" r="3.5" className="fill-line" />
					<line
						x1="100"
						y1="43"
						x2="160"
						y2="43"
						className="stroke-line"
						strokeWidth="1.5"
					/>
					<path
						d="M 60 135 L 120 135 L 170 85 L 250 85 L 290 125 L 350 125"
						className="stroke-accent transition-colors duration-200"
						strokeWidth="2.2"
						strokeDasharray="4 3"
					/>
					<circle
						cx="60"
						cy="135"
						r="4.5"
						className="fill-paper stroke-ink"
						strokeWidth="2"
					/>
					<circle
						cx="170"
						cy="85"
						r="4.5"
						className="fill-paper stroke-ink"
						strokeWidth="2"
					/>
					<circle
						cx="290"
						cy="125"
						r="4.5"
						className="fill-paper stroke-accent"
						strokeWidth="2"
					/>
					<circle
						cx="350"
						cy="125"
						r="6"
						className="fill-accent stroke-paper"
						strokeWidth="2"
					/>
					<rect
						x="55"
						y="70"
						width="80"
						height="38"
						rx="1.5"
						className="fill-bg stroke-line"
						strokeWidth="1"
					/>
					<line
						x1="65"
						y1="80"
						x2="105"
						y2="80"
						className="stroke-ink"
						strokeWidth="1.6"
					/>
					<line
						x1="65"
						y1="92"
						x2="120"
						y2="92"
						className="stroke-ink-soft"
						strokeWidth="1.2"
					/>
					<rect
						x="255"
						y="100"
						width="85"
						height="42"
						rx="1.5"
						className="fill-bg stroke-accent/40"
						strokeWidth="1"
					/>
					<line
						x1="265"
						y1="112"
						x2="310"
						y2="112"
						className="stroke-accent"
						strokeWidth="1.6"
					/>
					<line
						x1="265"
						y1="126"
						x2="325"
						y2="126"
						className="stroke-ink-soft"
						strokeWidth="1.2"
					/>
				</svg>
			);

		case "court-booking":
			return (
				<svg
					viewBox="0 0 380 180"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-full max-w-[340px] h-auto drop-shadow-sm"
					aria-hidden="true"
				>
					{/* Outer Court Boundary */}
					<rect
						x="20"
						y="20"
						width="340"
						height="140"
						rx="2"
						className="fill-paper stroke-line"
						strokeWidth="1.5"
					/>

					{/* Center Net Line */}
					<line
						x1="190"
						y1="14"
						x2="190"
						y2="166"
						className="stroke-accent"
						strokeWidth="2.5"
					/>
					<circle
						cx="190"
						cy="14"
						r="2.5"
						className="fill-accent stroke-paper"
						strokeWidth="1"
					/>
					<circle
						cx="190"
						cy="166"
						r="2.5"
						className="fill-accent stroke-paper"
						strokeWidth="1"
					/>

					{/* Kitchen / Non-Volley Zone (7ft lines on each side) */}
					<line
						x1="145"
						y1="20"
						x2="145"
						y2="160"
						className="stroke-line"
						strokeWidth="1.2"
					/>
					<line
						x1="235"
						y1="20"
						x2="235"
						y2="160"
						className="stroke-line"
						strokeWidth="1.2"
					/>

					{/* Centerlines dividing left & right service courts */}
					<line
						x1="20"
						y1="90"
						x2="145"
						y2="90"
						className="stroke-line"
						strokeWidth="1.2"
					/>
					<line
						x1="235"
						y1="90"
						x2="360"
						y2="90"
						className="stroke-line"
						strokeWidth="1.2"
					/>

					{/* Active Booked Court Overlay */}
					<rect
						x="30"
						y="30"
						width="105"
						height="50"
						rx="1"
						className="fill-accent-soft/50 stroke-accent"
						strokeWidth="1"
						strokeDasharray="3 2"
					/>
					<text
						x="38"
						y="48"
						className="fill-accent font-mono text-[9px] font-semibold tracking-wider"
					>
						SLOT: 18:00 – 19:30
					</text>
					<text
						x="38"
						y="62"
						className="fill-ink font-mono text-[8px] opacity-80"
					>
						COURT A · RESERVED
					</text>
				</svg>
			);

		default:
			return null;
	}
}
