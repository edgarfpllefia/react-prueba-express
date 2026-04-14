import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [equipos, setEquipos] = useState([]);

  async function leerEquipos() {
    const ruta = "https://prueba-api-express.onrender.com/api/equipos";
    const equiposJson = await fetch(ruta);
    const equipos = await equiposJson.json();
    setEquipos(equipos.equipos);
  }

  useEffect(() => {
    console.log("useEffect");
    leerEquipos();
  }, []);

  return (
    <div key={index}>
      <h1>Equipos</h1>
      <p>{JSON.stringify(equipos)}</p>
    </div>
  );
}

export default App;
