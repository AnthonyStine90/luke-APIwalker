import { Outlet } from "react-router-dom";

function Planets() {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h1>Planets</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Planets;
