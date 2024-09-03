import React, { useState } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-400">
      <button
        className="flex justify-between items-center w-full p-4 text-white font-semibold focus:outline-none"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        {isOpen ? (
          <MdExpandLess className="text-xl" />
        ) : (
          <MdExpandMore className="text-xl" />
        )}
      </button>
      {isOpen && (
        <div >
          {content.map((item, index) => (
            <p key={index} className="text-white px-4 mb-2">{item}</p>
          ))}
        </div>
      )}
    </div>
  );
};

const AccordionContainer = () => {
  return (
    <div className="bg-[var(--color-blue)] w-full">
      <Accordion
        title="Competences"
        content={['Salesforce', 'Microsoft Dynamics', 'Power BI', 'SAP', 'UX/UI Design', 'Google Ads', 'Copywriting']}
      />
      <Accordion
        title="Financements"
        content={['Pôle-Emploi', 'CPF', 'OPCO', 'SAP', 'Paiement en plusieurs fois', 'ISA']}
      />
      <Accordion
        title="Services B2B"
        content={['E-learning', 'Web-events', 'Recrutement', 'Partenariats']}
      />
      <Accordion
        title="Resources"
        content={['A propos', 'Blog', 'CGV', 'Mentions', 'légales Contact']}
      />
    </div>
  );
};

export default AccordionContainer;
