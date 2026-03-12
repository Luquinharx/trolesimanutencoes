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
                
                {/* Mobile Logo Left - Hidden on mobile as per request */}
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
                        className="fixed inset-0 bg-[#0a0a0a] z-[60] flex flex-col px-8 py-12 pointer-events-auto md:hidden"
                    >
                        {/* Close Button */}
                        <button 
                            className="absolute top-6 right-6 text-white/60 hover:text-white p-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        <div className="w-full flex justify-center mb-12 mt-4">
                            <img 
                                src="/logo.png" 
                                alt="Trolesi Original Logo" 
                                className="w-48 h-auto object-contain drop-shadow-[0_0_25px_rgba(245,166,35,0.2)]" 
                            />
                        </div>

                        <div className="flex flex-col gap-8 w-full">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.to}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + (i * 0.1) }}
                                    href={`#${link.to}`}
                                    className="text-3xl font-sans font-medium text-white hover:text-[var(--color-brand-primary)] transition-colors text-left border-b border-white/5 pb-4"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <div className="mt-auto w-full flex justify-center">
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    window.open("https://wa.me/5511999999999", "_blank");
                                }}
                                className="w-full py-4 bg-[var(--color-brand-primary)] text-black font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-[var(--color-brand-primary)]/90 transition-all shadow-lg shadow-[rgba(245,166,35,0.2)]"
                            >
                                FALE CONOSCO
                            </motion.button>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
