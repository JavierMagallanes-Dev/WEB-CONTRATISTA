import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({ numero }) {
  const mensaje = "Hola, me interesa solicitar una cotización";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
