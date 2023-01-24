import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import People from "./components/People";
import Planets from "./components/Planets";
import SWparent from "./components/SWparent";
import OnePerson from "./components/Oneperson";
import OnePlanet from "./components/Oneplanet";
import Starships from "./components/Starships";
import OneStarship from "./components/Onestarship";
import Vehicles from "./components/Vehicles";
import OneVehicle from "./components/Onevehicle";

function App() {
  return (
    <>
      {/* react fragment - there can only be one parent component */}
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<SWparent to="/people" />}>
            {/* react allows you to nest routes inside of routes. routes will append the parent routes */}
            <Route path="/people/" element={<People />}>
              <Route path=":id" element={<OnePerson />} />
            </Route>
            <Route path="/planets/" element={<Planets />}>
              <Route path=":id" element={<OnePlanet />} />
            </Route>
            <Route path="/starships/" element={<Starships />}>
              <Route path=":id" element={<OneStarship />} />
            </Route>
            <Route path="/vehicles/" element={<Vehicles />}>
              <Route path=":id" element={<OneVehicle />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
