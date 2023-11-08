import React, { useEffect, useState } from "react";
import apiCaller from "../apiCaller";
import HomeBody from "./HomeBody";
function Home() {
  const [data,setData] = useState([])
  const [income,setTotalIncome] = useState(0)
  const [students,setTotalStudents] = useState(0)
  const [batches,setTotalBatches] = useState(0)
  const [expense,setTotalExpense] = useState(0)

  // api call
  useEffect(() => {
      async function apiCall(){
          let res = await apiCaller("batch","GET")
          setData(res)
          setTotalBatches(res.length)
      }
      apiCall()
  },[])
  // set total income
  useEffect(() => {
    const income = data.reduce((total,batch) => {
      return total + parseFloat(batch.total_income)
    },0)
    setTotalIncome(income)
  },[data])
  // set total students
  useEffect(() => {
    const students = data.reduce((total,batch) => {
      return total + parseFloat(batch.num_students)
    },0)
    setTotalStudents(students)
  },[data])
  // set total expense
  useEffect(() => {
    const expenses = data.reduce((total,batch) => {
      return total + parseFloat(batch.total_expense)
    },0)
    setTotalExpense(expenses)
  })
  return (
    <>
      <HomeBody 
        income={income}
        students={students}
        batches={batches}
        expense={expense}
      />
    </>
  );
}

export default Home;
