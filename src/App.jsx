import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
function App() {
  return (
    <center>
      <AppName></AppName>
      <div class="container text-center">
        <div class="row">
          <div class="col-sm-4">
            <input type="text" />
          </div>
          <div class="col-sm-4">
            <input type="date" name="" id="" />
          </div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-success">
              Success
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
