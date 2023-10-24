import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { headers } from "../Utils";
import axios from "axios";
import { StudentDetils } from "./StudentDetils";
import { BatchDetils } from "./BatchDetils";
// @dev main component
function Details() {
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
  const { state } = useLocation();
  return (
    <div className="p-3">
      <BatchDetils
        id={state.id}
        name={state.name}
        mentor={state.mentor}
        totalStudents={state.totalStudents}
        income={state.income}
        students={students}
      />
    </div>
  );
}

export default Details;
