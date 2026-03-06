import NoahHeadShot from "/Headshot.jpg";
import EZSpike from "/EzSpike.jpeg";
import HyperTherm1 from '/Hypertherm1.jpeg';
import HyperTherm2 from '/Hypertherm2.jpeg';
import EZSpike2 from '/EZSpike2.jpg';
import Corning1 from '/Corning1.jpg';
import Corning2 from '/Corning2.jpg';
import { neutral, orange } from "../constants/colors";


interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  tag?: string;
  summary: string;
  images?: string[]; // 0, 1, or 2 image URLs
}

const experiences: Experience[] = [
  {
    role: "Manufacturing Process Engineering Intern",
    company: "Hypertherm Associates",
    location: "Lebanon, NH",
    period: "May 2025 – Aug. 2025",
    images: [HyperTherm1, HyperTherm2],
    summary:
      "Designed safety covers and implemented a semi-automated press that cut assembly cycle time by 48% at a leading cutting-technology manufacturer.",
  },
  {
    role: "Technical Co-Founder",
    company: "EZSpike",
    location: "Rochester, NY",
    period: "May 2024 – Aug. 2024",
    tag: "Student Accelerator Program",
    images: [EZSpike, EZSpike2],
    summary:
      "Built and commercialized a rechargeable motor-driven spike wrench through the RIT Student Accelerator, from prototype to investor pitch.",
  },
  {
    role: "Manufacturing Engineering Co-op",
    company: "Corning Inc.",
    location: "Fairport, NY",
    period: "May 2023 – Jan. 2024",
    images: [Corning1, Corning2],
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

  const imageStyling = `rounded-2xl border border-neutral-800 shadow-lg ${neutral.shadowBlackSoft} w-50 h-50 md:w-30 md:h-30 lg:w-60 lg:h-60 object-cover`

  return (
    <div className={`min-h-screen ${neutral.pageBg} ${neutral.pageText} overflow-x-hidden`}>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="pt-36 pb-28 px-4 md:px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Photo */}
          <div className="shrink-0 flex justify-center">
            <div className={`relative w-48 h-67 md:w-64 md:h-89 lg:w-72 lg:h-100 rounded-full overflow-hidden ring-4 ${orange.ringSoft} shadow-[0_0_48px_8px_rgba(249,115,22,0.2)]`}>
              <img
                src={NoahHeadShot}
                alt="Noah Koeng"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <p className={`${orange.textPrimary} text-sm md:text-base font-semibold uppercase tracking-widest mb-4`}>
              Mechanical Engineer
            </p>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight ${neutral.whiteText} mb-5`}>
              Noah Koeng
            </h1>
            <p className="text-neutral-400 text-base md:text-xl max-w-2xl mb-8">
              B.S. &amp; M.E. Candidate at Rochester Institute of Technology · GPA 3.86 / 4.00
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-base text-neutral-400">
              <a href="tel:6077933640" className={`${orange.hoverText} transition-colors`}>
                607-793-3640
              </a>
              <span className="text-neutral-700">|</span>
              <a href="mailto:nfk8360@rit.edu" className={`${orange.hoverText} transition-colors`}>
                nfk8360@rit.edu
              </a>
              <span className="text-neutral-700">|</span>
              <a
                href="https://linkedin.com/in/noah-koeng"
                target="_blank"
                rel="noopener noreferrer"
                className={`${orange.hoverText} transition-colors`}
              >
                linkedin.com/in/noah-koeng
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── Experience Timeline ───────────────────────────────────────── */}
      <section id="about" className="max-w-screen-xl mx-auto px-4 md:px-10 pb-36">
        <h2 className={`text-3xl md:text-4xl font-bold ${neutral.whiteText} text-center mb-20`}>
          Work <span className={orange.textPrimary}>Experience</span>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b ${orange.gradientFrom} ${orange.gradientTo} md:-translate-x-px`} />

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
                  <div className={`absolute left-5 md:left-1/2 top-3 md:top-auto w-5 h-5 rounded-full ${orange.bgPrimary} border-2 border-neutral-950 -translate-x-[10px] z-10 shadow-[0_0_16px_4px_rgba(249,115,22,0.55)]`} />

                  {/* Content */}
                  <div
                    className={`ml-10 md:ml-0 w-[calc(100%-2.5rem)] md:w-[calc(50%-3rem)] ${
                      isLeft ? "md:mr-auto md:pr-7 md:text-right" : "md:ml-auto md:pl-7 md:text-left"
                    }`}
                  >
                    <h3 className={`text-lg md:text-2xl font-bold ${neutral.whiteText} leading-snug`}>
                      {exp.role}
                    </h3>
                    <p className={`text-base md:text-lg ${orange.textSecondary} font-semibold mt-1`}>
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
                    {exp.images && exp.images.length === 1 && (
                      <div className="mt-5 flex justify-center">
                        <img
                          src={exp.images[0]}
                          alt={`${exp.company} image`}
                          className={imageStyling}
                        />
                      </div>
                    )}
                    {exp.images && exp.images.length === 2 && (
                      <div className="mt-5 flex gap-4 justify-center">
                        {exp.images.map((src, idx) => (
                          <img
                            key={idx}
                            src={src}
                            alt={`${exp.company} image ${idx + 1}`}
                            className={imageStyling}
                          />
                        ))}
                      </div>
                    )}
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
