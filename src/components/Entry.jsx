import "./App.css";
function Entry({ onkeydown, onchange, onclick }) {
  return (
    <div class="container text-center" className="meoww">
      <div class="row">
        <div class="col-sm-4">
          <input type="text" onKeyDown={onkeydown} />
        </div>
        <div class="col-sm-4">
          <input type="date" name="" id="" onChange={onchange} />
        </div>
        <div class="col-sm-2">
          <button type="button" class="btn btn-success" onClick={onclick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Entry;
