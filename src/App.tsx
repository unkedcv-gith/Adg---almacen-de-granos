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
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import RainWidget from './components/RainWidget';

export default function App() {
  return (
    <div id="app-root" className="min-h-screen bg-gray-50 flex flex-col font-sans overflow-x-hidden">
      
      {/* Navigation Header */}
      <Header />

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
        <ContactForm />

      </main>

      {/* Footer Details */}
      <Footer />

      {/* Floating Channels */}
      <WhatsAppButton />
      <RainWidget />

    </div>
  );
}

