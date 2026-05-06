import React from 'react';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/newlayout/images/logo.png"
        alt="Hedefy Scaffolding Contracting Co. LLC"
        width={48}
        height={48}
        priority
        className="object-contain"
      />

      {/* Company Name */}
      <div className="flex items-center gap-1">
        <div className="text-sm font-bold text-accent">Hedefy</div>
        <div className="text-xs text-white font-semibold">Scaffolding</div>
        <div className="text-xs text-white">Contracting Co. LLC</div>
      </div>
    </div>
  );
}
