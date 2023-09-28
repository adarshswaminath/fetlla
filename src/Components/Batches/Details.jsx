import React from "react";
import { useLocation } from "react-router-dom";
import { batchDetils } from "../../constants";

// @dev display the student detils section
const StudentDetils = ({ name, batch, fee, contactNumber }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-4">
      <h1 className="text-xl font-semibold mb-2">{name}</h1>
      <div className="flex flex-col md:flex-row justify-between mb-2">
        <p className="text-gray-600">Batch: {batch}</p>
        <p className="text-gray-600 md:ml-4">Fee: ${fee}</p>
      </div>
      <p className="text-gray-600">Contact Number: {contactNumber}</p>
    </div>
  );
};

// @dev section to display about the batch
const Box = ({ name, mentor, isCompleted, totalStudents, income}) => {


  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-6 mx-auto my-4 w-72">
        <p className="text-2xl font-bold">Name: {name}</p>
        <p className="mt-2 text-gray-600">Mentor: {mentor}</p>
        <p className="mt-2">
          {isCompleted ? (
            <span className="text-green-500 font-bold">Completed</span>
          ) : (
            <span className="text-red-500 font-bold">Not Completed</span>
          )}
        </p>
        <p className="mt-2 text-gray-600">Total Students: {totalStudents}</p>
        <p className="mt-2 text-gray-600">Total Income: {income}</p>
      </div>

      <h3 className="text-center text-2xl mt-3 font-semibold underline decoration-green-500">
        Student detils
      </h3>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* display the student detils */}
          <StudentDetils
            name="Student Name"
            batch="B1"
            fee={1000}
            contactNumber={1234567890}
           />
      </div>
    </div>
  );
};
// @dev main component
function Details() {

  return (
    <div className="p-3">
      <Box
      name="B1"
      mentor="Mentor Nmae" 
      isCompleted={true}
      totalStudents={24}
      income={1222}
      />
    </div>
  )
}

export default Details;
