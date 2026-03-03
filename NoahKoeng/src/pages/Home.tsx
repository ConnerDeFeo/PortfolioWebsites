const experiences = [
  {
    role: "Manufacturing Process Engineering Intern",
    company: "Hypertherm Associates",
    location: "Lebanon, NH",
    period: "May 2025 – Aug. 2025",
    summary:
      "Designed safety covers and implemented a semi-automated press that cut assembly cycle time by 48% at a leading cutting-technology manufacturer.",
  },
  {
    role: "Technical Co-Founder",
    company: "EZSpike",
    location: "Rochester, NY",
    period: "May 2024 – Aug. 2024",
    tag: "Student Accelerator Program",
    summary:
      "Built and commercialized a rechargeable motor-driven spike wrench through the RIT Student Accelerator, from prototype to investor pitch.",
  },
  {
    role: "Manufacturing Engineering Co-op",
    company: "Corning Inc.",
    location: "Fairport, NY",
    period: "May 2023 – Jan. 2024",
    summary:
      "Assembled and calibrated sub-micron precision metrology systems and supported robotic automation integration for silicon wafer measurement.",
  },
  {
    role: "Mechanical Engineering Intern",
    company: "IBC Engineering",
    location: "Rochester, NY",
    period: "May 2022 – Aug. 2022",
    summary:
      "Led HVAC design for a multi-million-dollar school district renovation, performing load calculations and field assessments to validate system performance.",
  }
];

const Home = () => {

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="pt-48 pb-28 px-4 md:px-10 text-center">
        <p className="text-orange-500 text-sm md:text-base font-semibold uppercase tracking-widest mb-5">
          Mechanical Engineer
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight text-white mb-7">
          Noah Koeng
        </h1>
        <p className="text-neutral-400 text-base md:text-xl max-w-2xl mx-auto mb-12">
          B.S. &amp; M.E. Candidate at Rochester Institute of Technology · GPA 3.86 / 4.00
        </p>
        <div className="flex flex-wrap justify-center gap-5 text-base text-neutral-400">
          <a href="tel:6077933640" className="hover:text-orange-400 transition-colors">
            607-793-3640
          </a>
          <span className="text-neutral-700">|</span>
          <a href="mailto:nfk8360@rit.edu" className="hover:text-orange-400 transition-colors">
            nfk8360@rit.edu
          </a>
          <span className="text-neutral-700">|</span>
          <a
            href="https://linkedin.com/in/noah-koeng"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            linkedin.com/in/noah-koeng
          </a>
        </div>
      </section>

      {/* ── Experience Timeline ───────────────────────────────────────── */}
      <section id="about" className="max-w-screen-xl mx-auto px-4 md:px-10 pb-36">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-20">
          Work <span className="text-orange-500">Experience</span>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-orange-800 md:-translate-x-px" />

          <div className="flex flex-col gap-16">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start md:items-center gap-6 md:gap-0`}
                >
                  {/* Dot */}
                  <div className="absolute left-5 md:left-1/2 top-3 md:top-auto w-5 h-5 rounded-full bg-orange-500 border-2 border-neutral-950 -translate-x-[10px] z-10 shadow-[0_0_16px_4px_rgba(249,115,22,0.55)]" />

                  {/* Content */}
                  <div
                    className={`ml-10 md:ml-0 w-[calc(100%-2.5rem)] md:w-[calc(50%-3rem)] ${
                      isLeft ? "md:mr-auto md:pr-14 md:text-right" : "md:ml-auto md:pl-14 md:text-left"
                    }`}
                  >
                    <h3 className="text-lg md:text-2xl font-bold text-white leading-snug">
                      {exp.role}
                    </h3>
                    <p className="text-base md:text-lg text-orange-400 font-semibold mt-1">
                      {exp.company}
                      {exp.tag && (
                        <span className="text-neutral-500 font-normal text-sm ml-2 italic">
                          · {exp.tag}
                        </span>
                      )}
                    </p>
                    <p className="text-neutral-500 text-sm mt-1">
                      {exp.period} · {exp.location}
                    </p>
                    <p className="text-neutral-300 text-base mt-3 leading-relaxed">
                      {exp.summary}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
