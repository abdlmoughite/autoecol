import React, { useState } from "react";
import "./ChatbotComponent.css"; // Importation du fichier CSS

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Liste des questions et réponses
  const faq = [
    {
      question: "Où es-tu ?",
      response:
        "Nous sommes situés dans votre école de conduite. N'hésitez pas à venir nous voir !",
    },
    {
      question: "Je veux parler à quelqu'un",
      response:
        "Un membre de notre équipe va vous répondre bientôt. Merci de patienter.",
    },
    {
      question: "Je veux venir chez vous",
      response: `Vous êtes le bienvenu ! Nous sommes ouverts de 9h à 18h. Contactez-nous pour plus de détails.`,
    },
  ];

  // Fonction pour ouvrir/fermer le chatbot
  const toggleChat = () => {
    setIsOpen(!isOpen);
    setSelectedQuestion(null); // Réinitialiser la sélection
  };

  // Fonction pour sélectionner une question
  const handleQuestionClick = (index) => {
    setSelectedQuestion(index);
  };

  return (
    <div>
      {/* Bouton d'ouverture/fermeture du chatbot */}
      <div className="chat-icon" onClick={toggleChat}>
        <span style={{ color: "#fff", fontSize: "24px" }}>💬</span>
      </div>

      {/* Fenêtre du chatbot */}
      {isOpen && (
        <div className="chat-window">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/* Bouton pour fermer */}
            <i class="fa-solid fa-message"></i>
            <button className="close-button" onClick={toggleChat}>
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <h3>Comment pouvons-nous vous aider?</h3>

          {/* Contenu du chatbot */}
          {selectedQuestion === null ? (
            // Liste des questions
            <div>
              <ul className="question-list">
                {faq.map((item, index) => (
                  <li key={index} onClick={() => handleQuestionClick(index)}>
                    {item.question}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            // Afficher la réponse
            <div className="reponseChat">
              <p>
                <strong></strong> {faq[selectedQuestion].response}
              </p>
              {/* Bouton pour revenir à la liste des questions */}
              <button
                className="chat-button"
                onClick={() => setSelectedQuestion(null)}
              >
                Retour
              </button>
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default ChatbotComponent;
