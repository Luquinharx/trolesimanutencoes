import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', to: 'hero' },
        { name: 'Sobre Nós', to: 'about' },
        { name: 'Serviços', to: 'services' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 pointer-events-none flex justify-center ${
                scrolled ? 'py-4' : 'py-6'
            }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between md:justify-center items-center relative pointer-events-auto">
                
                {/* Mobile Logo Left */}
                <a href="#hero" className="md:hidden block text-xl font-bold text-white tracking-wider">
                    <span className="text-[var(--color-brand-primary)]">TRO</span>LESI
                </a>

                {/* Desktop Nav - Centered Pills w/o Logo */}
                <div className="hidden md:flex gap-12 items-center bg-black/40 px-12 py-3.5 rounded-full border border-white/10 backdrop-blur-md shadow-2xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.to}
                            href={`#${link.to}`}
                            className="text-gray-200 hover:text-[var(--color-brand-primary)] cursor-pointer text-sm font-semibold transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle - Absolute positioned on mobile */}
                <button
                    className="md:hidden absolute right-6 text-white bg-black/40 p-2 rounded-full backdrop-blur-md border border-white/10 shadow-lg"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-24 left-4 right-4 bg-[#111]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6 md:hidden shadow-2xl pointer-events-auto z-50 text-center"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.to}
                                href={`#${link.to}`}
                                className="text-xl font-medium text-white hover:text-[var(--color-brand-primary)] py-3 border-b border-white/5 last:border-0"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
