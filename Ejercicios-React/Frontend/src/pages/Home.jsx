import React from "react";
import tkdImg from "../assets/home/taekwondo.jpg";
import yogaImg from "../assets/home/yoga.webp";
import "@styles/Home.scss";

const Home = () => {
  return (
    <div className="home-page">
      <h2 className="titulo-home">Actividades del Gym</h2>

      <div className="card-home">
        <div className="actividad">
          <img src="/home/funcional.jpg" alt="Funcional" />
          <h3>Funcional</h3>
        </div>

        <div className="actividad">
          <img src="/home/zumba.jpg" alt="Zumba" />
          <h3>Zumba</h3>
        </div>

        <div className="actividad">
          <img src={tkdImg} alt="Taekwondo" />
          <h3>Taekwondo</h3>
        </div>

        <div className="actividad">
          <img src={yogaImg} alt="Yoga" />
          <h3>Yoga</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;

