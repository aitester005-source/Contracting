import React from 'react';
import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/newlayout/images/logo.jpeg"
      alt="Hedefy Scaffolding Contracting Co. LLC"
      width={48}
      height={48}
      priority
      className="object-contain rounded-md"
    />
  );
}
