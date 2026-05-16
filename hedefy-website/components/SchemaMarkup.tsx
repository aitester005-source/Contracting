import React from 'react';

const SchemaMarkup: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Hedefy Scaffolding Contracting Co. LLC",
    "image": "https://hedefy-scaff.com/images/logo.jpeg",
    "@id": "https://hedefy-scaff.com/",
    "url": "https://hedefy-scaff.com/",
    "telephone": "+971 50 4529978",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Al Quoz Industrial Area",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.1306,
      "longitude": 55.2274
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61572363516894",
      "https://www.linkedin.com/company/113126110/"
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hedefy Scaffolding Contracting Co. LLC",
    "alternateName": "Hedefy Scaffolding",
    "url": "https://hedefy-scaff.com/",
    "logo": "https://hedefy-scaff.com/images/logo.jpeg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971 50 4529978",
      "contactType": "customer service",
      "areaServed": "AE",
      "availableLanguage": ["en", "ar"]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
};

export default SchemaMarkup;
