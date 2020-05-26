import React, { useState, useEffect } from "react";
import APIP from "../utils/API/Plan";
import TableRow from "../components/TableRow"

function UserPlans() {
  const [userPlans, setUserPlans] = useState([]);

  useEffect(() => {
    APIP.getAllPlans().then((res) => {
      setUserPlans(
        res.data.map((res) => ({
          id: res._id,
          name: res.name,
          cocktail: res.cocktail,
          meal: res.meal,
          movie: res.movie
        }))
      );
    });
  }, []);

  return (
    <React.Fragment>
      <div
        className="jumbotron container"
        style={{ backgroundColor: "white", paddingBottom: 0, marginBottom: 0 }}
      >
        <h1
          className="display-4"
          style={{ color: "#f54c4c", fontWeight: "bold" }}
        >
          My Plans
        </h1>
        <p className="lead">
          Select any previously saved plans from this section.
        </p>
        <hr className="my-4" />
      </div>
      <div className="container mt-5">
        <table className="table">
          <thead style={{ backgroundColor: "#f54c4c", color: "white" }}>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        <ul style={{paddingLeft:0}}>
        {userPlans.map((item) => {
              return (
                <TableRow 
                key={item.id}
                id={item.id}
                name={item.name}
                cocktail={item.cocktail}
                meal={item.meal}
                movie={item.movie}
                />
              )
            })}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default UserPlans;
