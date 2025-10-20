import '@styles/Activities.scss';
import { activities } from '../data/activities.js';
import Card from "../components/Card.jsx";

const Activities = () => {
  const diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleInscribir = (activityName) => {
    alert(`Inscripto en ${activityName}`);
  };

  return (
    <div className="activities-container">
      {activities.map((activity, index) => (
        <div className="activity-card" key={index}>
          <h3>{activity.nombre}</h3>
          <p>{activity.descripcion}</p>
          <ul>
            {activity.horarios.map((horario, idx) => (
              <li key={idx}>
                Día: {diaSemana[horario.dia]} - Inicio: {horario["hora-inicio"]} - Fin: {horario["hora-fin"]}
              </li>
            ))}
          </ul>
          {isLoggedIn && (
            <button onClick={() => handleInscribir(activity.nombre)}>Inscribir</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Activities;
