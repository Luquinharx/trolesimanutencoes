import { motion } from 'framer-motion';
import { Award, CheckCircle, Factory, Cog } from 'lucide-react';

const RotatingGear = ({ className, duration = 10, reverse = false, size = 100 }: { className?: string, duration?: number, reverse?: boolean, size?: number }) => (
    <motion.div
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
        className={`absolute pointer-events-none origin-center flex items-center justify-center ${className}`}
        style={{
             width: size,
             height: size
        }}
    >
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-2xl"
        >
            <defs>
                {/* Gradiente Metálico Base (Aço Escuro) */}
                <linearGradient id="steel-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2b2b2b" />
                    <stop offset="25%" stopColor="#5a5a5a" />
                    <stop offset="50%" stopColor="#3d3d3d" />
                    <stop offset="75%" stopColor="#5a5a5a" />
                    <stop offset="100%" stopColor="#222222" />
                </linearGradient>

                 {/* Gradiente para o anel interno (Aço mais claro) */}
                 <linearGradient id="inner-ring-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#444" />
                    <stop offset="50%" stopColor="#777" />
                    <stop offset="100%" stopColor="#333" />
                </linearGradient>

                {/* Filtro de Textura Industrial (Ruído + Iluminação) */}
                <filter id="industrial-texture" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" result="noise" />
                    <feColorMatrix type="saturate" values="0" in="noise" result="desaturatedNoise" />
                    <feComposite operator="in" in="desaturatedNoise" in2="SourceGraphic" result="composite" />
                    <feBlend mode="overlay" in="composite" in2="SourceGraphic" result="textured" />
                    
                    {/* Leve sombra interna para dar volume 3D */}
                    <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
                    <feOffset dx="1" dy="1" result="offsetBlur" />
                    <feSpecularLighting in="blur" surfaceScale="2" specularConstant="1" specularExponent="20" lightingColor="#ffffff" result="specular">
                        <fePointLight x="-5000" y="-10000" z="20000" />
                    </feSpecularLighting>
                    <feComposite in="specular" in2="SourceAlpha" operator="in" result="specular" />
                    <feComposite in="SourceGraphic" in2="specular" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
                </filter>
                
                {/* Sombra projetada forte */}
                <filter id="heavy-shadow">
                    <feDropShadow dx="2" dy="4" stdDeviation="6" floodColor="black" floodOpacity="0.8" />
                </filter>
            </defs>

            {/* Corpo Principal da Engrenagem (Dentes Industriais) */}
            <path
                d="M50 15 
                   L55 5 L65 5 L70 15 
                   L78 18 
                   L88 12 L95 18 L90 28 
                   L95 35 
                   L105 38 L105 48 L95 51 
                   L92 60 
                   L100 70 L92 78 L80 75 
                   L72 82 
                   L75 95 L62 98 L58 85 
                   L42 85 
                   L38 98 L25 95 L28 82 
                   L20 75 
                   L8 78 L0 70 L8 60 
                   L5 51 
                   L-5 48 L-5 38 L5 35 
                   L10 28 
                   L5 18 L12 12 L22 18 
                   L30 15 
                   L35 5 L45 5 L50 15 Z"
                fill="url(#steel-gradient)"
                stroke="#1a1a1a"
                strokeWidth="0.5"
                filter="url(#industrial-texture)"
                transform="translate(0, 0)" // Ajuste fino se necessário
            />

            {/* Anel de Reforço Central */}
            <circle cx="50" cy="50" r="32" fill="none" stroke="url(#inner-ring-gradient)" strokeWidth="8" filter="url(#heavy-shadow)" opacity="0.9" />
            
            {/* Parafusos de Fixação (Hex bolts simulados) */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const isEven = i % 2 === 0;
                return (
                    <g key={angle} transform={`rotate(${angle} 50 50)`}>
                        <circle cx="50" cy="24" r="3" fill="#111" stroke="#333" strokeWidth="1" />
                        <circle cx="50" cy="24" r="1.5" fill={isEven ? "#555" : "#222"} />
                        {/* Fenda do parafuso */}
                         <rect x="48.5" y="23.5" width="3" height="1" fill="#000" transform={`rotate(${isEven ? 45 : 90} 50 24)`} />
                    </g>
                );
            })}

            {/* Eixo Central */}
            <circle cx="50" cy="50" r="12" fill="url(#steel-gradient)" stroke="#000" strokeWidth="1" />
            <circle cx="50" cy="50" r="5" fill="#000" opacity="0.8" />
        </svg>
    </motion.div>
);

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

            {/* ── CIRCUIT LINE CONNECTING SECTIONS ── */}
            {/* Visível apenas em desktop (md+) onde o layout permite a conexão vertical fluida */}
            <div className="absolute top-[300px] left-[25%] md:left-[22%] bottom-0 w-[2px] pointer-events-none hidden md:block">
                {/* Linha vertical principal saindo da engrenagem */}
                <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-neutral-700 via-neutral-600 to-transparent opacity-40"></div>
                
                {/* Pontos de conexão/nós do circuito */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neutral-800 border border-neutral-600 shadow-[0_0_10px_rgba(245,166,35,0.2)]"></div>
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neutral-700"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 space-y-20 md:space-y-24">
                
                {/* ── PART 1: LOGO & INTRO (BRANDING) ── */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center relative">
                    
                    {/* Left Column: Logo Showcase with Gears */}
                    <div className="w-full md:w-5/12 mx-auto flex justify-center relative z-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] flex items-center justify-center p-8 bg-black/20 rounded-full backdrop-blur-[2px] border border-white/5"
                        >
                            {/* ── Single Large Gear Frame ── */}
                            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                                {/* Fundo escuro atrás da engrenagem para destacar o metal */}
                                <div className="absolute w-[70%] h-[70%] bg-black/80 rounded-full blur-xl"></div>
                                
                                <RotatingGear 
                                    size={480} 
                                    duration={60} 
                                    className="opacity-100 w-[340px] h-[340px] md:w-[480px] md:h-[480px]" 
                                />
                            </div>

                            {/* Glow Effect behind logo */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-primary)_0%,_transparent_60%)] opacity-15 blur-3xl" />
                            
                            {/* Logo Image - Floating on top */}
                            <img
                                src="/logo.png"
                                alt="Logo Trolesi Manutenções"
                                className="w-[85%] h-auto object-contain drop-shadow-2xl relative z-10"
                                style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))" }}
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

                        <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed text-justify relative">
                            {/* Elemento de circuito conectando texto */}
                            <div className="absolute -left-6 top-2 bottom-2 w-[1px] bg-gradient-to-b from-[var(--color-brand-primary)]/30 to-transparent hidden md:block"></div>
                            
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
                {/* Removido border-t para continuidade visual "circuito" */}
                <div className="flex flex-col lg:flex-row gap-16 items-center relative pt-4">

                    {/* Texto História - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative pl-0 md:pl-8" // Padding left para dar espaço ao "fio" que desce da engrenagem
                    >
                         {/* Conector visual do circuito vindo de cima */}
                         <div className="absolute left-[-2px] md:left-[-15px] top-[-60px] bottom-0 w-[1px] bg-gradient-to-b from-neutral-700 via-neutral-800 to-transparent hidden md:block opacity-50"></div>

                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 flex items-center gap-4">
                            <span className="hidden md:block w-8 h-[1px] bg-[var(--color-brand-primary)]/50"></span>
                            <span>Nossa <span className="text-[var(--color-brand-primary)]">História</span></span>
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
