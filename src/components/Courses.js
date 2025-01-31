import "./Courses.css";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    name: "Cours de Conduite Débutant",
    description:
      "Apprenez les bases de la conduite et les règles de circulation.",
    audience: "Pour les conducteurs débutants",
    duration: "10 heures sur 2 semaines",
    price: "999 DH",
    image: "/image/driving school-bro.png", // Remplacez par le chemin réel de l’image
  },
  {
    id: 2,
    name: "Cours de Conduite Défensive",
    description:
      "Améliorez vos compétences de conduite et restez en sécurité sur la route.",
    audience: "Pour les conducteurs expérimentés",
    duration: "5 heures sur 1 semaine",
    price: "899 DH",
    image: "/image/driving school-amico.png",
  },
  {
    id: 3,
    name: "Cours de Conduite Manuelle",
    description: "Maîtrisez la conduite d’un véhicule à transmission manuelle.",
    audience: "Pour apprendre la conduite en manuel.",
    duration: "8 heures sur 2 semaines",
    price: "699 DH",
    image: "/image/driving school-cuate.png",
  },
];

const Courses = () => {
  return (
    <section className="courses-section">
      <h2 className="section-title">
        Cours <span>Proposés</span>
      </h2>
      <div className="courses-container">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img
              src={`${process.env.PUBLIC_URL}${course.image}`}
              className="course-image"
              alt=""
            />

            <div className="course-details">
              <h3 className="course-name">{course.name}</h3>
              <p className="course-description">{course.description}</p>
              <p className="course-audience">{course.audience}</p>
              <p className="course-duration">{course.duration}</p>
              <p className="course-price">{course.price}</p>
              <Link to="/reservation" class="button">
                <span class="button__icon-wrapper">
                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="button__icon-svg"
                    width="10"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                    class="button__icon-svg button__icon-svg--copy"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                S’inscrire Maintenant
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
