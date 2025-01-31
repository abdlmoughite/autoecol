import axios from "axios";
import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const DrivingSchoolForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    numeroIdentification: "",
    adresse: "",
    photoPersonnelle: null,
    photoCarteIdentiteFaceAvant: null,
    photoCarteIdentiteFaceArriere: null,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.nom.trim()) newErrors.nom = "Le nom est requis.";
      if (!formData.prenom.trim()) newErrors.prenom = "Le prénom est requis.";
      if (!formData.email.trim()) newErrors.email = "L'e-mail est requis.";
    } else if (step === 2) {
      if (!formData.telephone.trim())
        newErrors.telephone = "Le numéro de téléphone est requis.";
      if (!formData.numeroIdentification.trim())
        newErrors.numeroIdentification =
          "Le numéro d'identification est requis.";
      if (!formData.adresse.trim())
        newErrors.adresse = "L'adresse est requise.";
    } else if (step === 3) {
      if (!formData.photoPersonnelle)
        newErrors.photoPersonnelle = "La photo personnelle est requise.";
      if (!formData.photoCarteIdentiteFaceAvant)
        newErrors.photoCarteIdentiteFaceAvant =
          "La photo de la face avant de la carte d'identité est requise.";
      if (!formData.photoCarteIdentiteFaceArriere)
        newErrors.photoCarteIdentiteFaceArriere =
          "La photo de la face arrière de la carte d'identité est requise.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prevStep) => prevStep + 1);
      setErrors({});
    }
  };

  const handlePrevious = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
    setErrors({ ...errors, [name]: "" });
  };

  const ajouterJson = async () => {
    try {
      await axios.post("http://localhost:3004/user", formData);
      setSuccessMessage("Formulaire soumis avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error);
    }
  };

  const steps = [
    "Informations personnelles",
    "Continue votre information",
    "Détails fiscaux",
    "Résumé",
  ];

  return (
    <div className="form-container">
      <div className="steps-indicator">
        {steps.map((stepName, index) => (
          <div key={index} className="step-container">
            <div className={`step ${step >= index + 1 ? "active" : ""}`}>
              {index + 1}
            </div>
            <span>{stepName}</span>
            {index < steps.length - 1 && <div className="step-line"></div>}
          </div>
        ))}
      </div>

      <form className="form-reservation">
        {step === 1 && (
          <div>
            <h2 className="title-reservation">
              <span>Étape 1 :</span> Informations personnelles
            </h2>
            <label>
              Nom :{" "}
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className={errors.nom ? "input-error" : ""}
              />
              {errors.nom && (
                <span className="error-message">{errors.nom}</span>
              )}
            </label>
            <label>
              Prénom :{" "}
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                className={errors.prenom ? "input-error" : ""}
              />
              {errors.prenom && (
                <span className="error-message">{errors.prenom}</span>
              )}
            </label>
            <label>
              E-mail :{" "}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
                required
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </label>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="title-reservation">
              <span>Étape 2 :</span> Continue votre information
            </h2>
            <label>
              Numéro de téléphone :{" "}
              <input
                type="text"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className={errors.telephone ? "input-error" : ""}
              />
              {errors.telephone && (
                <span className="error-message">{errors.telephone}</span>
              )}
            </label>
            <label>
              Numéro d'identification :{" "}
              <input
                type="text"
                name="numeroIdentification"
                value={formData.numeroIdentification}
                onChange={handleChange}
                className={errors.numeroIdentification ? "input-error" : ""}
              />
              {errors.numeroIdentification && (
                <span className="error-message">
                  {errors.numeroIdentification}
                </span>
              )}
            </label>
            <label>
              Adresse :{" "}
              <input
                type="text"
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
                className={errors.adresse ? "input-error" : ""}
              />
              {errors.adresse && (
                <span className="error-message">{errors.adresse}</span>
              )}
            </label>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="title-reservation">
              <span>Étape 3 :</span> Téléchargement des documents
            </h2>
            <label>
              Photo personnelle :{" "}
              <input
                type="file"
                name="photoPersonnelle"
                onChange={handleChange}
                accept="image/*"
                className={errors.photoPersonnelle ? "input-error" : ""}
              />
              {errors.photoPersonnelle && (
                <span className="error-message">{errors.photoPersonnelle}</span>
              )}
            </label>
            <label>
              Photo de la face avant de la carte d'identité nationale :{" "}
              <input
                type="file"
                name="photoCarteIdentiteFaceAvant"
                onChange={handleChange}
                accept="image/*"
                className={
                  errors.photoCarteIdentiteFaceAvant ? "input-error" : ""
                }
              />
              {errors.photoCarteIdentiteFaceAvant && (
                <span className="error-message">
                  {errors.photoCarteIdentiteFaceAvant}
                </span>
              )}              
            </label>
            <label>
              Photo de la face arrière de la carte d'identité nationale :{" "}
              <input
                type="file"
                name="photoCarteIdentiteFaceArriere"
                onChange={handleChange}
                accept="image/*"
                className={
                  errors.photoCarteIdentiteFaceArriere ? "input-error" : ""
                }
              />
              {errors.photoCarteIdentiteFaceArriere && (
                <span className="error-message">
                  {errors.photoCarteIdentiteFaceArriere}
                </span>
              )}
            </label>
          </div>
        )}

    {step === 4 && (
          <div className="thanks-reservation">
            <h2 className="title-reservation">
              Merci pour votre réservation ! 🎉
            </h2>
            <p className="title-reservation">
              Votre demande a été prise en compte avec succès. Nous vous
              contacterons bientôt pour confirmer les détails de votre cours. Si
              vous avez des questions ou des modifications à apporter, n'hésitez
              pas à nous joindre au <span>+212799765432</span> ou par e-mail à
               <span><Link to="mailto:elmaaroufisaid@autoecole.com"> elmaaroufisaid@autoecole.com</Link>  </span>.
            </p>
            <p>
              Nous sommes impatients de vous accompagner sur la route de la
              réussite ! 🚗✨"
            </p>
          </div>
        )}

        <div className="navigation-buttons">
          {step > 1 && step < 4 && (
            <button type="button" onClick={handlePrevious}>
              Précédent
            </button>
          )}
          {step < 4 &&
            (step !== 3 ? (
              <button type="button" onClick={handleNext}>
                Suivant
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  if (validateStep()) {
                    ajouterJson();
                    handleNext();
                  }
                }}
              >
                Soumettre
              </button>
            ))}
        </div>
      </form>
    </div>
  );
};

export default DrivingSchoolForm;