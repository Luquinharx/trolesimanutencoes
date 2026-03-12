import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const whatsappUrl = "https://wa.me/5511999999999?text=Olá, acessei o site da Trolesi Manutenções e gostaria de mais informações.";

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: 'spring' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-50 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer group"
            aria-label="Falar conosco no WhatsApp"
        >
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75 group-hover:hidden" />
            <MessageCircle size={24} className="md:w-8 md:h-8 relative z-10" />
        </motion.a>
    );
};

export default WhatsAppButton;
