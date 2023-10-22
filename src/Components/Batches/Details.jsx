import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { batchDetils } from "../../constants";
import { url, headers } from "../Utils";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

/*
  page display each detils of students 

*/

// @dev display the student detils section
const StudentDetils = ({name, batch, fee, contactNumber }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-4">
      <h1 className="text-xl font-semibold mb-2">{name}</h1>
      <p className="text-gray-600">Batch: {batch}</p>
      <p className="text-gray-600">Fee: ${fee}</p>
      <p className="text-gray-600">Contact Number: {contactNumber}</p>
    </div>
  );
};

// @dev section to display about the batch
const BatchDetils = ({ id,name, mentor, totalStudents, income }) => {
  const navigate = useNavigate()
  // delete the batch 
  async function deleteBatch(){
    try {
      const res = await fetch(`https://fetlla.pythonanywhere.com/batch/${id}/`, {
        method: "DELETE",
        headers: {
          'accept': 'application/json',
          'X-CSRFToken': 'qw9bLNRmxdAwYnWo53TtQxnBLbJsDWqVSmSMMGKgslVB9NuiPtlKLdG2WXU8BWuI',
        },
      })
      alert("Batch Sucess fully deleted")
      navigate("/batches")
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-6 mx-auto my-4 w-72">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">Name: {name}</p>
          <button className="text-xl text-red-500" onClick={deleteBatch}>
            <AiFillDelete />
          </button>
        </div>
        <p className="mt-2 text-gray-600">Mentor: {mentor}</p>
        {/* <p className="mt-2">
          {isCompleted ? (
            <span className="text-green-500 font-bold">Completed</span>
          ) : (
            <span className="text-red-500 font-bold">Not Completed</span>
          )}
        </p> */}
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
          batch="B2"
          fee={1000}
          contactNumber={1234567890}
        />
      </div>
    </div>
  );
};
// @dev main component
function Details() {
  const { state } = useLocation();
  return (
    <div className="p-3">
      <BatchDetils
        id={state.id}
        name={state.name}
        mentor={state.mentor}
        // isCompleted={true}
        totalStudents={state.totalStudents}
        income={state.income}
      />
    </div>
  );
}

export default Details;
