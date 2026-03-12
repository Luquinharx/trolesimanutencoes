import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="md:col-span-2 flex flex-col items-center md:flex-row md:items-center gap-8 text-center md:text-left">
                        <img
                            src="/logo.png"
                            alt="Trolesi Manutenções"
                            className="h-40 w-auto rounded-lg object-contain flex-shrink-0"
                        />
                        <p className="text-gray-400 font-light leading-relaxed max-w-sm">
                            Mais de uma década provendo segurança, manutenções complexas e confiabilidade estrutural para o mercado de gás de cozinha.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Empresa</h4>
                        <ul className="space-y-4 text-gray-400 font-light">
                            <li><a href="#hero" className="hover:text-[var(--color-brand-primary)] transition-colors">Início</a></li>
                            <li><a href="#about" className="hover:text-[var(--color-brand-primary)] transition-colors">Sobre Nós</a></li>
                            <li><a href="#services" className="hover:text-[var(--color-brand-primary)] transition-colors">Serviços</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Contato</h4>
                        <ul className="space-y-4 text-gray-400 font-light">
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-[var(--color-brand-primary)]" />
                                <span>+55 11 99999-9999</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-[var(--color-brand-primary)]" />
                                <span>contato@trolesimanutencoes.com.br</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-[var(--color-brand-primary)] mt-1 flex-shrink-0" />
                                <span>Rua da Indústria, 1000 - ABC, São Paulo - SP</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} Trolesi Manutenções. Todos os direitos reservados.
                    </p>
                    <p className="text-gray-600 text-xs text-right mt-2 md:mt-0">
                        Produzido por Thinka.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
