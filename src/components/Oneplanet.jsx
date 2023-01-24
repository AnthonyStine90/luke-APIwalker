import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function OnePlanet() {
  const { id } = useParams();
  // only variable in app.jsx
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((res) => {
        console.log(res.data);
        setPlanet(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, [id]);

  if (error) {
    return (
      <div className="card mt-3">
        <div className="card-body">
          <h1>"These aren't the droids you're looking for"</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="card mt-3">
      {planet && (
        <div className="card-body">
          <h1>Name: {planet.name}</h1>
          <h1>Height: {planet.climate}</h1>
          <h1>Population: {planet.population}</h1>
          <h1>Terrain: {planet.terrain}</h1>
        </div>
      )}
    </div>
  );
}

export default OnePlanet;
