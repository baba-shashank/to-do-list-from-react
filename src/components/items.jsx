function Items({ work, date }) {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-4" key={[work]}>
          {work}
        </div>
        <div class="col-sm-4" key={date}>
          {date}
        </div>
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
