/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HERO_CONTENT } from '../data/content';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 group font-sans">
      
      {/* Decorative pulse ring */}
      <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" />

      {/* Floating tooltip */}
      <div className="absolute right-14 bottom-2 bg-white text-gray-800 border border-gray-100 py-1.5 px-3.5 rounded-xl shadow-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity translate-y-0.5 group-hover:translate-y-0 duration-300 pointer-events-none">
        💬 Contactanos por WhatsApp
      </div>

      {/* Actual button */}
      <a
        href={HERO_CONTENT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:scale-105 transition-all focus:outline-none"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          className="w-8 h-8 fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.261.407 2.427 1.096 3.374L6.32 18.006l2.802-1.127a5.733 5.733 0 002.909.791c3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767zm3.361 8.216c-.144.405-.733.738-1.02.766-.281.028-.567.042-1.748-.445-1.503-.62-2.457-2.147-2.531-2.246-.075-.1-.606-.807-.606-1.538 0-.731.383-1.092.52-1.242.136-.15.297-.188.397-.188h.284c.094 0 .221.012.338.29.12.285.412 1.003.447 1.077.036.075.059.163.009.263-.05.1-.075.163-.15.251-.075.088-.158.196-.226.263-.075.075-.154.158-.066.309.088.15.391.646.84 1.045.578.514 1.065.674 1.216.749.15.075.238.063.326-.038.088-.1.376-.438.476-.588.1-.15.2-.125.338-.075s.876.413 1.026.488c.15.075.251.113.288.175.037.063.037.363-.107.768z" />
        </svg>
      </a>

    </div>
  );
}
