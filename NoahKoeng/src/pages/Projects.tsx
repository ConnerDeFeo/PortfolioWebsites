import { useState } from "react";
import Dagger1 from '/Dagger1.png';
import Dagger2 from '/Dagger2.png';
import Dagger3 from '/Dagger3.png';
import Drone1 from '/Drone1.jpeg';
import DroneVideo from '/DroneVideo.mov';
import Gears from '/Gears.jpg';
import { neutral, orange } from "../constants/colors";

type Project = {
  index: string;
  title: string;
  context: string;
  period: string;
  status: string;
  tags: string[];
  summary: string;
  bullets: string[];
  featured: boolean;
  coverImage: string;
  images: string[];
  videos: string[];
};

const projects: Project[] = [
  {
    index: "01",
    title: "Sea-Ready VTOL Aircraft",
    context: "Independent Study · US Air Force",
    period: "Aug. 2025 – Present",
    status: "Active",
    tags: ["Structures", "UAV", "Fabrication", "Aerospace"],
    summary:
      "Leading the Structures Team in designing and fabricating a fixed-wing VTOL UAV fuselage engineered for aquatic operations — balancing flotation, aerodynamics, and corrosion resistance in a single hull architecture selected as the program's baseline platform.",
    bullets: [
      "Designed hull geometry optimizing flotation, aerodynamic efficiency, and structural integrity simultaneously.",
      "Evaluated material properties and manufacturing methods to minimize weight while maximizing corrosion resistance.",
      "Developed motor configuration and hull architecture selected as the program's baseline platform configuration.",
    ],
    featured: true,
    coverImage: Dagger1,
    images: [Dagger1, Dagger3, Dagger2],
    videos: [],
  },
  {
    index: "02",
    title: "UAV with Onboard AI Classification",
    context: "RIT Senior Design Project",
    period: "Aug. 2025 – Present",
    status: "Active",
    tags: ["AI / ML", "Flight Systems", "CAD", "FAA Part 107"],
    summary:
      "Building an autonomous UAV that classifies ground vehicles in real time using an onboard neural network — responsible for airframe CAD, flight controller tuning, and FAA-certified flight testing.",
    bullets: [
      "Led team coordination and CAD development of critical airframe structural components.",
      "Integrated and tuned flight controller hardware to achieve stable, repeatable flight performance.",
      "Deployed and validated onboard AI model for real-time vehicle classification during flight testing.",
      "Earned FAA Part 107 certification to legally conduct flight testing and operational validation.",
    ],
    featured: true,
    coverImage: Drone1,
    images: [Drone1],
    videos: [DroneVideo],
  },
  {
    index: "03",
    title: "6-DOF Aircraft Modeling & Stability Analysis",
    context: "Flight Dynamics Course",
    period: "Apr. 2025",
    status: "Completed",
    tags: ["MATLAB", "Simulink", "Controls", "Dynamics"],
    summary:
      "Developed a full nonlinear 6-degrees-of-freedom aircraft model in MATLAB/Simulink, linearized it into state-space form, and analyzed stability and control response across linear and nonlinear regimes.",
    bullets: [
      "Developed nonlinear 6-DOF aircraft model in MATLAB/Simulink to simulate complete aircraft motion.",
      "Linearized system to generate state-space models for stability and control analysis.",
      "Evaluated aircraft response to control inputs and compared linear vs. nonlinear dynamic behavior.",
    ],
    featured: false,
    coverImage: Gears,
    images: [],
    videos: [],
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className={`min-h-screen ${neutral.pageBg} ${neutral.pageText} overflow-x-hidden`}>
      {/* ── Modal ─────────────────────────────────────────────────────── */}
      {selected && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${neutral.overlayDark} backdrop-blur-sm`}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-neutral-900 border border-neutral-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Body */}
            <div className="p-6 md:p-8">
              {/* Header row */}
              <div className="flex items-start justify-between gap-4 mb-1">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-black tracking-widest ${orange.textSecondary} ${orange.bgSoft} border ${orange.borderSoft} px-2 py-1 rounded-lg`}>
                    {selected.index}
                  </span>
                  <span
                    className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                      selected.status === "Active"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-neutral-800 text-neutral-500 border border-neutral-700"
                    }`}
                  >
                    {selected.status}
                  </span>
                </div>
                {/* Close button */}
                <button
                  onClick={() => setSelected(null)}
                  className={`w-8 h-8 flex items-center justify-center rounded-full bg-neutral-800 text-neutral-400 ${neutral.hoverWhiteText} hover:bg-neutral-700 transition-colors shrink-0`}
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <h2 className={`text-2xl md:text-3xl font-bold ${neutral.whiteText} leading-tight mb-1 mt-4`}>
                {selected.title}
              </h2>
              <p className={`${orange.textSecondary} font-semibold text-sm mb-1`}>{selected.context}</p>
              <p className="text-neutral-500 text-xs mb-5">{selected.period}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${orange.bgSoft} ${orange.textSecondary} border ${orange.borderSoft}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-neutral-800 mb-6" />

              {/* Summary */}
              <p className="text-neutral-300 text-base leading-relaxed mb-6">
                {selected.summary}
              </p>

              {/* Bullets */}
              <ul className="space-y-3">
                {selected.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm text-neutral-400 leading-relaxed">
                    <span className={`${orange.textPrimary} mt-[3px] shrink-0`}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Videos */}
              {selected.videos.length > 0 && (
                <div className="flex flex-col gap-3 mt-6">
                  {selected.videos.map((src, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden bg-neutral-800">
                      <video
                        src={src}
                        controls
                        className="w-full max-h-[75vh]"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Images */}
              {selected.images.length > 0 && (
                <div className="flex flex-col gap-3 mt-6">
                  {selected.images.map((src, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden bg-neutral-800">
                      <img
                        src={src}
                        alt={`${selected.title} image ${i + 1}`}
                        className="w-full max-h-[75vh] object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="pt-48 pb-20 px-4 md:px-10 text-center">
        <p className={`${orange.textPrimary} text-sm md:text-base font-semibold uppercase tracking-widest mb-5`}>
          Engineering Portfolio
        </p>
        <h1 className={`text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight ${neutral.whiteText} mb-7`}>
          Projects
        </h1>
        <p className="text-neutral-400 text-base md:text-xl max-w-2xl mx-auto">
          A selection of aerospace, mechanical, and software projects spanning UAV design,
          flight dynamics, and autonomous systems.
        </p>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────── */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-10">
        <div className={`h-px bg-gradient-to-r from-transparent ${orange.gradientViaSoft} to-transparent`} />
      </div>

      {/* ── Project Cards ─────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.index}
              onClick={() => setSelected(project)}
              className={`group relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 ${orange.hoverBorder} transition-all duration-500 flex flex-col cursor-pointer`}
            >
              {/* Cover image */}
              <div className="relative h-48 overflow-hidden bg-neutral-800">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                {/* Index badge */}
                <span className={`absolute top-3 left-3 text-xs font-black tracking-widest ${orange.textSecondary} bg-neutral-900/80 px-2 py-1 rounded-lg`}>
                  {project.index}
                </span>
                {/* Status badge */}
                <span
                  className={`absolute top-3 right-3 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                    project.status === "Active"
                      ? "bg-green-800/80 text-green-400 border border-green-500/30"
                      : "bg-neutral-800/90 text-neutral-500 border border-neutral-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className={`text-xl font-bold ${neutral.whiteText} leading-tight mb-1`}>
                  {project.title}
                </h2>
                <p className={`${orange.textSecondary} font-semibold text-sm mb-1`}>{project.context}</p>
                <p className="text-neutral-500 text-xs mb-4">{project.period}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${orange.bgSoft} ${orange.textSecondary} border ${orange.borderSoft}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;