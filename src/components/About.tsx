import { motion } from 'framer-motion';
import { Award, CheckCircle, Factory } from 'lucide-react';

const About = () => {
    return (
        <section
            id="about"
            className="py-16 md:py-24 relative overflow-hidden"
            style={{
                // Matching "Services" section background for consistency
                background: 'linear-gradient(180deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)',
            }}
        >
            {/* Subtle background grid */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(245,166,35,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.8) 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                }}
            />

             {/* Radial glow top-center */}
             <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse at top, rgba(245,166,35,0.07) 0%, transparent 70%)',
                }}
            />

            <div className="container mx-auto px-6 md:px-12 relative z-10 space-y-20 md:space-y-24">
                
                {/* ── PART 1: LOGO & INTRO (BRANDING) ── */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                    
                    {/* Left Column: Original 3D Gear Logo (Reintroduced) */}
                    <div className="w-full md:w-5/12 mx-auto flex justify-center md:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <img 
                                src="/logo.png" 
                                alt="Trolesi Manutenções - Logo" 
                                className="w-64 md:w-80 h-auto object-contain drop-shadow-[0_0_50px_rgba(245,166,35,0.15)]"
                            />
                            
                            {/* Decorative accent behind logo */}
                            <div className="absolute -inset-10 bg-[var(--color-brand-primary)]/5 blur-3xl -z-10 rounded-full" />
                        </motion.div>
                    </div>

                    {/* Right Column: Intro Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-7/12 flex flex-col items-center md:items-start text-center md:text-left"
                    >
                        {/* Consistent Badge Style */}
                        <div className="inline-flex items-center gap-2 bg-[var(--color-brand-primary)]/10 border border-[var(--color-brand-primary)]/25 rounded-full px-4 py-1.5 mb-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)] animate-pulse" />
                            <span className="text-[var(--color-brand-primary)] text-[10px] font-semibold tracking-[0.4em] uppercase">
                                Sobre a Empresa
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
                            Referência em <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)]">
                                Manutenção Industrial
                            </span>
                        </h2>

                        {/* Text Centered on Mobile, Left on Desktop */}
                        <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed text-center md:text-left">
                            <p>
                                A <strong>Trolesi Manutenções</strong> é uma empresa consolidada no mercado de engenharia e manutenção industrial, especializada em atender as demandas críticas de grandes complexos de <strong>gás de cozinha (GLP)</strong> e indústrias de alta periculosidade.
                            </p>
                            <p>
                                Atuamos desde a <strong>montagem estrutural completa</strong> até a manutenção preventiva e corretiva de maquinário pesado, garantindo que a produção de nossos parceiros nunca pare, cumprindo rigorosamente as normas de segurança.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* ── PART 2: HISTORY & CERTIFICATIONS (LEGACY) ── */}
                <div className="flex flex-col lg:flex-row gap-16 items-start relative pt-4 border-t border-white/5">

                    {/* Texto História - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                            Nossa <span className="text-[var(--color-brand-primary)]">História</span>
                        </h2>
                        <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg text-center md:text-left">
                            <p>
                                Desde <strong>2005</strong>, nascemos com a missão de prover serviços de alta complexidade mecânica. Ao longo de quase duas décadas, expandimos nossa atuação para <strong>mais de 10 estados brasileiros</strong>, firmando parcerias vitais com as maiores gigantes nacionais do setor de energia.
                            </p>
                            <p>
                                Nossa equipe não entrega apenas serviço; nós garantimos confiabilidade operacional e segurança estrutural.
                            </p>
                        </div>
                    </motion.div>

                    {/* Certificações / Painel Visual - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full lg:w-1/2 flex justify-center"
                    >
                        {/* Imagem + Overlay de Certificação - Fully Responsive */}
                        <div className="relative w-full max-w-sm md:max-w-none rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 group shadow-2xl mx-4 md:mx-0">
                             
                             {/* Background Scene - Absolute Cover */}
                             <div className="absolute inset-0 z-0">
                                <div className="absolute inset-0 bg-black/70 z-10" />
                                <img
                                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                                    alt="Soldagem Industrial"
                                    className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                                />
                             </div>

                             {/* Content - Relative (Defines Height) */}
                             <div className="relative z-20 flex flex-col items-center justify-center p-8 md:p-12 min-h-[420px]">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-center uppercase tracking-widest bg-black/40 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10 whitespace-nowrap">
                                    Qualidade Garantida
                                </h3>

                                <div className="w-full space-y-4 md:space-y-6">
                                    {[
                                        { icon: Award, text: 'Licença Industrial 202A' },
                                        { icon: CheckCircle, text: 'Laudos ERF80M C80G5' },
                                        { icon: Factory, text: 'Segurança ABNT / NBR' }
                                    ].map((cert, i) => (
                                        <div key={i} className="flex items-center gap-4 md:gap-5 bg-black/80 p-4 md:p-5 rounded-2xl border border-white/10 hover:border-[var(--color-brand-primary)]/50 transition-colors backdrop-blur-md shadow-lg w-full">
                                            <cert.icon className="text-[var(--color-brand-primary)] w-6 h-6 md:w-7 md:h-7 flex-shrink-0" />
                                            <span className="text-white font-medium text-sm md:text-lg leading-tight">{cert.text}</span>
                                        </div>
                                    ))}
                                </div>
                             </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
