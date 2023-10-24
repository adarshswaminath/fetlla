import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { headers } from "../Utils";
import { StudentDetils } from "./StudentDetils";
import { useState,useEffect } from "react";

export const BatchDetils = ({
  id,
  name,
  mentor,
  num_students,
  income,
}) => {
  const navigate = useNavigate();
   // get student detils
   const [students,setStudents] = useState([])
   useEffect(() => {
     const RequestStudents = async () => {
       try {
         const res = await fetch(`https://fetlla.pythonanywhere.com/students/`, {
           method: "GET",
           headers: headers
         })
         const data = await res.json()
         setStudents(data)
       } catch (error) {
         console.log(error.message);
       }
     }
     RequestStudents()
   },[])
  // delete the batch
  async function deleteBatch() {
    try {
      const res = await fetch(
        `https://fetlla.pythonanywhere.com/batch/${id}/`,
        {
          method: "DELETE",
          headers: headers,
        }
      );
      alert("Batch Sucess fully deleted");
      navigate("/batches");
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

        <p className="mt-2 text-gray-600">Total Students: {num_students}</p>
        <p className="mt-2 text-gray-600">Total Income: {income}</p>
      </div>

      <h3 className="text-center text-2xl mt-3 font-semibold underline decoration-green-500">
        Student detils
      </h3>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* display the student detils */}
        {students.map((student) => (
          <StudentDetils
            key={student.id}
            id={student.id}
            name={student.student_name}
            batch={student.batch}
            fee={student.fee_paid}
            contactNumber={student.contact_number}
          />
        ))}
      </div>
    </div>
  );
};
