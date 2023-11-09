import Card from "./Card";
import money from "../../assets/images/money.jpg";
import client from "../../assets/images/client.jpg";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineBatchPrediction } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import Graph from "./Graph";

function HomeBody({income,students,batches,expense,batchExpense}) {
  console.log(batchExpense);
  return (
    <div>
        <div className="p-3">
      {/* hero section */}
      <div className="rounded-lg shadow-lg p-2">
        <h2 className="font-bold text-blue-500 mb-2">Batches & Expenses</h2>
        <Graph batchExpense={batchExpense}/>
      </div>
      {/* cards section */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <Card bg="bg-red-500" icon={<GiTeacher />} count="10" title="Mentors" />
        <Card
          bg="bg-green-500"
          icon={<PiStudentBold />}
          count={students}
          title="Students"
        />
        <Card
          bg="bg-purple-500"
          icon={<AiOutlineTeam/>}
          count={batches}
          title="Batches"
        />
        <Card
          bg="bg-orange-500"
          icon={<MdOutlineBatchPrediction />}
          count={expense}
          title="Expense"
        />
      </div>
      {/* two card section */}
      <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {/* first card */}
        <div className="p-12 bg-white rounded-lg shadow-md flex  space-x-5">
          <img src={money} className="h-32 w-32 rounded-lg" alt="money" />
          <div>
            <h3 className="text-2xl font-bold">{income} INR</h3>
            <p>Profit from workshops</p>
            <button className="btn bg-green-500 hover:bg-green-400 text-white">
              Check out
            </button>
          </div>
        </div>

        {/* second card */}
        <div className="p-12 bg-white rounded-lg shadow-md flex space-x-5">
          <img src={client} className="h-32 w-32 rounded-lg" alt="client" />

          <div>
            <h3 className="text-2xl font-bold">$ 12000</h3>
            <p>Profit Client Based Works</p>
            <button className="btn bg-green-500 hover:bg-green-400 text-white">Check out</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HomeBody