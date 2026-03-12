import { motion } from 'framer-motion';
import { Award, CheckCircle, Factory, Cog } from 'lucide-react';

const RotatingGear = ({ className, duration = 10, reverse = false, size = 100 }: { className?: string, duration?: number, reverse?: boolean, size?: number }) => {
    // Gerar dentes da engrenagem matematicamente perfeitos
    const numTeeth = 12;
    const outerRadius = 49;
    const innerRadius = 40;
    const center = 50;
    
    let pathD = "";
    for (let i = 0; i < numTeeth; i++) {
        const angle = (i * 360) / numTeeth;
        const angleRad = (angle * Math.PI) / 180;
        const nextAngle = ((i + 1) * 360) / numTeeth;
        
        // Largura do dente (em graus)
        const toothWidth = 360 / numTeeth / 2.5; 
        
        // Pontos do dente
        const a1 = angle - toothWidth/2;
        const a2 = angle - toothWidth/4; // leve chanfro
        const a3 = angle + toothWidth/4; // leve chanfro
        const a4 = angle + toothWidth/2;
        
        const r1 = innerRadius;
        const r2 = outerRadius;
        
        // Função auxiliar para coordenadas
        const getCoord = (deg: number, r: number) => {
            const rad = ((deg - 90) * Math.PI) / 180;
            return `${center + r * Math.cos(rad)} ${center + r * Math.sin(rad)}`;
        };
        
        const p1 = getCoord(a1, r1);
        const p2 = getCoord(a2, r2);
        const p3 = getCoord(a3, r2);
        const p4 = getCoord(a4, r1);
        const pNext = getCoord(nextAngle - toothWidth/2, r1); // Ponto de conexão com o próximo
        
        if (i === 0) pathD += `M ${p1} L ${p2} L ${p3} L ${p4}`;
        else pathD += ` L ${p1} L ${p2} L ${p3} L ${p4}`;
        
        // Arco interno até o próximo dente
        pathD += ` A ${r1} ${r1} 0 0 1 ${pNext}`;
    }
    pathD += " Z";

    // Furos circulares para aliviar peso (design industrial)
    const holes = [0, 60, 120, 180, 240, 300].map(deg => {
        const rad = ((deg - 90) * Math.PI) / 180;
        const cx = 50 + 28 * Math.cos(rad);
        const cy = 50 + 28 * Math.sin(rad);
        return <circle key={deg} cx={cx} cy={cy} r="6" fill="#1a1a1a" stroke="url(#hole-gradient)" strokeWidth="0.5" />;
    });

    return (
        <motion.div
            animate={{ rotate: reverse ? -360 : 360 }}
            transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
            className={`absolute pointer-events-none origin-center flex items-center justify-center ${className}`}
            style={{ width: size, height: size }}
        >
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl overflow-visible">
                <defs>
                    <linearGradient id="gear-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e0e0e0" />
                        <stop offset="50%" stopColor="#5a5a5a" />
                        <stop offset="100%" stopColor="#222" />
                    </linearGradient>
                    <linearGradient id="hole-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                         <stop offset="0%" stopColor="#000" />
                         <stop offset="100%" stopColor="#333" />
                    </linearGradient>
                    <filter id="metal-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="1" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>
                
                {/* Corpo Principal da Engrenagem */}
                <path d={pathD} fill="url(#gear-gradient)" stroke="#111" strokeWidth="0.5" filter="url(#metal-glow)" />
                
                {/* Detalhes Internos */}
                <circle cx="50" cy="50" r="35" fill="none" stroke="#333" strokeWidth="0.5" opacity="0.5" />
                <circle cx="50" cy="50" r="20" fill="url(#gear-gradient)" stroke="#111" strokeWidth="0.5" />
                
                {/* Furos de alívio */}
                {holes}
                
                {/* Eixo Central */}
                <circle cx="50" cy="50" r="8" fill="#111" stroke="#333" strokeWidth="2" />
                <path d="M46 50 L54 50 M50 46 L50 54" stroke="#444" strokeWidth="1" />
            </svg>
        </motion.div>
    );
};

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

            {/* ── VISUAL CONNECTOR ── */}
            {/* Linha industrial reposicionada e estilizada como tubulação */}
            <div className="absolute top-[50%] left-0 right-0 h-[1px] md:h-auto md:w-[2px] md:top-[350px] md:bottom-[50px] md:left-[80px] lg:left-[calc(50%-1px)] z-0 pointer-events-none hidden md:block opacity-20">
                 <div className="w-full h-full bg-gradient-to-b from-transparent via-white/40 to-transparent dashed-line"></div>
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
                            className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] flex items-center justify-center p-8 bg-black/40 rounded-full backdrop-blur-[2px] border border-white/5 shadow-2xl"
                        >
                            {/* ── Single Large Gear Frame ── */}
                            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                                {/* Fundo escuro atrás da engrenagem para destacar o metal */}
                                <div className="absolute w-[80%] h-[80%] bg-black rounded-full blur-2xl opacity-80"></div>
                                
                                <RotatingGear 
                                    size={460} 
                                    duration={40} 
                                    className="opacity-100 w-[340px] h-[340px] md:w-[460px] md:h-[460px] drop-shadow-2xl" 
                                />
                            </div>

                            {/* Glow Effect behind logo */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-primary)_0%,_transparent_60%)] opacity-20 blur-3xl" />
                            
                            {/* Logo Image - Floating on top */}
                            <img
                                src="/logo.png"
                                alt="Logo Trolesi Manutenções"
                                className="w-[85%] h-auto object-contain drop-shadow-2xl relative z-10"
                                style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.7))" }}
                            />
                        </motion.div>
                    </div>

                    {/* Right Column: Intro Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-7/12 relative pl-0 md:pl-8"
                    >
                         {/* Elemento de conexão vertical sutil ao lado do texto */}
                         <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[var(--color-brand-primary)]/20 via-[var(--color-brand-primary)]/60 to-[var(--color-brand-primary)]/20 hidden md:block rounded-full"></div>

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
                <div className="flex flex-col lg:flex-row gap-16 items-center relative pt-4">

                    {/* Texto História - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative pl-0 md:pl-8"
                    >
                        {/* Conector lateral sutil, alinhado com o texto de cima */}
                         <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-white/10 via-white/30 to-white/10 hidden md:block rounded-full"></div>

                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 flex items-center gap-4">
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
