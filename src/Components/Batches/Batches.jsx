import React, { useState } from "react";
import { batchDetils } from "../../constants";

const Card = ({ props }) => {
  const { name, mentor, isCompleted, totalStudents, income } = props;
  return (
    <div className="bg-white p-4 shadow-md rounded-lg border-l-4 border-green-500 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">Batch: {name}</h2>
        <p className="text-gray-500">Mentor: {mentor}</p>
        <p className="text-gray-500">Students: {totalStudents}</p>
        <p
          className={`text-${isCompleted ? "green" : "red"}-500 font-semibold`}
        >
          {isCompleted ? (
            <span className="text-green-500">Completed</span>
          ) : (
            <span className="text-red-500">Not Completed</span>
          )}
        </p>
      </div>
      <div>
        <h3 className="text-xl">Total Income</h3>
        <p className="text-green-500 text-3xl font-bold">${income}</p>
      </div>
    </div>
  );
};

function Batches() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="p-3">
      <div className="flex items-center justify-center m-3">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input bg-gray-300"
        />
      </div>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {batchDetils
          .filter((value) =>
            value.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((value) => (
            <Card key={value.name} props={value} />
          ))}
      </div>
    </div>
  );
}

export default Batches;
