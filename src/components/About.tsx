import { motion } from 'framer-motion';
import { Award, CheckCircle, Factory, Cog } from 'lucide-react';

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
                    
                    {/* Left Column: Minimalist Typographic Logo (Replaces 3D Gear) */}
                    <div className="w-full md:w-5/12 mx-auto flex justify-center md:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative p-10 border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-3xl"
                        >
                            <div className="text-center md:text-right">
                                <h2 className="text-5xl md:text-6xl font-bold tracking-widest text-white leading-none">
                                    <span className="text-[var(--color-brand-primary)]">TRO</span>LESI
                                </h2>
                                <p className="text-sm md:text-base text-gray-400 font-light tracking-[0.6em] uppercase mt-2 border-t border-white/10 pt-2">
                                    Manutenções
                                </p>
                            </div>
                            
                            {/* Decorative accent */}
                            <div className="absolute -bottom-2 -right-2 w-20 h-20 border-r-2 border-b-2 border-[var(--color-brand-primary)]/30 rounded-br-3xl" />
                            <div className="absolute -top-2 -left-2 w-10 h-10 border-l-2 border-t-2 border-[var(--color-brand-primary)]/30 rounded-tl-3xl" />
                        </motion.div>
                    </div>

                    {/* Right Column: Intro Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-7/12"
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

                        {/* Text Left Aligned for better readability on mobile */}
                        <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed text-left">
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
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                            Nossa <span className="text-[var(--color-brand-primary)]">História</span>
                        </h2>
                        <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg text-left">
                            <p>
                                Desde <strong>2005</strong>, nascemos com a missão de prover serviços de alta complexidade mecânica. Ao longo de quase duas décadas, expandimos nossa atuação para <strong>mais de 10 estados brasileiros</strong>, firmando parcerias vitais com as maiores gigantes nacionais do setor de energia.
                            </p>
                            <p>
                                Nossa equipe não entrega apenas serviço; nós garantimos confiabilidade operacional e segurança estrutural.
                            </p>
                        </div>
                        
                        {/* Stats - ONLY here to avoid redundancy */}
                        <div className="grid grid-cols-2 gap-6 mt-12">
                             <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--color-brand-primary)]/30 transition-colors">
                                <p className="text-4xl font-bold text-[var(--color-brand-primary)] mb-1">+19</p>
                                <p className="text-xs uppercase tracking-wider text-gray-400">Anos de Mercado</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--color-brand-primary)]/30 transition-colors">
                                <p className="text-4xl font-bold text-[var(--color-brand-primary)] mb-1">+500</p>
                                <p className="text-xs uppercase tracking-wider text-gray-400">Projetos Entregues</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certificações / Painel Visual - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full lg:w-1/2"
                    >
                        {/* Imagem + Overlay de Certificação */}
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 group shadow-2xl">
                             {/* Darker Image Background */}
                             <div className="aspect-[4/3] relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                                <img
                                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                                    alt="Ferramentas e Instrumentos"
                                    className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                                />
                             </div>

                             {/* Content Overlay */}
                             <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-12">
                                <h3 className="text-2xl font-serif text-white mb-8 text-center uppercase tracking-widest border-b border-white/10 pb-4">
                                    Qualidade Garantida
                                </h3>

                                <div className="w-full space-y-4">
                                    {[
                                        { icon: Award, text: 'Licença Industrial 202A' },
                                        { icon: CheckCircle, text: 'Laudos ERF80M C80G5' },
                                        { icon: Factory, text: 'Segurança ABNT / NBR' }
                                    ].map((cert, i) => (
                                        <div key={i} className="flex items-center gap-4 bg-black/60 p-4 rounded-xl border border-white/10 hover:border-[var(--color-brand-primary)]/50 transition-colors backdrop-blur-md">
                                            <cert.icon className="text-[var(--color-brand-primary)] w-6 h-6 flex-shrink-0" />
                                            <span className="text-gray-200 font-medium">{cert.text}</span>
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
