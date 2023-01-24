import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function OneStarship() {
  const { id } = useParams();
  // only variable in app.jsx
  const [starship, setStarship] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/${id}`)
      .then((res) => {
        console.log(res.data);
        setStarship(res.data);
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
      {starship && (
        <div className="card-body">
          <h1>Name: {starship.name}</h1>
          <h1>Cost: {starship.cost_in_credits} credits</h1>
          <h1>Manufacturer: {starship.manufacturer}</h1>
        </div>
      )}
    </div>
  );
}

export default OneStarship;
