import { motion } from 'framer-motion';
import { Award, CheckCircle, Factory, Cog, Settings, Wrench } from 'lucide-react';

const RotatingGear = ({ className, duration = 10, reverse = false, size = 100 }: { className?: string, duration?: number, reverse?: boolean, size?: number }) => (
    <motion.div
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
        className={`absolute text-gray-500 pointer-events-none origin-center ${className}`}
        style={{
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
        }}
    >
        <Cog size={size} strokeWidth={1.5} />
    </motion.div>
);

const About = () => {
    return (
        <section
            id="about"
            className="py-24 relative overflow-hidden"
            style={{
                // Matching "Services" section background for consistency
                background: 'linear-gradient(180deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)',
            }}
        >
            {/* Subtle background grid (Standardized with Services) */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(245,166,35,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.8) 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                }}
            />

             {/* Radial glow top-center (Standardized with Services) */}
             <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse at top, rgba(245,166,35,0.07) 0%, transparent 70%)',
                }}
            />

            <div className="container mx-auto px-6 md:px-12 relative z-10 space-y-32">
                
                {/* ── PART 1: LOGO & INTRO (BRANDING) ── */}
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    
                    {/* Left Column: Logo Showcase with Gears */}
                    <div className="w-full md:w-5/12 mx-auto flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center"
                        >
                            {/* ── Single Large Gear Frame ── */}
                            <div className="absolute inset-0 z-0 pointer-events-none">
                                <RotatingGear 
                                    size={480} 
                                    duration={60} 
                                    className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 text-gray-400" 
                                />
                                {/* Inner ring for more mechanical detail */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] rounded-full border border-gray-500/30 border-dashed animate-[spin_60s_linear_infinite_reverse]" />
                            </div>

                            {/* Glow Effect behind logo */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-primary)_0%,_transparent_60%)] opacity-10 blur-3xl" />
                            
                            {/* Logo Image - Floating on top */}
                            <img
                                src="/logo.png"
                                alt="Logo Trolesi Manutenções"
                                className="w-[85%] h-auto object-contain drop-shadow-2xl relative z-10"
                            />
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

                        <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed text-justify">
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
                <div className="flex flex-col lg:flex-row gap-16 items-center border-t border-white/5 pt-20">

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
                        <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg text-justify">
                            <p>
                                Desde <strong>2005</strong>, nascemos com a missão de prover serviços de alta complexidade mecânica. Ao longo de quase duas décadas, expandimos nossa atuação para <strong>mais de 10 estados brasileiros</strong>, firmando parcerias vitais com as maiores gigantes nacionais do setor de energia.
                            </p>
                            <p>
                                Nossa equipe não entrega apenas serviço; nós garantimos confiabilidade operacional e segurança estrutural.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-12 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm shadow-xl">
                            <div>
                                <p className="text-4xl font-bold text-[var(--color-brand-primary)] mb-2">+19</p>
                                <p className="text-sm text-gray-400 font-medium">Anos de Mercado</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-[var(--color-brand-primary)] mb-2">+10</p>
                                <p className="text-sm text-gray-400 font-medium">Estados Atendidos</p>
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
