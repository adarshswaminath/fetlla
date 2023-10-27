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
      const [student_name,setStudentName] = useState("")
      const [fee_paid,setFeePaid] = useState(0)
      const [contact_number,setContactNumber] = useState("")
     // function to update the detils 
     const updateStudentDetails = async(e) => {
      const formValues = {
        student_name: student_name,
        contact_number: contact_number,
        fee_paid: fee_paid
      }
      let url =`https://fetlla.pythonanywhere.com/students/${id}/`
      try {
        console.log(formValues);
        const response = await axios.put(url,formValues,{headers})
        alert("Update sucess")
        window.location.reload(false)
      } catch (error) {
        alert(error.message)
      }
    }
    const inputStyle = "w-full px-3 py-2 leading-tight text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline"
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-opacity-70 shadow-lg p-3">
        <div className="h-96 w-96 bg-gray-300 rounded-lg shadow-lg px-3">
          <h1 className="text-center text-xl m-2 font-bold py-4">
            Edit {name} Detils
          </h1>
          
          <div className="mb-4">
              <input
                type="text"
                id="input"
                placeholder={name}
                onChange={(e) => setStudentName(e.target.value)}
                className={inputStyle}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="input"
                placeholder={fee}
                onChange={(e) => setFeePaid(e.target.value)}
                className={inputStyle}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="input"
                placeholder={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className={inputStyle}
              />
            </div>
            
      

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
