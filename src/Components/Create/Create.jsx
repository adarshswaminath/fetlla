import axios from "axios";
import React, { useState } from "react";

function Create() {
  // Define state variables to store form input values
  // @dev refference
  const formValues = {
    batch_name: "",
    faculty: "",
    total_income: 0,
    total_expense: 0,
  }
  // @dev formData is obj collect userinput
  const [formData,setFormData] = useState(formValues)
  // @dev function of onChange
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value });
  }
  // function for submit form POST request
  const handleSubmitForm = async () => {
    try {
      const response = await axios.post('https://fetlla.pythonanywhere.com/batch/', formData, {
        headers: {
          'accept': 'application/json',
          'X-CSRFToken': 'qw9bLNRmxdAwYnWo53TtQxnBLbJsDWqVSmSMMGKgslVB9NuiPtlKLdG2WXU8BWuI',
        }
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
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
              id="batch_name"
              name="batch_name"
              placeholder="Enter Batch Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.batch_name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mentorName" className="block text-gray-700">
              Mentor Name
            </label>
            <input
              type="text"
              id="faculty"
              name="faculty"
              placeholder="Enter Mentor Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.faculty}
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
                id="total_income"
                name="total_income"
                placeholder="Enter Total Income"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={formData.total_income}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="numOfstudents" className="block text-gray-700">
                Total Expense
              </label>
              <input
                type="text"
                id="total_expense"
                name="total_expense"
                placeholder="No.of of Students"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={formData.total_expense}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            onClick={handleSubmitForm}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
