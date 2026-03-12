import { motion } from 'framer-motion';
import { Award, CheckCircle, Factory, Cog } from 'lucide-react';

const RotatingGear = ({ className, duration = 10, reverse = false, size = 100 }: { className?: string, duration?: number, reverse?: boolean, size?: number }) => (
    <motion.div
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
        className={`absolute pointer-events-none origin-center flex items-center justify-center ${className}`}
        style={{
            filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.5))"
        }}
    >
        {/* Camada de profundidade/corpo metálico */}
        <div className="absolute inset-2 rounded-full border-[6px] border-neutral-700/80 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]" />
        <div className="absolute inset-8 rounded-full border-[2px] border-neutral-600/50 border-dashed opacity-70" />
        
        {/* O Ícone principal com aparência metálica */}
        <Cog 
            size={size} 
            strokeWidth={1} 
            className="w-full h-full text-neutral-400/90 drop-shadow-[0_1px_2px_rgba(255,255,255,0.1)]"
            style={{
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.8)) brightness(1.1) contrast(1.1)"
            }}
        />
        
        {/* Brilho metálico sobreposto */}
        <div 
            className="absolute inset-0 rounded-full opacity-30"
            style={{
                background: "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.2) 80deg, transparent 180deg, rgba(255,255,255,0.2) 260deg, transparent 360deg)"
            }}
        />
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
