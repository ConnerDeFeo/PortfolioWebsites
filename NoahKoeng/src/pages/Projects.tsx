const projects = [
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
    accent: "from-orange-500/20 to-orange-900/5",
    featured: true,
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
    accent: "from-amber-500/20 to-amber-900/5",
    featured: true,
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
    accent: "from-orange-400/15 to-neutral-900/5",
    featured: false,
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="pt-48 pb-20 px-10 text-center">
        <p className="text-orange-500 text-base font-semibold uppercase tracking-widest mb-5">
          Engineering Portfolio
        </p>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-7">
          Projects
        </h1>
        <p className="text-neutral-400 text-xl max-w-2xl mx-auto">
          A selection of aerospace, mechanical, and software projects spanning UAV design,
          flight dynamics, and autonomous systems.
        </p>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────── */}
      <div className="max-w-screen-xl mx-auto px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
      </div>

      {/* ── Project Cards ─────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-10 py-24 space-y-10">
        {/* Featured row — first two side by side on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <div
                key={project.index}
                className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 hover:border-orange-500/50 transition-all duration-500"
              >
                {/* Large faded index number */}
                <span
                  aria-hidden
                  className="absolute -top-6 -right-4 text-[9rem] font-black text-white/[0.04] select-none leading-none pointer-events-none group-hover:text-orange-500/10 transition-colors duration-500"
                >
                  {project.index}
                </span>

                {/* Gradient overlay accent */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative p-8 flex flex-col h-full">
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span
                      className={`shrink-0 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                        project.status === "Active"
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-neutral-800 text-neutral-500 border border-neutral-700"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-1">
                    {project.title}
                  </h2>
                  <p className="text-orange-400 font-semibold text-base mb-1">{project.context}</p>
                  <p className="text-neutral-500 text-sm mb-5">{project.period}</p>

                  {/* Summary */}
                  <p className="text-neutral-300 text-base leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Bullets */}
                  <ul className="mt-auto space-y-2">
                    {project.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-neutral-400 leading-relaxed">
                        <span className="text-orange-500 mt-[3px] shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>

        {/* Non-featured row */}
        {projects
          .filter((p) => !p.featured)
          .map((project) => (
            <div
              key={project.index}
              className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 hover:border-orange-500/50 transition-all duration-500"
            >
              {/* Large faded index */}
              <span
                aria-hidden
                className="absolute -top-6 -right-4 text-[9rem] font-black text-white/[0.04] select-none leading-none pointer-events-none group-hover:text-orange-500/10 transition-colors duration-500"
              >
                {project.index}
              </span>

              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative p-8 md:flex md:gap-12 md:items-start">
                {/* Left side */}
                <div className="md:w-2/5 mb-6 md:mb-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-1">
                    {project.title}
                  </h2>
                  <p className="text-orange-400 font-semibold text-base mb-1">{project.context}</p>
                  <p className="text-neutral-500 text-sm mb-4">{project.period}</p>
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-neutral-800 text-neutral-500 border border-neutral-700">
                    {project.status}
                  </span>
                </div>

                {/* Right side */}
                <div className="md:w-3/5">
                  <p className="text-neutral-300 text-base leading-relaxed mb-6">
                    {project.summary}
                  </p>
                  <ul className="space-y-2">
                    {project.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-neutral-400 leading-relaxed">
                        <span className="text-orange-500 mt-[3px] shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Projects;