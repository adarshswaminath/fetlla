import React from "react";
import { mentorData } from "../../constants";

function Mentors() {
  return (
    <div className="p-3">
      <div className="overflow-x-auto">
  <table className="table table-x5">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Company</th> {/* Corrected Company header */}
        <th>Location</th> {/* Corrected Location header */}
        <th>Last Login</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {mentorData.map((value, index) => (
        <tr key={index}> {/* Use <tr> element for table rows */}
          <td>{value[""]}</td>
          <td>{value.Name}</td>
          <td>{value.Job}</td>
          <td>{value.Company}</td> {/* Corrected Company field */}
          <td>{value.Location}</td> {/* Corrected Location field */}
          <td>{value["Last Login"]}</td> {/* Corrected Last Login field */}
          <td>{value["Favorite Color"]}</td> {/* Corrected Favorite Color field */}
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
}

export default Mentors;
