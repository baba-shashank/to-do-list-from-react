import "./App.css";
function Items() {
  let arr = [
    {
      work: "buy milk",
      date: "15/10/2024",
    },
    {
      work: "Go to college",
      date: "15/10/2024",
    },
    {
      work: "Study react",
      date: "15/10/2024",
    },
  ];
  return (
    <div class="container text-center">
      {arr.map((obj) => (
        <div class="row  meoww">
          <div class="col-sm-4">{obj.work}</div>
          <div class="col-sm-4">{obj.date}</div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-danger">
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Items;
