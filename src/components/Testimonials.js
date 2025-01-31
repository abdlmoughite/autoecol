import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    { name: 'Mohamed Lachgar', text: "Grâce à cette auto-école, j'ai obtenu mon permis du premier coup !", img: "image/1.png" },
    { name: 'Simo Life', text: 'Des instructeurs très compétents et un environnement convivial.', img: "image/2.png" },
    { name: 'Patric Bad Dived', text: 'Des instructeurs très compétents et un environnement convivial.', img: "image/3.png" },
    { name: 'Patric Bad Dived', text: 'Des instructeurs très compétents et un environnement convivial.', img: "image/4.webp" },
  ];

  return (
    <section className="testimonials">
      <h2>Ce Que Nos <span>Étudiants Disent</span></h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img src={ `${process.env.PUBLIC_URL}/${testimonial.img}`} alt=''/>
            <p><i class="fa-regular fa-message"></i> "{testimonial.text}"</p>
            <h4>{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;