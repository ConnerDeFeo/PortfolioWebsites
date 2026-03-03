const Footer = () => {
    return (
        <footer className="border-t border-neutral-800 py-10 text-center text-base text-neutral-600">
            © {new Date().getFullYear()} Noah Koeng · Built with React &amp; Tailwind CSS
        </footer>
    );
};

export default Footer;