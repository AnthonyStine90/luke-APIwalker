import { Outlet } from "react-router-dom";

function People() {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h1>People</h1>
        <Outlet />
        {/* if you have a parent route with children you have to have an outlet to render the child routes. MUST match */}
      </div>
    </div>
  );
}

export default People;
