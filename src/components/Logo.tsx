/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
// @ts-ignore
import logoImage from '../assets/images/logo_completo_color.png';

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
  // Apply a clean white filter to the PNG logo on dark backgrounds (like the footer)
  const filterClass = !lightBg ? 'brightness-0 invert' : '';

  return (
    <div className={`inline-flex items-center ${className}`} style={{ height }}>
      <img
        src={logoImage}
        alt="ADG Almacén de Granos S.A."
        className={`object-contain h-full w-auto transition-all ${filterClass}`}
        style={{ maxHeight: height }}
      />
    </div>
  );
}


