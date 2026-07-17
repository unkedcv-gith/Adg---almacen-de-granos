/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
// @ts-ignore
import logoImageColor from '../assets/images/logo_completo_color.png';
// @ts-ignore
import logoImageWhite from '../assets/images/logo_completo_blanco.png';

interface LogoProps {
  /**
   * Whether to render the logo for a light background (original colors) or a dark background (solid white).
   * @default true
   */
  lightBg?: boolean;
  /**
   * Additional CSS classes to apply to the container.
   */
  className?: string;
  /**
   * Height of the logo in pixels. Width scales automatically.
   * @default 40
   */
  height?: number;
  /**
   * Whether to show only the icon or the full brand logo (icon + "adg" text).
   * @default false
   */
  iconOnly?: boolean;
}

export default function Logo({
  lightBg = true,
  className = '',
  height = 40,
  iconOnly = false,
}: LogoProps) {
  const logoSrc = lightBg ? logoImageColor : logoImageWhite;

  return (
    <div className={`inline-flex items-center ${className}`} style={{ height }}>
      <img
        src={logoSrc}
        alt="ADG Almacén de Granos S.A."
        className="object-contain h-full w-auto transition-all"
        style={{ maxHeight: height }}
      />
    </div>
  );
}


