import { Phone } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5516997969717?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20peças%20de%20câmbio."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 z-50 group"
      title="Falar no WhatsApp"
    >
      <Phone size={28} className="text-white" />
      <span className="absolute right-20 bg-gray-900 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-medium">
        Posso te ajudar?
      </span>
    </a>
  );
}
