import { Outlet } from "react-router-dom";

function Vehicles() {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h1>Vehicles</h1>
        <Outlet />
        {/* if you have a parent route with children you have to have an outlet */}
      </div>
    </div>
  );
}

export default Vehicles;
