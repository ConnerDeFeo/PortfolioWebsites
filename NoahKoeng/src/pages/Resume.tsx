const Resume = () => {
  return (
    <div className="min-h-screen bg-neutral-950 pt-28 pb-20 px-6">
      {/* Download bar */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between">
        <p className="text-neutral-400 text-sm">Viewing resume for <span className="text-white font-semibold">Noah Koeng</span></p>
        <button
          disabled
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 text-white font-semibold text-sm opacity-60 cursor-not-allowed select-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download PDF
        </button>
      </div>

      {/* Resume paper */}
      <div className="max-w-4xl mx-auto bg-white text-neutral-900 rounded-2xl shadow-2xl shadow-black/50 px-12 py-12">

        {/* Header */}
        <div className="text-center border-b border-neutral-300 pb-6 mb-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900">Noah Koeng</h1>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3 text-sm text-neutral-600">
            <span>607-793-3640</span>
            <span className="text-neutral-300">|</span>
            <span>nfk8360@rit.edu</span>
            <span className="text-neutral-300">|</span>
            <span>linkedin.com/in/noah-koeng</span>
          </div>
        </div>

        {/* Education */}
        <Section title="Education">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
            <div>
              <p className="font-bold text-base text-neutral-900">Rochester Institute of Technology</p>
              <p className="text-sm text-neutral-700">B.S. and M.E. in Mechanical Engineering</p>
              <p className="text-sm text-neutral-500">B.S. GPA: 3.86 / 4 &nbsp;&nbsp;·&nbsp;&nbsp; M.E. GPA: 4.00 / 4</p>
            </div>
            <div className="text-sm text-neutral-500 sm:text-right shrink-0">
              <p>Aug. 2021 – May 2026</p>
              <p>Rochester, NY</p>
            </div>
          </div>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <ExperienceItem
            role="Manufacturing Process Engineering Intern"
            company="Hypertherm Associates"
            location="Lebanon, NH"
            period="May 2025 – Aug. 2025"
            bullets={[
              "Designed and fabricated custom safety covers for laser and plasma equipment, improving operator safety.",
              "Implemented a semi-automated press that reduced assembly cycle time by 48% and improved ergonomic safety.",
              "Collaborated cross-functionally to identify inefficiencies and implement process improvements in production.",
            ]}
          />
          <ExperienceItem
            role="Technical Co-Founder"
            company="EZSpike (Student Accelerator Program)"
            location="Rochester, NY"
            period="May 2024 – Aug. 2024"
            bullets={[
              "Designed and iterated a motor-driven spike wrench, improving ergonomics and efficiency for track athletes.",
              "Integrated mechanical components, motors, batteries, and circuitry to develop a rechargeable automated tool.",
              "Conducted market research, user validation, and patent development to support commercialization strategy.",
              "Presented technical and business viability to investors, athletes, and industry professionals.",
            ]}
          />
          <ExperienceItem
            role="Manufacturing Engineering Co-op"
            company="Corning Inc."
            location="Fairport, NY"
            period="May 2023 – Jan. 2024"
            bullets={[
              "Assembled, tested, and calibrated precision metrology systems operating at sub-micron tolerances.",
              "Built and aligned interferometer equipment for high-accuracy measurement of silicon wafers and components.",
              "Supported automation initiatives by integrating robotic measurement systems and improving enclosure reliability.",
            ]}
          />
          <ExperienceItem
            role="Mechanical Engineering Intern"
            company="IBC Engineering"
            location="Rochester, NY"
            period="May 2022 – Aug. 2022"
            bullets={[
              "Led design efforts for a multi-million-dollar HVAC renovation for Wayne Central School District.",
              "Conducted field assessments to evaluate existing systems and support retrofit integration.",
              "Performed load calculations and system analysis to validate HVAC design performance.",
            ]}
          />
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <ExperienceItem
            role="Sea-Ready VTOL Aircraft for US Air Force"
            company="Independent Study"
            location=""
            period="Aug. 2025 – Present"
            bullets={[
              "Led Structures Team in the design and fabrication of a fixed-wing VTOL UAV fuselage for aquatic operations.",
              "Designed hull geometry for flotation, aerodynamic efficiency, and structural integrity in air and water environments.",
              "Evaluated material properties and manufacturing methods to optimize weight, corrosion resistance, and durability.",
              "Developed motor configuration and hull architecture selected as the program's baseline platform configuration.",
            ]}
          />
          <ExperienceItem
            role="UAV with Onboard Vehicle Classification Module"
            company="RIT Senior Design Project"
            location=""
            period="Aug. 2025 – Present"
            bullets={[
              "Led team coordination and task execution while driving CAD development of critical airframe components.",
              "Integrated and tuned flight controller hardware to achieve stable, repeatable flight performance.",
              "Deployed and validated onboard AI model for real-time vehicle classification during flight testing.",
              "Earned FAA Part 107 certification to legally conduct flight testing and operational validation.",
            ]}
          />
          <ExperienceItem
            role="6-DOF Aircraft Modeling & Stability Analysis"
            company="Flight Dynamics"
            location=""
            period="Apr. 2025"
            bullets={[
              "Developed nonlinear 6-DOF aircraft model in MATLAB/Simulink to simulate full aircraft motion.",
              "Linearized system to generate state-space models for stability and control analysis.",
              "Evaluated aircraft response to control inputs and compared linear vs nonlinear dynamic behavior.",
            ]}
          />
        </Section>

        {/* Leadership */}
        <Section title="Leadership & Activities">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
            <div>
              <p className="font-bold text-base text-neutral-900">RIT's NCAA Track &amp; Field Team</p>
              <p className="text-sm text-neutral-700">Team Captain (3 Years)</p>
            </div>
            <div className="text-sm text-neutral-500 sm:text-right shrink-0">
              <p>2021 – Present</p>
              <p>Rochester, NY</p>
            </div>
          </div>
        </Section>

        {/* Skills */}
        <Section title="Core Competencies">
          <div className="space-y-2 text-sm text-neutral-700">
            <p>
              <span className="font-semibold text-neutral-900">Technical Skills: </span>
              SolidWorks, PTC Creo, Autodesk, GD&amp;T, MATLAB, Simulink, LabVIEW, Python, ANSYS,
              Woodworking, Welding, Machining, Additive Manufacturing, Design for Manufacturing, Lean Six Sigma (Yellow Belt)
            </p>
            <p>
              <span className="font-semibold text-neutral-900">Coursework: </span>
              Flight &amp; Vehicle Dynamics, Orbital Mechanics, Classical Controls, Systems Modeling, Advanced CAD
            </p>
          </div>
        </Section>

      </div>
    </div>
  );
};

/* ── Sub-components ─────────────────────────────────────────────── */

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-7">
    <h2 className="text-base font-extrabold uppercase tracking-widest text-neutral-900 border-b-2 border-neutral-900 pb-1 mb-4">
      {title}
    </h2>
    <div className="space-y-5">{children}</div>
  </div>
);

const ExperienceItem = ({
  role,
  company,
  location,
  period,
  bullets,
}: {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}) => (
  <div>
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5">
      <div>
        <p className="font-bold text-base text-neutral-900 leading-tight">{role}</p>
        <p className="text-sm font-semibold text-orange-600">{company}</p>
      </div>
      <div className="text-sm text-neutral-500 sm:text-right shrink-0">
        <p>{period}</p>
        {location && <p>{location}</p>}
      </div>
    </div>
    <ul className="mt-2 space-y-1">
      {bullets.map((b, i) => (
        <li key={i} className="flex gap-2 text-sm text-neutral-700 leading-relaxed">
          <span className="text-orange-500 mt-[3px] shrink-0">•</span>
          {b}
        </li>
      ))}
    </ul>
  </div>
);

export default Resume;