import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function OnePerson() {
  const { id } = useParams();
  // only variable in app.jsx
  const [person, setPerson] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      // gets a persons info by id from SW api
      .then((res) => {
        console.log(res.data);
        setPerson(res.data);
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
      {person && (
        <div className="card-body">
          <h1>Name: {person.name}</h1>
          <h1>Height: {person.height}</h1>
          <h1>Mass: {person.mass}</h1>
          <h1>Hair Color : {person.hair_color}</h1>
        </div>
      )}
    </div>
  );
}

export default OnePerson;
