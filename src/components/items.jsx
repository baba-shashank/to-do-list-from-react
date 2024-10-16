import "./App.css";
function Items({ work, date }) {
  return (
    <div class="container text-center meoww">
      <div class="row">
        <div class="col-sm-4">{work}</div>
        <div class="col-sm-4">{date}</div>
        <div class="col-sm-2">
          <button type="button" class="btn btn-danger">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Items;
