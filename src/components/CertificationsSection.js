import React from 'react';
import './CertificationsSection.css';

const certifications = [
  {
    id: 1,
    title: 'Certifiée par le Ministère des Transports',
    description: 'Notre auto-école est officiellement reconnue et agréée par les autorités compétentes.',
    logo: '/image/Certificat1.jpg', 
  },
  {
    id: 2,
    title: 'Moniteurs Certifiés',
    description: 'Tous nos moniteurs sont diplômés et disposent de plus de 5 ans d’expérience.',
    logo: '/image/Certificat2.jpg', 
  },
  {
    id: 3,
    title: 'Partenaire de l’Association Sécurité Routière',
    description: 'Nous collaborons avec des experts pour promouvoir la sécurité sur les routes.',
    logo: '/image/Certificat3.jpg', 
  },
  {
    id: 4,
    title: 'Formation conforme aux normes ISO 9001',
    description: 'Nos cours respectent les standards internationaux de qualité.',
    logo: '/image/Certificat4.webp', 
  },
];

const CertificationsSection = () => {
  return (
    <section className="certifications-section">
      <h2 className="section-title">Certifications et <span>Accréditations</span></h2>
      <div className="certifications-container">
        {certifications.map((cert) => (
          <div className="certification-card" key={cert.id}>
            <img
              src={cert.logo}
              alt={cert.title}
              className="certification-logo"
            />
            <div className="certification-details">
              <p className="certification-description">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
