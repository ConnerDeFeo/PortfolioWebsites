import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "Resume", href: "/resume" }
    ];

    return(
        /* ── Navbar ───────────────────────────────────────────────────── */
        <header className="fixed top-0 inset-x-0 z-50 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
            <nav className="max-w-screen-xl mx-auto px-10 h-20 flex items-center justify-between">
            <span className="text-2xl font-bold tracking-tight text-white">
                Noah <span className="text-orange-500">Koeng</span>
            </span>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-10 text-base font-medium text-neutral-400">
                {navLinks.map((link) => (
                <li key={link.label} className="hover:text-orange-400 transition-colors duration-200">
                    <Link to={link.href}>{link.label}</Link>
                </li>
                ))}
            </ul>

            {/* Mobile hamburger */}
            <button
                className="md:hidden flex flex-col gap-1.5 p-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span className={`block w-7 h-0.5 bg-neutral-300 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-7 h-0.5 bg-neutral-300 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-7 h-0.5 bg-neutral-300 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
            <div className="md:hidden border-t border-neutral-800 bg-neutral-950 px-10 pb-5">
                <ul className="flex flex-col gap-5 pt-5 text-base font-medium text-neutral-400">
                {navLinks.map((link) => (
                    <li key={link.label}>
                    <Link to={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>
                    </li>
                ))}
                </ul>
            </div>
            )}
        </header>
    );
}

export default Navbar;