import { motion } from 'framer-motion';
import { Wrench, Cog, Construction, CheckCircle2 } from 'lucide-react';

const services = [
    {
        number: '01',
        title: 'Montagem Industrial',
        subtitle: 'Do conceito à operação',
        description:
            'Planejamento estrutural e instalação completa de plantas para o envase e processamento de gás de cozinha e fluidos industriais sob pressão.',
        icon: Construction,
        points: [
            'Projetos de layout e logística',
            'Instalação de tubulações e válvulas',
            'Comissionamento e testes de pressão',
        ],
    },
    {
        number: '02',
        title: 'Manutenção Preventiva',
        subtitle: 'Continuidade sem interrupções',
        description:
            'Intervenções programadas em válvulas, tubulações, compressores e maquinário pesado. Reduza riscos, paradas e custos não planejados.',
        icon: Wrench,
        points: [
            'Cronogramas personalizados',
            'Diagnóstico preditivo avançado',
            'Equipe disponível 24h',
        ],
    },
    {
        number: '03',
        title: 'Desmontagem e Retrofit',
        subtitle: 'Modernização sem desperdício',
        description:
            'Descomissionamento seguro de maquinário obsoleto, modernização de peças vitais e reestruturação de linhas de produção antigas.',
        icon: Cog,
        points: [
            'Descomissionamento certificado',
            'Substituição de componentes críticos',
            'Integração com novos sistemas',
        ],
    },
];

const stats = [
    { value: '+19', label: 'Anos de Experiência' },
    { value: '+500', label: 'Projetos Entregues' },
    { value: '+10', label: 'Estados Atendidos' },
    { value: '100%', label: 'Foco em Segurança' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.18 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as any } },
};

const Services = () => {
    return (
        <section
            id="services"
            className="py-16 md:py-28 relative overflow-hidden"
            style={{
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

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* ── SECTION HEADER ── */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-[var(--color-brand-primary)]/10 border border-[var(--color-brand-primary)]/25 rounded-full px-4 py-1.5 mb-6"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)] animate-pulse" />
                        <span className="text-[var(--color-brand-primary)] text-[10px] font-semibold tracking-[0.4em] uppercase">
                            O que fazemos
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.7 }}
                        className="text-4xl md:text-5xl font-serif text-white mb-5 leading-tight"
                    >
                        Nossa{' '}
                        <span className="text-[var(--color-brand-primary)]">Especialidade</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                        className="text-gray-400 text-base md:text-lg font-light leading-relaxed"
                    >
                        Atendemos o ciclo completo dos seus equipamentos, do planejamento à modernização.
                        Expertise rigorosa para o máximo de segurança que o setor de gás exige.
                    </motion.p>
                </div>

                {/* ── SERVICE CARDS ── */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.number}
                            variants={itemVariants}
                            className="relative rounded-3xl p-8 md:p-10 overflow-hidden group cursor-default transition-all duration-500 hover:-translate-y-1"
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.08)',
                            }}
                            whileHover={{
                                borderColor: 'rgba(245,166,35,0.35)',
                                backgroundColor: 'rgba(245,166,35,0.04)',
                            }}
                        >
                            {/* Ghost number watermark */}
                            <span
                                className="absolute top-4 right-6 font-bold leading-none select-none transition-all duration-500 group-hover:opacity-[0.08]"
                                style={{
                                    fontSize: '6.5rem',
                                    color: 'rgba(255,255,255,0.04)',
                                    fontFamily: 'var(--font-serif)',
                                }}
                            >
                                {service.number}
                            </span>

                            {/* Top accent bar */}
                            <div
                                className="w-8 h-[2px] bg-[var(--color-brand-primary)] mb-8 transition-all duration-500 group-hover:w-14"
                                style={{ borderRadius: '1px' }}
                            />

                            {/* Icon */}
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                                style={{
                                    background: 'rgba(245,166,35,0.1)',
                                    border: '1px solid rgba(245,166,35,0.2)',
                                }}
                            >
                                <service.icon
                                    className="w-5 h-5"
                                    style={{ color: 'var(--color-brand-primary)' }}
                                />
                            </div>

                            {/* Number label */}
                            <p
                                className="text-[10px] tracking-[0.45em] uppercase font-semibold mb-1"
                                style={{ color: 'rgba(245,166,35,0.55)' }}
                            >
                                {service.number}
                            </p>

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-1 leading-snug">
                                {service.title}
                            </h3>

                            {/* Subtitle */}
                            <p
                                className="text-sm font-medium mb-5"
                                style={{ color: 'var(--color-brand-primary)' }}
                            >
                                {service.subtitle}
                            </p>

                            {/* Divider */}
                            <div className="h-px bg-white/[0.07] mb-5" />

                            {/* Description */}
                            <p className="text-gray-400 font-light leading-relaxed text-sm mb-6">
                                {service.description}
                            </p>

                            {/* Key points */}
                            <ul className="space-y-2.5">
                                {service.points.map((point, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2.5 text-gray-300 text-[13px]"
                                    >
                                        <CheckCircle2
                                            className="w-4 h-4 mt-0.5 shrink-0"
                                            style={{ color: 'var(--color-brand-primary)' }}
                                        />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── STATS ROW ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t pt-14"
                    style={{ borderColor: 'rgba(255,255,255,0.07)' }}
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center group">
                            <p
                                className="text-3xl md:text-4xl font-bold mb-1 transition-all duration-300 group-hover:scale-105"
                                style={{ color: 'var(--color-brand-primary)' }}
                            >
                                {stat.value}
                            </p>
                            <p className="text-gray-500 text-sm font-light">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Services;
