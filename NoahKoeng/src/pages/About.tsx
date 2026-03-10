import { useState } from 'react';
import Track2 from '/Track2.jpg';
import About21 from '/About21.jpeg';
import About22 from '/About22.jpeg';
import Boat1 from '/Boat1.jpg';
import Boat3 from '/Boat3.jpeg';
import Boat4 from '/Boat4.jpeg';
import Boat5 from '/Boat5.jpg';
import Teardrop1 from '/Teardrop1.jpg';
import Teardrop2 from '/Teardrop2.jpg';
import Teardrop3 from '/Teardrop3.jpg';
import Bike1 from '/Bike1.jpg';
import { neutral } from "../constants/colors";
import Divider from '../components/Divider';

const highlights = [
    {
        title: "Learning the Tools",
        text: "My introduction to building started at home, helping my dad construct a 25-foot cabin cruiser. At the time I was mostly assisting where I could, but the experience gave me my first exposure to working with tools and materials. Learning happened by doing—measuring, cutting, sanding, and watching how larger projects come together piece by piece.",
        images: [Boat1,Boat3,Boat4,Boat5],
    },
    {
        title: "Early Projects",
        text: "As I got older, I began taking on smaller projects of my own. Simple builds like a wine rack or a couch table became opportunities to experiment with new tools and techniques. Through these projects I learned skills such as welding, finishing work, and the patience required to refine small details that make a finished product feel complete.",
        images: [About21,About22],
    },
    {
        title: "Larger Builds",
        text: "Eventually those small projects grew into larger ones. One of the most memorable was building a teardrop camper, a project I largely led while still learning from my dad along the way. Working on something at that scale meant thinking through structure, materials, and systems, and it was where I first began incorporating things like electrical wiring and more complex assembly.",
        images: [Teardrop1,Teardrop2,Teardrop3],
    },
    {
        title: "Today's Projects",
        text: "All of these experiences shaped the way I approach working on machines and systems today. The same curiosity and willingness to learn carries over into other hands-on work, like maintaining and modifying my motorcycle. Whether it's wood, metal, or mechanical systems, I've always enjoyed understanding how things are built and taking the time to improve or repair them myself.",
        images: [Bike1],
    },
];

const About = () => {
    const [imgIndices, setImgIndices] = useState(highlights.map(() => 0));

    const prev = (i: number) =>
        setImgIndices(s => s.map((cur, idx) => idx === i ? (cur - 1 + highlights[i].images.length) % highlights[i].images.length : cur));

    const next = (i: number) =>
        setImgIndices(s => s.map((cur, idx) => idx === i ? (cur + 1) % highlights[i].images.length : cur));

    return (
        <div className="max-w-screen-xl mx-auto px-6 pt-32 pb-16">

            {/* ── Section 1: Intro ─────────────────────────────────────── */}
            <h1 className={`text-4xl font-bold ${neutral.pageText} text-center`}>Athletics</h1>
            <Divider className='py-10'/>
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
                <div className="flex-1 text-neutral-300 leading-relaxed my-auto space-y-4">
                    <p>
                        Track and field has been a defining part of my life for many years. As a pole vaulter and three year captain of the RIT track and field team, the sport has taught me discipline, resilience, and the importance of setting high standards for myself and those around me.
                    </p>
                    <p>
                        As a captain, my focus has been on supporting teammates and helping build a positive team culture. Leadership in athletics often means encouraging others through setbacks, celebrating progress, and creating an environment where everyone feels motivated to improve. Being part of a team that pushes each other to grow has been one of the most rewarding parts of my athletic experience.
                    </p>
                </div>
            </div>



            {/* ── Section 2: Highlights ────────────────────────────────── */}
            <h2 className={`text-4xl font-bold mt-20 mb-12 text-center ${neutral.pageText}`}>A Builder's Mindset</h2>

            {/* ── Divider ───────────────────────────────────────────────────── */}
            <Divider className="my-10" />

            <div className="space-y-12">
                {highlights.map((item, index) => {
                    const imageFirst = index % 2 === 0;
                    const cur = imgIndices[index];
                    const hasMultiple = item.images.length > 1;
                    return (
                        <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                            <div className={`relative w-full md:w-3/10 flex-shrink-0 rounded-xl aspect-square overflow-hidden bg-neutral-900 ${!imageFirst ? 'md:order-2' : ''}`}>
                                <img
                                    src={item.images[cur]}
                                    alt={`${item.title} ${cur + 1}`}
                                    className="w-full h-full object-contain object-center"
                                />
                                {hasMultiple && (
                                    <>
                                        <button
                                            onClick={() => prev(index)}
                                            aria-label="Previous image"
                                            className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="15 18 9 12 15 6" /></svg>
                                        </button>
                                        <button
                                            onClick={() => next(index)}
                                            aria-label="Next image"
                                            className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="9 18 15 12 9 6" /></svg>
                                        </button>
                                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                                            {item.images.map((_, dotIdx) => (
                                                <button
                                                    key={dotIdx}
                                                    onClick={() => setImgIndices(s => s.map((c, i) => i === index ? dotIdx : c))}
                                                    aria-label={`Go to image ${dotIdx + 1}`}
                                                    className={`w-2 h-2 rounded-full transition-colors ${dotIdx === cur ? 'bg-white' : 'bg-white/40'}`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
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