import React, { useState } from "react";
import "./Reservation.css";
import { Link } from "react-router-dom";

const ReservationSection = () => {
  const [formVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible(!formVisible);
  };

  return (
    <section className="reservation-section">
      <div className="container-reservation">
        <div className="chil-one-reservation">
          <h2 className="section-title-reservation">
            Réservez Votre <span>Cours Maintenant</span>
          </h2>
          <p className="section-description">
            Profitez de notre expertise pour apprendre à conduire en toute
            sécurité. Réservez votre créneau en seulement quelques clics.
          </p>
          <Link
            to="/reservation"
            className="reservation-button"
            onClick={toggleForm}
          >
            <i class="fa-solid fa-car"></i> Réservez Maintenant
          </Link>
        </div>

        <img
          className="img-callToAction"
          src={`${process.env.PUBLIC_URL}/image/Click here-amico (1).png`}
          alt=""
        />
      </div>
    </section>
  );
};

export default ReservationSection;
