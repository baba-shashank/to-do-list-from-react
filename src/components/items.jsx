import "./App.css";
import { useState } from "react";
function Items({ xrr }) {
  return (
    <div class="container text-center">
      {xrr.map((obj) => (
        <div class="row meoww " key={Math.random()}>
          <div class="col-sm-4">{obj.work}</div>
          <div class="col-sm-4">{obj.date}</div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-danger ">
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Items;
