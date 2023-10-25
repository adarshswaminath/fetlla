import { AiFillDelete } from "react-icons/ai";
import { BsFillPenFill } from "react-icons/bs";
import { headers } from "../Utils";
import { useState } from "react";
import axios from "axios";

export const StudentDetils = ({ id, name, batch, fee, contactNumber }) => {
  const [showModal, isShowModal] = useState(false);
  //   function to update the student detils
  const updateStudent = async () => {
    isShowModal(true);
  };
  // fucntion to delete student from the batch
  const deleteStudent = async () => {
    try {
      const res = await fetch(
        `https://fetlla.pythonanywhere.com/students/${id}/`,
        {
          method: "DELETE",
          headers: headers,
        }
      );
      alert(`${name}  Sucessfully deleted`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const inputs = [
    { name: "student_name", placeholder: name, value: "Student Name" },
    { name: "fee_paid", placeholder: fee, value: "Fee Paid" },
    {name: "contact_number",placeholder: contactNumber,value: "Contact Number"},
  ];

  const ModalToEditStudents = () => {
   
    const studentUpdateInfo = {
      student_name: "",
      fee_paid: 0,
      contact_number: "",
    };
    const handleInputChange = (e) => {
      setStudentInfo({ ...studentinfo, [e.target.name]: e.target.value });
    };
    const [studentinfo, setStudentInfo] = useState(studentUpdateInfo);
     // function to update the detils 
     const updateStudentDetails = async(e) => {
      console.log(studentinfo);
      try {
        const response = await axios.put(
          `https://fetlla.pythonanywhere.com/students/${id}`,
          studentinfo
        )
        alert(response.ok)
      } catch (error) {
        alert(error.message)
      }
    }
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-opacity-70 shadow-lg p-3">
        <div className="h-96 w-96 bg-gray-300 rounded-lg shadow-lg px-3">
          <h1 className="text-center text-xl m-2 font-bold py-4">
            Edit {name} Detils
          </h1>

          {inputs.map((value) => (
            <div className="mb-4" key={value.name}>
              <label
                htmlFor="input"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                {value.value}
              </label>
              <input
                type="text"
                id="input"
                placeholder={value.placeholder}
                name={value.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>
            
          ))}

          <div className="flex items-center gap-3 justify-center p-2">
            <button
              className="px-3 py-1.5 bg-green-500 text-white rounded-lg"
              onClick={updateStudentDetails}
            >
              Update
            </button>
            <button
              className="px-3 py-1.5 bg-red-500 text-white rounded-lg"
              onClick={() => isShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-4 mt-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold mb-2">{name}</h1>
          <div className="flex space-x-5">
            <button onClick={deleteStudent}>
              <AiFillDelete className="text-xl text-red-500" />
            </button>
            <button onClick={updateStudent}>
              <BsFillPenFill className="text-green-500" />
            </button>
          </div>
        </div>
        <p className="text-gray-600">Batch: {batch}</p>
        <p className="text-gray-600">Fee Paid: {fee}</p>
        <p className="text-gray-600">Contact Number: {contactNumber}</p>
      </div>
      {showModal ? <ModalToEditStudents /> : null}
    </div>
  );
};
