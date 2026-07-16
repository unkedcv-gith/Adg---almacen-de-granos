/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Impulsores from './components/Impulsores';
import Values from './components/Values';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Infrastructure from './components/Infrastructure';
import Location from './components/Location';
import ClientAccess from './components/ClientAccess';
import ContactForm from './components/ContactForm';
import InboxPanel from './components/InboxPanel';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { ContactMessage } from './types';

export default function App() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isInboxOpen, setIsInboxOpen] = useState(false);

  // Load submissions from localStorage on mount for seamless state persistence
  useEffect(() => {
    try {
      const stored = localStorage.getItem('adg_contact_messages');
      if (stored) {
        setMessages(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error reading localStorage for messages', e);
    }
  }, []);

  const saveMessages = (updated: ContactMessage[]) => {
    setMessages(updated);
    try {
      localStorage.setItem('adg_contact_messages', JSON.stringify(updated));
    } catch (e) {
      console.error('Error writing localStorage for messages', e);
    }
  };

  const handleMessageSubmitted = (newMessage: ContactMessage) => {
    const updated = [newMessage, ...messages];
    saveMessages(updated);
    // Optionally auto-open the sandbox inbox so the reviewer sees their message immediately!
    setTimeout(() => {
      setIsInboxOpen(true);
    }, 1500);
  };

  const handleMarkAsRead = (id: string) => {
    const updated = messages.map(m => m.id === id ? { ...m, status: 'read' as const } : m);
    saveMessages(updated);
  };

  const handleClearAll = () => {
    const confirmClear = window.confirm("¿Está seguro de que desea eliminar todas las consultas de prueba?");
    if (confirmClear) {
      saveMessages([]);
    }
  };

  const unreadCount = messages.filter(m => m.status === 'new').length;

  return (
    <div id="app-root" className="min-h-screen bg-gray-50 flex flex-col font-sans overflow-x-hidden">
      
      {/* Navigation Header */}
      <Header onOpenInbox={() => setIsInboxOpen(true)} unreadCount={unreadCount} />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        
        {/* Section 1: Hero Banner */}
        <Hero />

        {/* Section 2: Quiénes Somos */}
        <AboutUs />

        {/* Section 2b: Quienes Impulsan este Proyecto (Origen de Marca) */}
        <Impulsores />

        {/* Section 3: Nuestra Esencia (Valores) */}
        <Values />

        {/* Section 4: Servicios (Acopio, Logística, Asesoramiento) */}
        <Services />

        {/* Section 5: ¿Por qué ADG? */}
        <WhyUs />

        {/* Section 6: Nuestra Infraestructura */}
        <Infrastructure />

        {/* Section 7: Dónde Estamos (Ubicación & Google Maps) */}
        <Location />

        {/* Section 8: Acceso Clientes Info Block */}
        <ClientAccess />

        {/* Section 9: Contacto & Formulario de Envío */}
        <ContactForm onMessageSubmitted={handleMessageSubmitted} />

      </main>

      {/* Footer Details */}
      <Footer />

      {/* Floating Channels */}
      <WhatsAppButton />

      {/* Developer Sandbox Mailbox Modal */}
      <InboxPanel
        isOpen={isInboxOpen}
        onClose={() => setIsInboxOpen(false)}
        messages={messages}
        onMarkAsRead={handleMarkAsRead}
        onClearAll={handleClearAll}
      />

    </div>
  );
}

