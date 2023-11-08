import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GrMenu } from "react-icons/gr";
import {HiMenuAlt2} from "react-icons/hi"
import { sideBarList } from "../../constants";
import Home from "../Home/Home";
import Batches from "../Batches/Batches";
import Create from "../Create/Create";
import Mentors from "../Mentors/Mentors";
import Details from "../Batches/Details"




function MainSection() {
  return (
    <div>
         <Router>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="drawer-button">
              <HiMenuAlt2 className="h-8 w-8 text-green-500"/>
            </label>

            {/* Page content here */}
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/batches" element={<Batches />}></Route>
              <Route exact path="/create" element={<Create />}></Route>
              <Route exact path="/mentors" element={<Mentors />}></Route>
              <Route exact path="/details" element={<Details/>}></Route>
            </Routes>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
              {/* Sidebar content here */}
              <li>
                <h2 className="text-3xl font-semibold">Fetla Community</h2>
              </li>
              {sideBarList.map((value) => (
                <li className="mt-8 hover:bg-green-500 rounded-lg text-xl" key={value.title}>
                  <Link to={value.path}>{value.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default MainSection