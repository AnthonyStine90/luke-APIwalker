import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function OneVehicle() {
  const { id } = useParams();
  // only variable in app.jsx
  const [vehicle, setVehicle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/vehicles/${id}`)
      .then((res) => {
        console.log(res.data);
        setVehicle(res.data);
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
      {vehicle && (
        <div className="card-body">
          <h1>Name: {vehicle.name}</h1>
        </div>
      )}
    </div>
  );
}

export default OneVehicle;
