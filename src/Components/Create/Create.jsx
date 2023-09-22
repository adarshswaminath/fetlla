import React, { useState } from "react";

function Create() {
  // Define state variables to store form input values
  // @dev refference
  const formValues = {
    batchName: "",
    mentorName: "",
    totalIncome: 0,
    numOfstudents: 0,
  }
  // @dev formData is obj collect userinput
  const [formData,setFormData] = useState(formValues)
  // @dev function of onChange
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value });
  }

  return (
    <div className="p-3">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Create Batch</h2>
        {/* user form to collect information */}
        <div>
          <div className="mb-4">
            <label htmlFor="batchName" className="block text-gray-700">
              Batch Name
            </label>
            <input
              type="text"
              id="batchName"
              name="batchName"
              placeholder="Enter Batch Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.batchName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mentorName" className="block text-gray-700">
              Mentor Name
            </label>
            <input
              type="text"
              id="mentorName"
              name="mentorName"
              placeholder="Enter Mentor Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.mentorName}
              onChange={handleChange}
            />
          </div>
          <div className="flex space-x-3">
            <div className="mb-4">
              <label htmlFor="totalIncome" className="block text-gray-700">
                Total Income
              </label>
              <input
                type="text"
                id="totalIncome"
                name="totalIncome"
                placeholder="Enter Total Income"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={formData.totalIncome}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="numOfstudents" className="block text-gray-700">
                Number of Students
              </label>
              <input
                type="text"
                id="numOfstudents"
                name="numOfstudents"
                placeholder="No.of of Students"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={formData.numOfstudents}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            onClick={(e) => console.log(formData) }
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
