import Track2 from '/Track2.jpg';
import About21 from '/About21.jpeg';
import Boat1 from '/Boat1.jpg';
import Teardrop1 from '/Teardrop1.jpg';
import Bike1 from '/Bike1.jpg';
import { neutral } from "../constants/colors";

const highlights = [
    {
        title: "Learning the Tools",
        text: "My introduction to building started at home, helping my dad construct a 28-foot cabin cruiser. At the time I was mostly assisting where I could, but the experience gave me my first exposure to working with tools and materials. Learning happened by doing—measuring, cutting, sanding, and watching how larger projects come together piece by piece.",
        image: Boat1,
    },
    {
        title: "Early Projects",
        text: "As I got older, I began taking on smaller projects of my own. Simple builds like a wine rack or a couch table became opportunities to experiment with new tools and techniques. Through these projects I learned skills such as welding, finishing work, and the patience required to refine small details that make a finished product feel complete.",
        image: About21,
    },
    {
        title: "Larger Builds",
        text: "Eventually those small projects grew into larger ones. One of the most memorable was building a teardrop camper, a project I largely led while still learning from my dad along the way. Working on something at that scale meant thinking through structure, materials, and systems, and it was where I first began incorporating things like electrical wiring and more complex assembly.",
        image: Teardrop1,
    },
    {
        title: "Today's Projects",
        text: "All of these experiences shaped the way I approach working on machines and systems today. The same curiosity and willingness to learn carries over into other hands-on work, like maintaining and modifying my motorcycle. Whether it’s wood, metal, or mechanical systems, I’ve always enjoyed understanding how things are built and taking the time to improve or repair them myself.",
        image: Bike1,
    },
];

const About = () => {
    return (
        <div className="max-w-5xl mx-auto px-6 pt-32 pb-16">

            {/* ── Section 1: Intro ─────────────────────────────────────── */}
            <h1 className={`text-4xl font-bold mb-10 ${neutral.pageText} text-center border-b border-neutral-800 pb-4`}>Athletics</h1>
            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Intro Image */}
                <div className="w-full md:w-1/3 flex-shrink-0 rounded-xl aspect-square overflow-hidden bg-neutral-800">
                    <img
                        src={Track2}
                        alt="Athletics"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Body Text */}
                <div className="flex-1 text-neutral-300 leading-relaxed space-y-4">
                    <p>
                        Track and field has been a defining part of my life for many years. As a pole vaulter and three year captain of the RIT track and field team, the sport has taught me discipline, resilience, and the importance of setting high standards for myself and those around me.
                    </p>
                    <p>
                        As a captain, my focus has been on supporting teammates and helping build a positive team culture. Leadership in athletics often means encouraging others through setbacks, celebrating progress, and creating an environment where everyone feels motivated to improve. Being part of a team that pushes each other to grow has been one of the most rewarding parts of my athletic experience.
                    </p>
                </div>
            </div>

            {/* ── Section 2: Highlights ────────────────────────────────── */}
            <h2 className={`text-4xl font-bold mt-20 mb-12 text-center ${neutral.pageText} border-b border-neutral-800 pb-4`}>A Builder's Mindset</h2>
            <div className="space-y-12">
                {highlights.map((item, index) => {
                    const imageFirst = index % 2 === 0;
                    return (
                        <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                            <div className={`w-full md:w-2/5 flex-shrink-0 rounded-xl aspect-video overflow-hidden bg-neutral-800 ${!imageFirst ? 'md:order-2' : ''}`}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className={`flex-1 text-neutral-300 leading-relaxed ${!imageFirst ? 'md:order-1' : ''}`}>
                                <h3 className={`text-xl font-semibold ${neutral.pageText} mb-3`}>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default About;