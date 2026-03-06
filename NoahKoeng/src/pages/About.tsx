import Gears from '/Gears.jpg'
import { neutral } from "../constants/colors";

const highlights = [
    {
        title: "My Background",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: Gears,
    },
    {
        title: "What I Build",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: Gears,
    },
    {
        title: "Outside of Code",
        text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.",
        image: Gears,
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
                        src={Gears}
                        alt="Athletics"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Lorem Ipsum Text */}
                <div className="flex-1 text-neutral-300 leading-relaxed space-y-4">
                    <p>
                        hi ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                    </p>
                </div>
            </div>

            {/* ── Section 2: Highlights ────────────────────────────────── */}
            <h2 className={`text-3xl font-bold mt-20 mb-12 text-center ${neutral.pageText} border-b border-neutral-800 pb-4`}>Highlights</h2>
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