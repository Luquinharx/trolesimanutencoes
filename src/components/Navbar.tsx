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
                
                {/* Mobile Logo Left - Hidden text per request, could use an image if desired, but user asked to remove text */}
                <div className="md:hidden block" /> 

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
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed inset-0 bg-[#0a0a0a]/95 backdrop-blur-2xl z-[60] flex flex-col items-center justify-center gap-12 pointer-events-auto md:hidden"
                    >
                        {/* Close Button */}
                        <button 
                            className="absolute top-8 right-8 text-white/60 hover:text-white p-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        <div className="text-center mb-8">
                            <span className="text-2xl font-bold text-white tracking-wider block">
                                <span className="text-[var(--color-brand-primary)]">TRO</span>LESI
                            </span>
                            <span className="text-xs text-white/40 uppercase tracking-[0.3em] font-light">Manutenções</span>
                        </div>

                        <div className="flex flex-col gap-6 w-full px-12">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.to}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + (i * 0.1) }}
                                    href={`#${link.to}`}
                                    className="text-4xl font-serif text-white hover:text-[var(--color-brand-primary)] transition-colors text-center"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            onClick={() => {
                                setMobileMenuOpen(false);
                                window.open("https://wa.me/5511999999999", "_blank");
                            }}
                            className="mt-8 px-8 py-3 bg-[var(--color-brand-primary)] text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[var(--color-brand-primary)]/80 transition-all"
                        >
                            Fale Conosco
                        </motion.button>

                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
