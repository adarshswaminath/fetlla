import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { headers } from "../Utils";
import axios from "axios";
import { StudentDetils } from "./StudentDetils";
import { BatchDetils } from "./BatchDetils";
// @dev main component
function Details() {
  const { state } = useLocation();
  return (
    <div className="p-3">
      <BatchDetils
        id={state.id}
        name={state.name}
        mentor={state.mentor}
        num_students={state.num_students}
        income={state.income}
      />
    </div>
  );
}

export default Details;
